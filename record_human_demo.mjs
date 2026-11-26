import { chromium } from '@playwright/test';
import { existsSync, mkdirSync, copyFileSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

const RECORDINGS_DIR = resolve('D:/mlt/JEEVIKA/recordings_human');
if (!existsSync(RECORDINGS_DIR)) {
  mkdirSync(RECORDINGS_DIR, { recursive: true });
}

// Injects a highly visible mouse cursor and click ripple into any page
async function injectVisualCursor(page) {
  await page.evaluate(() => {
    if (document.getElementById('__human_cursor__')) return;

    const cursor = document.createElement('div');
    cursor.id = '__human_cursor__';
    cursor.style.position = 'fixed';
    cursor.style.left = '400px';
    cursor.style.top = '300px';
    cursor.style.width = '24px';
    cursor.style.height = '24px';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999999';
    cursor.style.transition = 'opacity 0.2s';
    cursor.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.45));">
        <path d="M4 2L13 24L16.5 15.5L25 12L4 2Z" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <div id="__cursor_pulse__" style="position: absolute; top: -8px; left: -8px; width: 40px; height: 40px; border-radius: 50%; border: 3px solid #60A5FA; background: rgba(96, 165, 250, 0.25); opacity: 0; pointer-events: none; transform: scale(0.4);"></div>
    `;
    document.body.appendChild(cursor);

    window.__cursorX = 400;
    window.__cursorY = 300;

    window.__updateCursorPos = (x, y) => {
      window.__cursorX = x;
      window.__cursorY = y;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    window.__animateClick = () => {
      const pulse = document.getElementById('__cursor_pulse__');
      if (pulse) {
        pulse.style.transition = 'none';
        pulse.style.opacity = '1';
        pulse.style.transform = 'scale(0.4)';
        setTimeout(() => {
          pulse.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
          pulse.style.transform = 'scale(2.0)';
          pulse.style.opacity = '0';
        }, 20);
      }
    };
  });
}

// Smoothly moves the mouse cursor along a bezier-like path to an element or position
async function humanMove(page, targetX, targetY, steps = 18) {
  const start = await page.evaluate(() => ({ x: window.__cursorX || 400, y: window.__cursorY || 300 }));
  const dx = targetX - start.x;
  const dy = targetY - start.y;

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    // Ease out cubic
    const ease = 1 - Math.pow(1 - t, 3);
    const curX = start.x + dx * ease;
    const curY = start.y + dy * ease;
    await page.evaluate(({ x, y }) => window.__updateCursorPos(x, y), { x: curX, y: curY });
    await page.waitForTimeout(16);
  }
}

// Moves cursor to element center, pauses, triggers pulse, and clicks
async function humanClick(page, locator, pauseBefore = 350, pauseAfter = 500) {
  await locator.scrollIntoViewIfNeeded();
  const box = await locator.boundingBox();
  if (!box) {
    await locator.click();
    return;
  }
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;

  await humanMove(page, x, y);
  await page.waitForTimeout(pauseBefore);
  await page.evaluate(() => window.__animateClick());
  await locator.click();
  await page.waitForTimeout(pauseAfter);
}

// Moves cursor to a specific coordinate and clicks
async function humanClickPos(page, x, y, pauseBefore = 300, pauseAfter = 400) {
  await humanMove(page, x, y);
  await page.waitForTimeout(pauseBefore);
  await page.evaluate(() => window.__animateClick());
  await page.mouse.click(x, y);
  await page.waitForTimeout(pauseAfter);
}

// Smooth human-like scroll with mouse movement
async function humanScroll(page, targetY, steps = 25) {
  const startY = await page.evaluate(() => window.scrollY);
  const dy = targetY - startY;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const ease = t * (2 - t);
    const curY = startY + dy * ease;
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'auto' }), curY);
    await page.waitForTimeout(30);
  }
}

async function recordLiveWalkthrough() {
  console.log('🎬 Starting Realistic Human Demo Walkthrough Recording...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: RECORDINGS_DIR,
      size: { width: 1920, height: 1080 },
    },
    viewport: { width: 1920, height: 1080 },
  });

  const page = await context.newPage();

  // Listen for navigations to re-inject cursor
  page.on('load', async () => {
    try {
      await injectVisualCursor(page);
    } catch {}
  });

  // =========================================================================
  // SCENE 1: Public Portal Showcase (Hero, Mission, Flowchart)
  // =========================================================================
  console.log('📍 Scene 1: Public Portal...');
  await page.goto('http://localhost:5174/#/', { waitUntil: 'networkidle' });
  await injectVisualCursor(page);
  await page.waitForTimeout(1500);

  // Mouse wanders over hero badges
  await humanMove(page, 450, 240);
  await page.waitForTimeout(600);
  await humanMove(page, 720, 240);
  await page.waitForTimeout(800);

  // Smooth scroll to explore architecture and value propositions
  await humanScroll(page, 650);
  await humanMove(page, 500, 480);
  await page.waitForTimeout(1200);

  await humanScroll(page, 1400);
  await humanMove(page, 850, 520);
  await page.waitForTimeout(1500);

  await humanScroll(page, 2200);
  await page.waitForTimeout(1200);

  // Scroll back to top
  await humanScroll(page, 0);
  await page.waitForTimeout(1000);

  // =========================================================================
  // SCENE 2: Patient Intake Kiosk (Full Interactive Demonstration)
  // =========================================================================
  console.log('📍 Scene 2: Interactive Patient Kiosk...');
  await page.goto('http://localhost:5174/#/kiosk', { waitUntil: 'networkidle' });
  await injectVisualCursor(page);
  await page.waitForTimeout(1500);

  // Human clicks "हिन्दी Hindi" button to demonstrate Indic vernacular support
  const hindiBtn = page.getByRole('button', { name: /हिन्दी|Hindi/i }).first();
  if (await hindiBtn.isVisible()) {
    console.log('  -> Clicking Hindi language...');
    await humanClick(page, hindiBtn, 400, 1000);
  }

  // Human selects demo patient: Ramesh Chandra (52M)
  const demoPatient = page.getByRole('button', { name: /Ramesh Chandra/i }).first();
  if (await demoPatient.isVisible()) {
    console.log('  -> Selecting Demo Patient Ramesh Chandra...');
    await humanClick(page, demoPatient, 400, 1500);
  }

  // Human inspects Step 2 Identity form, moves mouse over ABHA ID & Name
  await humanMove(page, 700, 380);
  await page.waitForTimeout(800);
  await humanMove(page, 950, 460);
  await page.waitForTimeout(800);

  // Human clicks Step 3 "Voice Intake"
  const voiceTab = page.getByRole('button', { name: /Voice|ध्वनि/i }).first();
  if (await voiceTab.isVisible()) {
    console.log('  -> Clicking Voice Intake Tab...');
    await humanClick(page, voiceTab, 300, 1500);
  }

  // Human clicks Step 5 "Complete / टोकन"
  const completeTab = page.getByRole('button', { name: /Complete|समाप्त/i }).first();
  if (await completeTab.isVisible()) {
    console.log('  -> Clicking Complete Step...');
    await humanClick(page, completeTab, 300, 1500);
  }

  // Linger on token confirmation & instructions
  await humanMove(page, 800, 550);
  await page.waitForTimeout(2000);

  // =========================================================================
  // SCENE 3: Doctor OPD Cockpit (Dr. Divyansh, MD, DM & Clinical Scribe)
  // =========================================================================
  console.log('📍 Scene 3: Doctor OPD Cockpit...');
  await page.goto('http://localhost:5174/#/app?view=doctor-consultation', { waitUntil: 'networkidle' });
  await injectVisualCursor(page);
  await page.waitForTimeout(2000);

  // Hover over Doctor RMP Header
  await humanMove(page, 320, 80);
  await page.waitForTimeout(1000);

  // Human clicks on queue filter "🚨 STAT (2)"
  const statBtn = page.getByRole('button', { name: /STAT/i }).first();
  if (await statBtn.isVisible()) {
    console.log('  -> Filtering queue to STAT emergency patients...');
    await humanClick(page, statBtn, 300, 1200);
  }

  // Human clicks on queue filter "Waiting"
  const waitingBtn = page.getByRole('button', { name: /Waiting/i }).first();
  if (await waitingBtn.isVisible()) {
    console.log('  -> Filtering queue to Waiting patients...');
    await humanClick(page, waitingBtn, 300, 1200);
  }

  // Human clicks back to "All (9)"
  const allBtn = page.getByRole('button', { name: /All/i }).first();
  if (await allBtn.isVisible()) {
    console.log('  -> Resetting queue filter to All...');
    await humanClick(page, allBtn, 300, 1000);
  }

  // Select patient Ramesh Chandra in queue
  const rameshItem = page.locator('text=Ramesh Chandra').first();
  if (await rameshItem.isVisible()) {
    console.log('  -> Selecting Ramesh Chandra in OPD Cockpit...');
    await humanClick(page, rameshItem, 400, 1500);
  }

  // Smooth scroll down the clinical consultation workspace
  // Examining vitals, Ambient Scribe SOAP notes
  await humanScroll(page, 450);
  await humanMove(page, 750, 400); // Pointing at SOAP note
  await page.waitForTimeout(1800);

  // Pointing at Herb-Drug interaction alert (Ashwagandha + Warfarin)
  await humanScroll(page, 850);
  await humanMove(page, 800, 350);
  await page.waitForTimeout(2000);

  // Pointing at PMBJP Jan Aushadhi generic substitution (86% savings calculation)
  await humanScroll(page, 1300);
  await humanMove(page, 720, 480);
  await page.waitForTimeout(2500);

  // Scroll back up and switch to another patient: Aarav Patel (Pediatric Asthma)
  await humanScroll(page, 0);
  await page.waitForTimeout(800);

  const aaravItem = page.locator('text=Aarav Patel').first();
  if (await aaravItem.isVisible()) {
    console.log('  -> Switching to patient Aarav Patel (8yo Male)...');
    await humanClick(page, aaravItem, 400, 1500);
    await humanScroll(page, 600);
    await page.waitForTimeout(2000);
    await humanScroll(page, 0);
    await page.waitForTimeout(1000);
  }

  // =========================================================================
  // SCENE 4: Maritime Cloud Clinical Autonomous Agent Mesh
  // =========================================================================
  console.log('📍 Scene 4: Maritime Agents Mesh...');
  const maritimeHeaderBtn = page.getByRole('button', { name: /Maritime Agents/i }).first();
  if (await maritimeHeaderBtn.isVisible()) {
    console.log('  -> Clicking Maritime Agents in header...');
    await humanClick(page, maritimeHeaderBtn, 400, 2000);
  } else {
    await page.goto('http://localhost:5174/#/app?view=maritime-agents', { waitUntil: 'networkidle' });
    await injectVisualCursor(page);
    await page.waitForTimeout(2000);
  }

  // Scroll down Maritime Agent fleet telemetry
  await humanScroll(page, 550);
  await humanMove(page, 650, 400);
  await page.waitForTimeout(2200);
  await humanScroll(page, 0);
  await page.waitForTimeout(1000);

  // =========================================================================
  // SCENE 5: Prune Pro AI Gateway (Semantic Caching & Prompt WAF)
  // =========================================================================
  console.log('📍 Scene 5: Prune AI Gateway...');
  const pruneHeaderBtn = page.getByRole('button', { name: /Prune Gateway/i }).first();
  if (await pruneHeaderBtn.isVisible()) {
    console.log('  -> Clicking Prune Gateway in header...');
    await humanClick(page, pruneHeaderBtn, 400, 2000);
  } else {
    await page.goto('http://localhost:5174/#/app?view=prune-gateway', { waitUntil: 'networkidle' });
    await injectVisualCursor(page);
    await page.waitForTimeout(2000);
  }

  // Move mouse over Semantic Caching (<14ms response) and Prompt WAF
  await humanScroll(page, 450);
  await humanMove(page, 550, 380);
  await page.waitForTimeout(1500);
  await humanMove(page, 850, 480);
  await page.waitForTimeout(1500);
  await humanScroll(page, 0);
  await page.waitForTimeout(1000);

  // =========================================================================
  // SCENE 6: Pharmacy POS & FEFO Inventory Radar
  // =========================================================================
  console.log('📍 Scene 6: Pharmacy POS & Inventory Radar...');
  await page.goto('http://localhost:5174/#/app?view=inventory-dashboard', { waitUntil: 'networkidle' });
  await injectVisualCursor(page);
  await page.waitForTimeout(2000);

  // Explore FEFO radar table
  await humanScroll(page, 400);
  await humanMove(page, 680, 420);
  await page.waitForTimeout(1800);
  await humanScroll(page, 0);
  await page.waitForTimeout(1000);

  // =========================================================================
  // SCENE 7: Hospital Command Center / Admin Dashboard
  // =========================================================================
  console.log('📍 Scene 7: Hospital Command Center Admin...');
  await page.goto('http://localhost:5174/#/app?view=admin', { waitUntil: 'networkidle' });
  await injectVisualCursor(page);
  await page.waitForTimeout(2000);

  // Hover over Bed Occupancy, OPD throughput, and revenue stats
  await humanMove(page, 450, 250);
  await page.waitForTimeout(800);
  await humanMove(page, 850, 250);
  await page.waitForTimeout(800);
  await humanScroll(page, 500);
  await humanMove(page, 650, 450);
  await page.waitForTimeout(2000);
  await humanScroll(page, 0);
  await page.waitForTimeout(1500);

  // Finish video
  console.log('💾 Closing context and saving raw video...');
  const video = page.video();
  await context.close();
  await browser.close();

  const rawPath = await video.path();
  console.log('✅ Human walkthrough recorded successfully:', rawPath);

  // Copy to destination
  const destWebm = resolve('D:/mlt/JEEVIKA/JEEVIKA_Demo_Walkthrough.webm');
  copyFileSync(rawPath, destWebm);
  console.log('✨ Video finalized at:', destWebm);
}

recordLiveWalkthrough().catch(console.error);
