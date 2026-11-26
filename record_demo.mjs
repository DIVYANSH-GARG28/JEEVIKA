import { chromium } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const RECORDINGS_DIR = resolve('D:/mlt/JEEVIKA/recordings');
if (!existsSync(RECORDINGS_DIR)) {
  mkdirSync(RECORDINGS_DIR, { recursive: true });
}

async function smoothScroll(page, startY, targetY, steps = 30, intervalMs = 40) {
  for (let i = 1; i <= steps; i++) {
    const y = startY + (targetY - startY) * (i / steps);
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'auto' }), y);
    await page.waitForTimeout(intervalMs);
  }
}

async function record() {
  console.log('🎬 Launching Chromium for 1080p demo recording...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: RECORDINGS_DIR,
      size: { width: 1920, height: 1080 },
    },
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();

  // -------------------------------------------------------------
  // SCENE 1: Public Landing Page & Healthcare Platform Mission
  // -------------------------------------------------------------
  console.log('📌 Scene 1: Public Landing Page...');
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Smooth scroll down the landing page
  await smoothScroll(page, 0, 700, 25, 40);
  await page.waitForTimeout(2000);
  await smoothScroll(page, 700, 1500, 25, 40);
  await page.waitForTimeout(2000);
  await smoothScroll(page, 1500, 2400, 25, 40);
  await page.waitForTimeout(2000);
  // Scroll back to top
  await smoothScroll(page, 2400, 0, 30, 30);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 2: Patient Intake Kiosk (Vernacular Voice & ABHA Token)
  // -------------------------------------------------------------
  console.log('📌 Scene 2: Patient Intake Kiosk...');
  await page.goto('http://localhost:5174/erp.html?view=patient-kiosk', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  await smoothScroll(page, 0, 450, 20, 40);
  await page.waitForTimeout(2500);
  await smoothScroll(page, 450, 0, 15, 40);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 3: Doctor OPD Cockpit (Ambient Clinical Scribe & NMC Rx)
  // -------------------------------------------------------------
  console.log('📌 Scene 3: Doctor OPD Cockpit & Clinical Copilot...');
  await page.goto('http://localhost:5174/erp.html?view=doctor-consultation', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  // Scroll through live queue, SOAP scribe, herb-drug alert, Jan Aushadhi generic substitution
  await smoothScroll(page, 0, 500, 20, 40);
  await page.waitForTimeout(2500);
  await smoothScroll(page, 500, 1100, 20, 40);
  await page.waitForTimeout(3000);
  await smoothScroll(page, 1100, 1800, 20, 40);
  await page.waitForTimeout(3000);
  await smoothScroll(page, 1800, 0, 25, 30);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 4: Emergency Triage Radar & STEMI Protocol
  // -------------------------------------------------------------
  console.log('📌 Scene 4: Emergency Triage...');
  await page.goto('http://localhost:5174/erp.html?view=emergency-triage', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await smoothScroll(page, 0, 500, 20, 40);
  await page.waitForTimeout(2000);
  await smoothScroll(page, 500, 0, 15, 40);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 5: Pharmacy POS & FEFO Inventory Radar
  // -------------------------------------------------------------
  console.log('📌 Scene 5: Pharmacy POS & Inventory...');
  await page.goto('http://localhost:5174/erp.html?view=inventory-dashboard', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await smoothScroll(page, 0, 500, 20, 40);
  await page.waitForTimeout(2500);
  await smoothScroll(page, 500, 0, 15, 40);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 6: Prune Pro AI Gateway & Semantic Caching Telemetry
  // -------------------------------------------------------------
  console.log('📌 Scene 6: Prune Pro AI Gateway & Telemetry...');
  await page.goto('http://localhost:5174/erp.html?view=prune-gateway', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await smoothScroll(page, 0, 500, 20, 40);
  await page.waitForTimeout(2000);
  await smoothScroll(page, 500, 0, 15, 40);
  await page.waitForTimeout(1500);

  // -------------------------------------------------------------
  // SCENE 7: Hospital Command Center / Admin Dashboard
  // -------------------------------------------------------------
  console.log('📌 Scene 7: Hospital Command Center Admin...');
  await page.goto('http://localhost:5174/erp.html?view=admin', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  await smoothScroll(page, 0, 600, 20, 40);
  await page.waitForTimeout(2500);
  await smoothScroll(page, 600, 0, 15, 40);
  await page.waitForTimeout(2000);

  // Finish video
  console.log('💾 Saving video stream...');
  const video = page.video();
  await context.close();
  await browser.close();

  const videoPath = await video.path();
  console.log('✅ Raw WebM video saved at:', videoPath);

  // Convert to high-quality MP4 using bundled ffmpeg
  const ffmpegExe = 'C:\\Users\\Divyansh Garg\\AppData\\Local\\ms-playwright\\ffmpeg-1013\\ffmpeg-win64.exe';
  const outputMp4 = resolve('D:/mlt/JEEVIKA/JEEVIKA_Demo_Walkthrough.mp4');

  if (existsSync(ffmpegExe)) {
    console.log('🎞️ Converting WebM to 1080p MP4 with ffmpeg...');
    try {
      execFileSync(ffmpegExe, [
        '-i', videoPath,
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '22',
        '-pix_fmt', 'yuv420p',
        '-r', '30',
        outputMp4,
        '-y'
      ], { stdio: 'inherit' });
      console.log('🎉 Successfully generated MP4 video at:', outputMp4);
    } catch (e) {
      console.error('FFmpeg conversion error:', e.message);
    }
  } else {
    console.log('FFmpeg binary not found, WebM video available at:', videoPath);
  }
}

record().catch(console.error);
