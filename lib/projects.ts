export type Project = {
  name: string;
  tagline: string;
  featured?: boolean;
  live?: string;
  problem: string;
  role: string[];
  stack: string[];
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Turtle.Talking (น้องเต่า)",
    tagline: "ผู้ช่วยการเงินส่วนตัวบน LINE ที่ขับเคลื่อนด้วย AI",
    featured: true,
    live: "https://line.me/R/ti/p/@568xvprg",
    problem:
      "คนไทยอยากจดรายรับ-รายจ่าย ตั้งเตือน และวางแผนการเงินโดยแค่พิมพ์คุยภาษาธรรมชาติใน LINE ไม่ต้องเปิดแอปแยก",
    role: [
      "ออกแบบและสร้างระบบทั้งหมดบน n8n (4 workflows, 36+ nodes)",
      "ต่อ LINE Messaging API (webhook, reply, push, rich menu)",
      "ต่อ LLM (DeepSeek/Gemini) พร้อม auto thinking-mode + JSON intent routing",
      "ออกแบบ schema Postgres + แก้บั๊ก production 6 จุดจนระบบนิ่ง",
      "Deploy self-host บน Coolify + cron backup รายวัน",
    ],
    stack: ["n8n", "LINE API", "LLM (DeepSeek/Gemini)", "PostgreSQL", "Google Drive/Calendar", "Coolify"],
    highlights: [
      "รันจริง — verify กับผู้ใช้ LINE จริงแล้ว",
      "17 intents: จดรายรับ/จ่าย, โอน, หลายบัญชี, เตือน, หาไฟล์ Drive/OneDrive, สรุปเดือน",
      "คำนวณเลขแม่นยำ 100% (ย้ายการบวกออกจาก LLM มาทำใน JS)",
    ],
  },
  {
    name: "Cha Phranakhon (ชาพระนคร)",
    tagline: "แพลตฟอร์ม SaaS จัดการแฟรนไชส์แบบ multi-tenant",
    live: "",
    problem:
      "เชนแฟรนไชส์ต้องการระบบเดียวที่รองรับ 4 บทบาท (ลูกค้า/พาร์ทเนอร์/แอดมิน/Kiosk) จัดการสาขา ออเดอร์ สต็อก และการตลาดพร้อมกัน",
    role: [
      "พัฒนา full-stack ด้วย Next.js 14 App Router + TypeScript",
      "ออกแบบ role-based access 4 ระดับ + Firestore security rules",
      "ระบบ dashboard/analytics, จัดการสต็อกวัตถุดิบ, แชทสาขา, คูปอง",
    ],
    stack: ["Next.js 14", "TypeScript", "Firebase", "Tailwind", "Recharts", "MapLibre", "Capacitor (iOS)"],
    highlights: [
      "Multi-tenant SaaS จริง 4 roles",
      "Admin panel เต็มระบบ: สาขา/เมนู/ออเดอร์/ผู้ใช้/การตลาด",
      "Kiosk self-ordering + ค้นหาสาขาบนแผนที่",
    ],
  },
  {
    name: "UniClip",
    tagline: "คลังความรู้ cross-platform ที่ค้นด้วยความหมาย (semantic search)",
    live: "",
    problem:
      "เซฟคอนเทนต์ไว้หลายที่ (FB, TikTok, เว็บ) แต่กลับมาหาไม่เจอ — ต้องการ hub เดียวที่ค้นด้วยบริบทได้",
    role: [
      "ออกแบบ AI background pipeline: auto-tag, auto-summary, embeddings",
      "Semantic search จาก vector embeddings",
      "โมเดล freemium SaaS + sync realtime ข้ามอุปกรณ์",
    ],
    stack: ["Next.js", "LLM", "Vector Embeddings", "Semantic Search", "Coolify"],
    highlights: [
      "หัวใจเดียวกับ 'ระบบจับคู่อสังหาด้วย AI' — embeddings + semantic retrieval",
      "AI async processing (ผู้ใช้ไม่ต้องรอ)",
    ],
  },
  {
    name: "BGEZ",
    tagline: "แอปติดตาม & วิเคราะห์วงบอร์ดเกมแบบ real-time",
    live: "",
    problem:
      "กลุ่มเล่นบอร์ดเกมอยากบันทึกผลแพ้-ชนะ จับคู่ผู้เล่น และดูสถิติแบบสด ผ่าน QR/ห้องเรียลไทม์",
    role: [
      "Full-stack Next.js + Firebase realtime + MongoDB (stats)",
      "Real-time rooms, QR หมุนต่อห้อง, timer แบบ server-authoritative",
      "ต่อ BoardGameGeek API + insights (win rate, H-index, heatmap)",
    ],
    stack: ["Next.js", "Firebase (realtime)", "MongoDB", "BGG API", "Vercel"],
    highlights: [
      "Real-time matchmaking + ห้องสด",
      "Append-only immutable records",
    ],
  },
];

export const STACK_MATCH: { need: string; have: string }[] = [
  { need: "ใช้ n8n จริง", have: "Turtle.Talking สร้างบน n8n ทั้งระบบ (4 workflows) รันจริงบน Coolify" },
  { need: "Next.js + DB + AI features", have: "Cha Phranakhon, BGEZ, UniClip — Next.js 14 + Firebase/Mongo + AI" },
  { need: "API แพลตฟอร์มข้อความ", have: "LINE Messaging API เต็มระบบ (webhook/reply/push/rich menu)" },
  { need: "LLM API (Claude/OpenAI)", have: "DeepSeek + Gemini ผ่าน OpenAI-compatible endpoint" },
  { need: "Google API", have: "Google Drive (search/share) + Calendar (events/reminder)" },
  { need: "Supabase/Firebase/PostgreSQL", have: "ใช้มาครบทั้ง 3" },
  { need: "ผลงานใช้งานจริง ≥ 1 ชิ้น", have: "Turtle.Talking รัน production verify กับผู้ใช้จริง" },
  { need: "(พิเศษ) SaaS/marketplace", have: "Cha Phranakhon (franchise SaaS), UniClip (freemium SaaS)" },
];
