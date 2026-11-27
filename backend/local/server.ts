try {
  (process as any).loadEnvFile?.();
} catch {}

import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { app } from "../src/index";
import { LocalDatabase } from "./database";
import { migrateLocal } from "./migrate";
import { seedDemo } from "./seed";

mkdirSync(".local", { recursive: true });
const db = new LocalDatabase(
  resolve(process.env.INTEGRATION_DB ?? ".local/integration.sqlite"),
);
migrateLocal(db);
await seedDemo(db);
const assets = new Hono();
assets.use("*", serveStatic({ root: "dist/integration" }));
assets.get("*", serveStatic({ path: "dist/integration/index.html" }));
const integrationPort = Number(process.env.INTEGRATION_PORT ?? 8790);
serve(
  {
    fetch: (request) =>
      app.fetch(request, {
        DB: db,
        ENVIRONMENT: "development",
        SARVAM_API_KEY: process.env.SARVAM_API_KEY,
        SARVAM_SPEECH_ENABLED: process.env.SARVAM_SPEECH_ENABLED ?? "true",
        GEMINI_API_KEY: process.env.GEMINI_API_KEY,
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        PRUNE_API_KEY: process.env.PRUNE_API_KEY,
        PRUNE_BASE_URL: process.env.PRUNE_BASE_URL ?? "https://api.withprune.com/v1",
        PRUNE_MODEL: process.env.PRUNE_MODEL ?? "gemini/gemini-3.5-flash-lite",
        MARITIME_API_KEY: process.env.MARITIME_API_KEY,
        MARITIME_BASE_URL: process.env.MARITIME_BASE_URL ?? "https://api.maritime.sh",
        MARITIME_PARTICIPANT_CODE: process.env.MARITIME_PARTICIPANT_CODE ?? "VIHAANX",
        COVEXCODE_ENDPOINT: process.env.COVEXCODE_ENDPOINT ?? "https://llm.covexcode.com/event/v1",
        COVEXCODE_ENDPOINT_INTAKE: process.env.COVEXCODE_ENDPOINT_INTAKE ?? "https://llm.covexcode.com/v1",
        COVEXCODE_ENDPOINT_RX_AUDIT: process.env.COVEXCODE_ENDPOINT_RX_AUDIT ?? "https://llm.covexcode.com/v1",
        COVEXCODE_ENDPOINT_EMERGENCY: process.env.COVEXCODE_ENDPOINT_EMERGENCY ?? "https://llm.covexcode.com/v1",
        COVEXCODE_API_KEY: process.env.COVEXCODE_API_KEY ?? "bx-live-4a8ec18ec6c885f28c0d72be6369a5be",
        COVEXCODE_API_KEY_COPILOT: process.env.COVEXCODE_API_KEY_COPILOT ?? "bx-live-4a8ec18ec6c885f28c0d72be6369a5be",
        COVEXCODE_API_KEY_INTAKE: process.env.COVEXCODE_API_KEY_INTAKE ?? "bx-live-c6fc7d01b3bb94b97223af151abfebe2",
        COVEXCODE_API_KEY_RX_AUDIT: process.env.COVEXCODE_API_KEY_RX_AUDIT ?? "bx-live-acf9d44547af96cd5c16da91fcbdaaea",
        COVEXCODE_API_KEY_EMERGENCY: process.env.COVEXCODE_API_KEY_EMERGENCY ?? "bx-live-f7bd572a876dc1025b72975ca3f1b9d4",
        COVEXCODE_API_KEY_DIAGNOSTICS: process.env.COVEXCODE_API_KEY_DIAGNOSTICS ?? "bx-live-d0a1cf70f9f97514180cc2b26dee759d",
        COVEXCODE_API_KEY_HQ_ANALYTICS: process.env.COVEXCODE_API_KEY_HQ_ANALYTICS ?? "bx-live-c2676132f92fe8ddc0394a1df6324d99",
        COVEXCODE_MODEL: process.env.COVEXCODE_MODEL ?? "deepseek-v4-flash",
        ASSETS: { fetch: (req) => Promise.resolve(assets.fetch(req)) },
      }),
    hostname: "127.0.0.1",
    port: integrationPort,
  },
  () => {
    console.log(
      `DHAAGA integration: http://127.0.0.1:${integrationPort} (synthetic data only; persistent local SQLite)`,
    );
  },
);
