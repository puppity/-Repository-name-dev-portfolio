import PropertyMatcher from "@/components/PropertyMatcher";
import Reveal from "@/components/Reveal";
import Turtle from "@/components/Turtle";
import { PROJECTS, STACK_MATCH, type Project } from "@/lib/projects";

// ⬇️ ข้อมูลจริง
const YOUR_NAME = "Nattapoom Prikmak";
const YOUR_EMAIL = "folkkizx@gmail.com";

const STACK = [
  "Next.js",
  "TypeScript",
  "n8n",
  "LINE API",
  "LLM",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Vector search",
];

const APPROACH = [
  {
    title: "Matching layer",
    body: "Extract ข้อมูลทรัพย์ด้วย LLM → สร้าง embedding เก็บใน Postgres (pgvector). ความต้องการผู้ซื้อแปลงเป็น embedding แล้วจับคู่แบบ hybrid: semantic similarity + ฟิลเตอร์เชิงกฎ และให้ LLM re-rank พร้อมสรุปเหตุผล.",
  },
  {
    title: "Automation layer (n8n)",
    body: "ข้อความจาก LINE/Messenger/WhatsApp → webhook → ตรวจ intent ด้วย LLM → ตอบอัตโนมัติ / ส่งแมตช์ทรัพย์ / นัดดูบ้าน → sync CRM + Google Calendar และ push แจ้งเตือน follow-up.",
  },
  {
    title: "ทำมาแล้วจริง",
    body: "สถาปัตยกรรม LINE → n8n → LLM → Postgres นี้ ผมทำจริงใน Turtle.Talking (deploy บน Coolify) และทำ semantic search ด้วย embeddings ใน UniClip มาแล้ว — ต่อยอดเป็นระบบอสังหาได้ทันที.",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const body = (
    <div>
      {p.featured && <span className="flag">รัน Production</span>}
      <h3>{p.name}</h3>
      <p className="project-tag">{p.tagline}</p>
      <p className="project-problem">{p.problem}</p>
      <ul className="project-highlights">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="tags">
        {p.stack.map((s) => (
          <span key={s} className="tech">
            {s}
          </span>
        ))}
      </div>
      {p.live ? (
        <a className="project-link" href={p.live} target="_blank" rel="noreferrer">
          เปิดดูของจริง →
        </a>
      ) : (
        <span className="project-link muted">รายละเอียดเพิ่มเติมตอนสัมภาษณ์</span>
      )}
    </div>
  );

  if (p.featured) {
    return (
      <article className="project featured">
        <div className="featured-grid">
          {body}
          <div className="turtle-panel">
            <Turtle />
          </div>
        </div>
      </article>
    );
  }
  return <article className="project">{body}</article>;
}

export default function Home() {
  return (
    <main id="top">
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-name">
            Nattapoom P.
          </a>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#demo">Demo</a>
            <a href={`mailto:${YOUR_EMAIL}`}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Portfolio — Full-Stack Developer</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>{YOUR_NAME}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="role">Full-Stack Developer · Next.js · n8n · AI</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="lead">
              สร้างแพลตฟอร์มที่ขับเคลื่อนด้วย AI ตั้งแต่ต้นจนถึง production — เชื่อม n8n,
              แพลตฟอร์มข้อความ, LLM และฐานข้อมูล มีผลงาน<strong>รันจริง</strong>ที่ verify กับผู้ใช้แล้ว.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="stackline">{STACK.join("   ·   ")}</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="cta-row">
              <a className="btn primary" href="#work">
                ดูผลงาน
              </a>
              <a className="btn ghost" href="#demo">
                ลองเดโม AI
              </a>
              <a className="btn ghost" href={`mailto:${YOUR_EMAIL}`}>
                ติดต่อ
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <h2>Selected Work</h2>
              <span className="num">04 — PROJECTS</span>
            </div>
          </Reveal>
          <div className="work">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="section" id="demo">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <h2>ระบบจับคู่อสังหาด้วย AI</h2>
                <p className="section-sub">
                  พิมพ์ความต้องการเป็นภาษาคน → ระบบจัดอันดับทรัพย์ที่เหมาะที่สุดพร้อมเหตุผล
                  (กดเล่นได้เลย ไม่ต้องล็อกอิน)
                </p>
              </div>
              <span className="num">LIVE DEMO</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PropertyMatcher />
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <h2>วิธีที่ผมจะสร้างระบบ</h2>
              <span className="num">APPROACH</span>
            </div>
          </Reveal>
          <div className="steps">
            {APPROACH.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="step">
                  <span className="step-n">0{i + 1}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <h2>ตรงสเปกงานนี้</h2>
              <span className="num">REQUIREMENTS ✓</span>
            </div>
          </Reveal>
          <div className="fit">
            {STACK_MATCH.map((row, i) => (
              <Reveal key={row.need} delay={(i % 2) * 60}>
                <div className="fit-row">
                  <span className="check">✓</span>
                  <div>
                    <div className="fit-need">{row.need}</div>
                    <div className="fit-have">{row.have}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <Reveal>
            <h2 className="foot-name">พร้อมมาช่วยสร้างแพลตฟอร์ม AI ให้ทีมครับ</h2>
            <div className="contact">
              <span className="who">{YOUR_NAME}</span>
              <a className="btn primary" href={`mailto:${YOUR_EMAIL}`}>
                {YOUR_EMAIL}
              </a>
            </div>
            <p className="fine">
              ยืนยัน: เคยใช้ n8n จริง — Turtle.Talking สร้างบน n8n ทั้งระบบ รัน production ·
              Built with Next.js
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
