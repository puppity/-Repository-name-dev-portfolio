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
    name: "Turtle.Talking",
    tagline: "AI-powered personal finance assistant on LINE",
    featured: true,
    live: "https://line.me/R/ti/p/@568xvprg",
    problem:
      "People want to log income/expenses, set reminders, and plan their finances just by chatting in plain language on LINE — without opening a separate app.",
    role: [
      "Designed & built the whole system on n8n (4 workflows, 36+ nodes)",
      "Integrated the LINE Messaging API (webhook, reply, push, rich menu)",
      "Integrated an LLM (DeepSeek/Gemini) with auto thinking-mode + JSON intent routing",
      "Designed the Postgres schema & fixed 6 production bugs to stabilize it",
      "Self-hosted on Coolify with a daily DB backup cron",
    ],
    stack: ["n8n", "LINE API", "LLM (DeepSeek/Gemini)", "PostgreSQL", "Google Drive/Calendar", "Coolify"],
    highlights: [
      "Live in production — verified with real LINE users",
      "17 intents: expenses, transfers, multi-account, reminders, file search, monthly reports",
      "100% accurate math (moved arithmetic out of the LLM into JS)",
    ],
  },
  {
    name: "Cha Phranakhon",
    tagline: "Multi-tenant SaaS platform for franchise management",
    live: "https://chaphranakhon.com/",
    problem:
      "A franchise chain needs one system for 4 roles (customer / partner / admin / kiosk) — managing branches, orders, stock, and marketing all at once.",
    role: [
      "Full-stack development with Next.js 14 App Router + TypeScript",
      "Designed 4-tier role-based access + Firestore security rules",
      "Built dashboards/analytics, ingredient stock management, branch chat, coupons",
    ],
    stack: ["Next.js 14", "TypeScript", "Firebase", "Tailwind", "Recharts", "MapLibre", "Capacitor (iOS)"],
    highlights: [
      "A real multi-tenant SaaS with 4 roles",
      "Full admin panel: branches / menu / orders / users / marketing",
      "Kiosk self-ordering + branch finder on a map",
    ],
  },
  {
    name: "ReadAgain (readagainpodcast.com)",
    tagline: "Book-summary platform via video & podcast",
    live: "https://readagainpodcast.com/",
    problem:
      "People love good books but lack time — they need one place with bite-sized video/audio summaries that are easy to browse, searchable, and clearly categorized.",
    role: [
      "Full-stack web development (Next.js) + an admin content-management system",
      "Category / recommendation / latest-content sections + search",
      "Bilingual (TH/EN) support + social sharing (FB / X / Threads / LINE)",
      "Deployed on Coolify (Nixpacks)",
    ],
    stack: ["Next.js", "CMS / Admin", "i18n (TH/EN)", "Coolify"],
    highlights: [
      "Live at readagainpodcast.com",
      "Self-serve admin content management",
      "Multi-category content structure + search",
    ],
  },
  {
    name: "UniClip",
    tagline: "Cross-platform knowledge base with semantic search",
    live: "",
    problem:
      "You save content in many places (FB, TikTok, the web) but can never find it again — you need one hub that you can search by meaning and context.",
    role: [
      "Designed an AI background pipeline: auto-tag, auto-summary, embeddings",
      "Semantic search from vector embeddings",
      "Freemium SaaS model + real-time sync across devices",
    ],
    stack: ["Next.js", "LLM", "Vector Embeddings", "Semantic Search", "Coolify"],
    highlights: [
      "Same core as an 'AI property matcher' — embeddings + semantic retrieval",
      "AI async processing (no waiting for the user)",
    ],
  },
  {
    name: "BGEZ",
    tagline: "Real-time board-game tracking & analytics app",
    live: "https://bgez.space/",
    problem:
      "Board-game groups want to record wins/losses, match players, and see live stats — via QR codes and real-time rooms.",
    role: [
      "Full-stack Next.js + Firebase real-time + MongoDB (stats)",
      "Real-time rooms, per-room rotating QR, server-authoritative timer",
      "Integrated the BoardGameGeek API + insights (win rate, H-index, heatmap)",
    ],
    stack: ["Next.js", "Firebase (real-time)", "MongoDB", "BGG API", "Vercel"],
    highlights: [
      "Real-time matchmaking + live rooms",
      "Append-only immutable records",
    ],
  },
];

export const STACK_MATCH: { need: string; have: string }[] = [
  { need: "Real n8n experience", have: "Turtle.Talking is built entirely on n8n (4 workflows), live in production on Coolify" },
  { need: "Next.js + DB + AI features", have: "Cha Phranakhon, ReadAgain, BGEZ, UniClip — Next.js 14 + Firebase/Mongo + AI" },
  { need: "Messaging-platform APIs", have: "Full LINE Messaging API (webhook / reply / push / rich menu)" },
  { need: "LLM API (Claude/OpenAI)", have: "DeepSeek + Gemini via an OpenAI-compatible endpoint" },
  { need: "Google APIs", have: "Google Drive (search/share) + Calendar (events/reminders)" },
  { need: "Supabase / Firebase / PostgreSQL", have: "Used all three across shipped projects" },
  { need: "At least 1 real, shipped project", have: "Turtle.Talking runs in production, verified with real users" },
  { need: "(Bonus) SaaS / marketplace", have: "Cha Phranakhon (franchise SaaS), UniClip (freemium SaaS)" },
];
