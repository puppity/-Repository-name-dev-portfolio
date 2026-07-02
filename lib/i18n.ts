export type Lang = "en" | "th";
export type Loc = { en: string; th: string };
export type LocArr = { en: string[]; th: string[] };

export type Project = {
  name: Loc;
  tagline: Loc;
  featured?: boolean;
  live?: string;
  problem: Loc;
  role: LocArr;
  stack: string[];
  highlights: LocArr;
};

export const UI: Record<Lang, Record<string, string>> = {
  en: {
    kicker: "Portfolio — Full-Stack Developer",
    role: "Full-Stack Developer · Next.js · n8n · AI",
    lead:
      "I build AI-powered platforms end to end — connecting n8n, messaging platforms, LLMs and databases. Work that's live in production and verified with real users.",
    ctaWork: "View Work",
    ctaDemo: "Try the AI Demo",
    ctaContact: "Contact",
    navWork: "Work",
    navDemo: "Demo",
    navContact: "Contact",
    workTitle: "Selected Work",
    workNum: "05 — PROJECTS",
    demoTitle: "AI Property Matcher",
    demoBadge: "for-fun demo",
    demoNum: "DEMO · FOR FUN",
    demoSub:
      "Type what you want in plain language → it ranks best-fit mock listings with reasons. A lightweight, client-side heuristic demo (not a real engine) — the production version uses pgvector + LLM re-rank; see “How I'd build it”.",
    approachTitle: "How I'd build it",
    approachNum: "APPROACH",
    fitTitle: "Why I fit this role",
    fitNum: "REQUIREMENTS ✓",
    footTitle: "Ready to help build your AI platform.",
    ciName: "Name",
    ciAge: "Age",
    ciTel: "Tel",
    callBtn: "Call me",
    fine: "Confirmed: real n8n experience — Turtle.Talking is built entirely on n8n and runs in production · Built with Next.js",
    liveLink: "View it live →",
    moreInfo: "More details on request",
    flag: "Live in Production",
    n8nCaption: "The real n8n backend — “LINE DeepSeek Smart Financial v3”, 36+ nodes across 4 workflows.",
  },
  th: {
    kicker: "พอร์ตโฟลิโอ — Full-Stack Developer",
    role: "Full-Stack Developer · Next.js · n8n · AI",
    lead:
      "ผมสร้างแพลตฟอร์มที่ขับเคลื่อนด้วย AI ตั้งแต่ต้นจนถึง production — เชื่อม n8n, แพลตฟอร์มข้อความ, LLM และฐานข้อมูล มีผลงานรันจริงที่ verify กับผู้ใช้แล้ว",
    ctaWork: "ดูผลงาน",
    ctaDemo: "ลองเดโม AI",
    ctaContact: "ติดต่อ",
    navWork: "ผลงาน",
    navDemo: "เดโม",
    navContact: "ติดต่อ",
    workTitle: "ผลงานที่คัดมา",
    workNum: "05 — โปรเจกต์",
    demoTitle: "ระบบจับคู่อสังหาด้วย AI",
    demoBadge: "เดโมเล่น ๆ",
    demoNum: "เดโม · เล่น ๆ",
    demoSub:
      "พิมพ์ความต้องการเป็นภาษาคน → จัดอันดับทรัพย์ (จำลอง) ที่เหมาะที่สุดพร้อมเหตุผล เป็นเดโม heuristic เล่น ๆ ทำงานฝั่ง client (ไม่ใช่ engine จริง) — ตัวจริงใช้ pgvector + LLM re-rank ดูหัวข้อ “ถ้าให้สร้างจริง”",
    approachTitle: "ถ้าให้สร้างจริง ผมจะทำแบบนี้",
    approachNum: "วิธีคิด",
    fitTitle: "ทำไมผมเหมาะกับงานนี้",
    fitNum: "ตรงสเปก ✓",
    footTitle: "พร้อมมาช่วยสร้างแพลตฟอร์ม AI ให้ทีมครับ",
    ciName: "ชื่อ",
    ciAge: "อายุ",
    ciTel: "โทร",
    callBtn: "โทรหาผม",
    fine: "ยืนยัน: เคยใช้ n8n จริง — Turtle.Talking สร้างบน n8n ทั้งระบบ รัน production · Built with Next.js",
    liveLink: "เปิดดูของจริง →",
    moreInfo: "รายละเอียดเพิ่มเติมตอนสัมภาษณ์",
    flag: "รัน Production",
    n8nCaption: "หลังบ้าน n8n จริง — “LINE DeepSeek Smart Financial v3”, 36+ nodes รวม 4 workflows",
  },
};

export const PROJECTS: Project[] = [
  {
    name: { en: "Turtle.Talking", th: "Turtle.Talking (น้องเต่า)" },
    tagline: {
      en: "AI-powered personal finance assistant on LINE",
      th: "ผู้ช่วยการเงินส่วนตัวบน LINE ที่ขับเคลื่อนด้วย AI",
    },
    featured: true,
    live: "https://line.me/R/ti/p/@568xvprg",
    problem: {
      en: "People want to log income/expenses, set reminders, and plan their finances just by chatting in plain language on LINE — without opening a separate app.",
      th: "คนไทยอยากจดรายรับ-รายจ่าย ตั้งเตือน และวางแผนการเงินโดยแค่พิมพ์คุยภาษาธรรมชาติใน LINE ไม่ต้องเปิดแอปแยก",
    },
    role: {
      en: [
        "Designed & built the whole system on n8n (4 workflows, 36+ nodes)",
        "Integrated the LINE Messaging API (webhook, reply, push, rich menu)",
        "Integrated an LLM (DeepSeek/Gemini) with auto thinking-mode + JSON intent routing",
        "Designed the Postgres schema & fixed 6 production bugs to stabilize it",
        "Self-hosted on Coolify with a daily DB backup cron",
      ],
      th: [
        "ออกแบบและสร้างระบบทั้งหมดบน n8n (4 workflows, 36+ nodes)",
        "ต่อ LINE Messaging API (webhook, reply, push, rich menu)",
        "ต่อ LLM (DeepSeek/Gemini) พร้อม auto thinking-mode + JSON intent routing",
        "ออกแบบ schema Postgres + แก้บั๊ก production 6 จุดจนระบบนิ่ง",
        "Deploy self-host บน Coolify + cron backup รายวัน",
      ],
    },
    stack: ["n8n", "LINE API", "LLM (DeepSeek/Gemini)", "PostgreSQL", "Google Drive/Calendar", "Coolify"],
    highlights: {
      en: [
        "Live in production — verified with real LINE users",
        "17 intents: expenses, transfers, multi-account, reminders, file search, monthly reports",
        "100% accurate math (moved arithmetic out of the LLM into JS)",
      ],
      th: [
        "รันจริง — verify กับผู้ใช้ LINE จริงแล้ว",
        "17 intents: จดรายรับ/จ่าย, โอน, หลายบัญชี, เตือน, หาไฟล์, สรุปเดือน",
        "คำนวณเลขแม่นยำ 100% (ย้ายการบวกออกจาก LLM มาทำใน JS)",
      ],
    },
  },
  {
    name: { en: "Cha Phranakhon", th: "Cha Phranakhon (ชาพระนคร)" },
    tagline: {
      en: "Multi-tenant SaaS platform for franchise management",
      th: "แพลตฟอร์ม SaaS จัดการแฟรนไชส์แบบ multi-tenant",
    },
    live: "https://chaphranakhon.com/",
    problem: {
      en: "A franchise chain needs one system for 4 roles (customer / partner / admin / kiosk) — managing branches, orders, stock, and marketing all at once.",
      th: "เชนแฟรนไชส์ต้องการระบบเดียวที่รองรับ 4 บทบาท (ลูกค้า/พาร์ทเนอร์/แอดมิน/Kiosk) จัดการสาขา ออเดอร์ สต็อก และการตลาดพร้อมกัน",
    },
    role: {
      en: [
        "Full-stack development with Next.js 14 App Router + TypeScript",
        "Designed 4-tier role-based access + Firestore security rules",
        "Built dashboards/analytics, ingredient stock management, branch chat, coupons",
      ],
      th: [
        "พัฒนา full-stack ด้วย Next.js 14 App Router + TypeScript",
        "ออกแบบ role-based access 4 ระดับ + Firestore security rules",
        "ระบบ dashboard/analytics, จัดการสต็อกวัตถุดิบ, แชทสาขา, คูปอง",
      ],
    },
    stack: ["Next.js 14", "TypeScript", "Firebase", "Tailwind", "Recharts", "MapLibre", "Capacitor (iOS)"],
    highlights: {
      en: [
        "A real multi-tenant SaaS with 4 roles",
        "Full admin panel: branches / menu / orders / users / marketing",
        "Kiosk self-ordering + branch finder on a map",
      ],
      th: [
        "Multi-tenant SaaS จริง 4 roles",
        "Admin panel เต็มระบบ: สาขา/เมนู/ออเดอร์/ผู้ใช้/การตลาด",
        "Kiosk self-ordering + ค้นหาสาขาบนแผนที่",
      ],
    },
  },
  {
    name: { en: "ReadAgain (readagainpodcast.com)", th: "ReadAgain (readagainpodcast.com)" },
    tagline: {
      en: "Book-summary platform via video & podcast",
      th: "แพลตฟอร์มสรุปหนังสือด้วยวิดีโอ/พอดแคสต์",
    },
    live: "https://readagainpodcast.com/",
    problem: {
      en: "People love good books but lack time — they need one place with bite-sized video/audio summaries that are easy to browse, searchable, and clearly categorized.",
      th: "คนอยากอ่านหนังสือดี ๆ แต่ไม่มีเวลา — ต้องการที่รวมสรุปหนังสือแบบวิดีโอ/เสียง ดูง่าย ค้นหาไว จัดหมวดหมู่ชัดเจน",
    },
    role: {
      en: [
        "Full-stack web development (Next.js) + an admin content-management system",
        "Category / recommendation / latest-content sections + search",
        "Bilingual (TH/EN) support + social sharing (FB / X / Threads / LINE)",
        "Deployed on Coolify (Nixpacks)",
      ],
      th: [
        "พัฒนาเว็บ full-stack (Next.js) + ระบบจัดการคอนเทนต์ฝั่งแอดมิน",
        "ระบบหมวดหมู่ / แนะนำ / คอนเทนต์ล่าสุด + ค้นหา",
        "รองรับ 2 ภาษา (ไทย/อังกฤษ) + แชร์ social (FB / X / Threads / LINE)",
        "Deploy บน Coolify (Nixpacks)",
      ],
    },
    stack: ["Next.js", "CMS / Admin", "i18n (TH/EN)", "Coolify"],
    highlights: {
      en: [
        "Live at readagainpodcast.com",
        "Self-serve admin content management",
        "Multi-category content structure + search",
      ],
      th: [
        "เว็บจริงออนไลน์ readagainpodcast.com",
        "ระบบแอดมินจัดการคอนเทนต์เอง",
        "โครงสร้างคอนเทนต์หลายหมวด + ระบบค้นหา",
      ],
    },
  },
  {
    name: { en: "UniClip", th: "UniClip" },
    tagline: {
      en: "Cross-platform knowledge base with semantic search",
      th: "คลังความรู้ cross-platform ที่ค้นด้วยความหมาย (semantic search)",
    },
    live: "",
    problem: {
      en: "You save content in many places (FB, TikTok, the web) but can never find it again — you need one hub you can search by meaning and context.",
      th: "เซฟคอนเทนต์ไว้หลายที่ (FB, TikTok, เว็บ) แต่กลับมาหาไม่เจอ — ต้องการ hub เดียวที่ค้นด้วยบริบทได้",
    },
    role: {
      en: [
        "Designed an AI background pipeline: auto-tag, auto-summary, embeddings",
        "Semantic search from vector embeddings",
        "Freemium SaaS model + real-time sync across devices",
      ],
      th: [
        "ออกแบบ AI background pipeline: auto-tag, auto-summary, embeddings",
        "Semantic search จาก vector embeddings",
        "โมเดล freemium SaaS + sync realtime ข้ามอุปกรณ์",
      ],
    },
    stack: ["Next.js", "LLM", "Vector Embeddings", "Semantic Search", "Coolify"],
    highlights: {
      en: [
        "Same core as an 'AI property matcher' — embeddings + semantic retrieval",
        "AI async processing (no waiting for the user)",
      ],
      th: [
        "หัวใจเดียวกับ 'ระบบจับคู่อสังหาด้วย AI' — embeddings + semantic retrieval",
        "AI async processing (ผู้ใช้ไม่ต้องรอ)",
      ],
    },
  },
  {
    name: { en: "BGEZ", th: "BGEZ" },
    tagline: {
      en: "Real-time board-game tracking & analytics app",
      th: "แอปติดตาม & วิเคราะห์วงบอร์ดเกมแบบ real-time",
    },
    live: "https://bgez.space/",
    problem: {
      en: "Board-game groups want to record wins/losses, match players, and see live stats — via QR codes and real-time rooms.",
      th: "กลุ่มเล่นบอร์ดเกมอยากบันทึกผลแพ้-ชนะ จับคู่ผู้เล่น และดูสถิติแบบสด ผ่าน QR/ห้องเรียลไทม์",
    },
    role: {
      en: [
        "Full-stack Next.js + Firebase real-time + MongoDB (stats)",
        "Real-time rooms, per-room rotating QR, server-authoritative timer",
        "Integrated the BoardGameGeek API + insights (win rate, H-index, heatmap)",
      ],
      th: [
        "Full-stack Next.js + Firebase realtime + MongoDB (stats)",
        "Real-time rooms, QR หมุนต่อห้อง, timer แบบ server-authoritative",
        "ต่อ BoardGameGeek API + insights (win rate, H-index, heatmap)",
      ],
    },
    stack: ["Next.js", "Firebase (real-time)", "MongoDB", "BGG API", "Vercel"],
    highlights: {
      en: ["Real-time matchmaking + live rooms", "Append-only immutable records"],
      th: ["Real-time matchmaking + ห้องสด", "Append-only immutable records"],
    },
  },
];

export const APPROACH: { title: Loc; body: Loc }[] = [
  {
    title: { en: "Matching layer", th: "Matching layer" },
    body: {
      en: "Extract listing data with an LLM → build embeddings stored in Postgres (pgvector). A buyer's needs become an embedding too, then matching is hybrid: semantic similarity + rule filters, with an LLM re-ranking results and explaining why.",
      th: "Extract ข้อมูลทรัพย์ด้วย LLM → สร้าง embedding เก็บใน Postgres (pgvector). ความต้องการผู้ซื้อแปลงเป็น embedding แล้วจับคู่แบบ hybrid: semantic similarity + ฟิลเตอร์เชิงกฎ และให้ LLM re-rank พร้อมสรุปเหตุผล",
    },
  },
  {
    title: { en: "Automation layer (n8n)", th: "Automation layer (n8n)" },
    body: {
      en: "Messages from LINE/Messenger/WhatsApp → webhook → intent detection with an LLM → auto-reply / send matches / book a viewing → sync to CRM + Google Calendar and push follow-up reminders.",
      th: "ข้อความจาก LINE/Messenger/WhatsApp → webhook → ตรวจ intent ด้วย LLM → ตอบอัตโนมัติ / ส่งแมตช์ทรัพย์ / นัดดูบ้าน → sync CRM + Google Calendar และ push แจ้งเตือน follow-up",
    },
  },
  {
    title: { en: "Already done for real", th: "ทำมาแล้วจริง" },
    body: {
      en: "I've shipped this exact LINE → n8n → LLM → Postgres architecture in Turtle.Talking (deployed on Coolify), and built semantic search with embeddings in UniClip — so extending it to real estate is immediate.",
      th: "ผมทำสถาปัตยกรรม LINE → n8n → LLM → Postgres นี้จริงใน Turtle.Talking (deploy บน Coolify) และทำ semantic search ด้วย embeddings ใน UniClip มาแล้ว — ต่อยอดเป็นระบบอสังหาได้ทันที",
    },
  },
];

export const STACK_MATCH: { need: Loc; have: Loc }[] = [
  {
    need: { en: "Real n8n experience", th: "ใช้ n8n จริง" },
    have: {
      en: "Turtle.Talking is built entirely on n8n (4 workflows), live in production on Coolify",
      th: "Turtle.Talking สร้างบน n8n ทั้งระบบ (4 workflows) รันจริงบน Coolify",
    },
  },
  {
    need: { en: "Next.js + DB + AI features", th: "Next.js + DB + AI features" },
    have: {
      en: "Cha Phranakhon, ReadAgain, BGEZ, UniClip — Next.js 14 + Firebase/Mongo + AI",
      th: "Cha Phranakhon, ReadAgain, BGEZ, UniClip — Next.js 14 + Firebase/Mongo + AI",
    },
  },
  {
    need: { en: "Messaging-platform APIs", th: "API แพลตฟอร์มข้อความ" },
    have: {
      en: "Full LINE Messaging API (webhook / reply / push / rich menu)",
      th: "LINE Messaging API เต็มระบบ (webhook / reply / push / rich menu)",
    },
  },
  {
    need: { en: "LLM API (Claude/OpenAI)", th: "LLM API (Claude/OpenAI)" },
    have: {
      en: "DeepSeek + Gemini via an OpenAI-compatible endpoint",
      th: "DeepSeek + Gemini ผ่าน OpenAI-compatible endpoint",
    },
  },
  {
    need: { en: "Google APIs", th: "Google API" },
    have: {
      en: "Google Drive (search/share) + Calendar (events/reminders)",
      th: "Google Drive (search/share) + Calendar (events/reminder)",
    },
  },
  {
    need: { en: "Supabase / Firebase / PostgreSQL", th: "Supabase / Firebase / PostgreSQL" },
    have: { en: "Used all three across shipped projects", th: "ใช้มาครบทั้ง 3" },
  },
  {
    need: { en: "At least 1 real, shipped project", th: "ผลงานใช้งานจริง ≥ 1 ชิ้น" },
    have: {
      en: "Turtle.Talking runs in production, verified with real users",
      th: "Turtle.Talking รัน production verify กับผู้ใช้จริง",
    },
  },
  {
    need: { en: "(Bonus) SaaS / marketplace", th: "(พิเศษ) SaaS / marketplace" },
    have: {
      en: "Cha Phranakhon (franchise SaaS), UniClip (freemium SaaS)",
      th: "Cha Phranakhon (franchise SaaS), UniClip (freemium SaaS)",
    },
  },
];
