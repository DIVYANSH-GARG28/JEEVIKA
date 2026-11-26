import { useEffect, useState } from "react";
import {
  getWebsiteLocale,
  setWebsiteLocale,
  startWebsiteLocalization,
  websiteLocales,
  type WebsiteLocale,
} from "../../../../packages/i18n/website";

export function WebsiteLocalizationRuntime() {
  useEffect(() => startWebsiteLocalization(), []);
  return null;
}

export function WebsiteLanguageSelect() {
  const [locale, setLocale] = useState<WebsiteLocale>(() => getWebsiteLocale());
  const [isKiosk, setIsKiosk] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.location.hash.includes('kiosk') || window.location.pathname.includes('kiosk');
  });

  useEffect(() => {
    const handleLocation = () => {
      setIsKiosk(window.location.hash.includes('kiosk') || window.location.pathname.includes('kiosk'));
    };
    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('popstate', handleLocation);
    return () => {
      window.removeEventListener('hashchange', handleLocation);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  useEffect(() => {
    const update = (event: Event) => setLocale((event as CustomEvent<WebsiteLocale>).detail);
    document.addEventListener("jeevika:locale-change", update);
    return () => document.removeEventListener("jeevika:locale-change", update);
  }, []);

  if (isKiosk) return null;

  return (
    <label className="fixed bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 hover:bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-md backdrop-blur transition-all">
      <span className="text-slate-400 text-xs">🌐</span>
      <span className="sr-only">Language</span>
      <select
        data-website-locale
        aria-label="Choose language"
        className="bg-transparent text-slate-800 text-xs font-medium cursor-pointer focus:outline-none"
        value={locale}
        onChange={(event) => {
          const selected = event.target.value as WebsiteLocale;
          setLocale(selected);
          setWebsiteLocale(selected);
        }}
      >
        {Object.entries(websiteLocales).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>
    </label>
  );
}
