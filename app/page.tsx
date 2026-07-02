import PropertyMatcher from "@/components/PropertyMatcher";
import { PROJECTS, STACK_MATCH } from "@/lib/projects";

const STACK_BADGES = [
  "Next.js 14",
  "TypeScript",
  "n8n",
  "LINE API",
  "LLM (Claude/OpenAI/DeepSeek)",
  "PostgreSQL",
  "Firebase / Supabase",
  "Google API",
  "Vector / Semantic Search",
];

// ⬇️ แก้ 2 บรรทัดนี้เป็นข้อมูลจริงของคุณก่อน deploy
const YOUR_NAME = "Nattapoom Prikmak";
const YOUR_EMAIL = "folkkizx@gmail.com";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">● FULL-STACK · REMOTE หรือ กรุงเทพฯ · เต็มเวลา</span>
          <h1>
            Full-Stack Developer
            <br />
            <span className="accent">Next.js · n8n · AI</span>
          </h1>
          <p className="lead">
            สร้างแพลตฟอร์มที่ขับเคลื่อนด้วย AI ตั้งแต่ต้นจนถึง production — เชื่อม n8n,
            แพลตฟอร์มข้อความ, LLM และฐานข้อมูล. มีผลงาน<strong>รันจริง</strong>ที่ verify กับผู้ใช้แล้ว.
          </p>
          <div className="badges">
            {STACK_BADGES.map((b) => (
              <span key={b} className="badge">
                {b}
              </span>
            ))}
          </div>
          <div className="cta-row">
            <a className="btn primary" href="#matcher">
              ▶ ลองเดโม AI จับคู่อสังหา
            </a>
            <a className="btn ghost" href="#projects">
              ดูผลงาน
            </a>
          </div>
        </div>
      </section>

      {/* STACK MATCH */}
      <section className="section">
        <div className="wrap">
          <h2>ตรงสเปกงานนี้อย่างไร</h2>
          <p className="section-sub">เทียบคุณสมบัติที่ประกาศต้องการ กับผลงานจริงที่ผมทำมาแล้ว</p>
          <div className="match-table">
            {STACK_MATCH.map((row) => (
              <div key={row.need} className="match-row">
                <div className="match-need">
                  <span className="check">✓</span>
                  {row.need}
                </div>
                <div className="match-have">{row.have}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHER DEMO */}
      <section className="section alt" id="matcher">
        <div className="wrap">
          <span className="eyebrow">LIVE DEMO</span>
          <h2>ระบบจับคู่อสังหาด้วย AI</h2>
          <p className="section-sub">
            พิมพ์ความต้องการเป็นภาษาคน → ระบบพาร์สเป็นเงื่อนไข แล้วจัดอันดับทรัพย์ที่เหมาะที่สุดพร้อมเหตุผล
            (กดเล่นได้เลย ไม่ต้องล็อกอิน)
          </p>
          <PropertyMatcher />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="wrap">
          <h2>ผลงาน</h2>
          <p className="section-sub">โปรเจกต์ที่ออกแบบและพัฒนาเอง — เน้นของที่ deploy ใช้งานจริง</p>
          <div className="projects">
            {PROJECTS.map((p) => (
              <div key={p.name} className={`project ${p.featured ? "featured" : ""}`}>
                {p.featured && <span className="flag">⭐ ชิ้นเอก · รัน production</span>}
                <h3>{p.name}</h3>
                <p className="project-tag">{p.tagline}</p>
                <p className="project-problem">
                  <strong>โจทย์:</strong> {p.problem}
                </p>
                <div className="project-role">
                  <strong>บทบาทผม:</strong>
                  <ul>
                    {p.role.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-highlights">
                  {p.highlights.map((h) => (
                    <span key={h} className="hl">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="project-stack">
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
                  <span className="project-link muted">demo/รายละเอียดให้ตอนสัมภาษณ์</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section alt">
        <div className="wrap">
          <h2>ถ้าให้สร้างระบบจับคู่/อัตโนมัติด้วย AI ผมจะทำแบบนี้</h2>
          <div className="approach">
            <div className="step">
              <span className="step-n">1</span>
              <h4>Matching layer</h4>
              <p>
                Extract ข้อมูลทรัพย์ (ทำเล/ราคา/ห้อง/ไลฟ์สไตล์) ด้วย LLM → สร้าง embedding เก็บใน
                Postgres (pgvector). ความต้องการผู้ซื้อก็แปลงเป็น embedding เหมือนกัน แล้วจับคู่แบบ hybrid =
                semantic similarity + ฟิลเตอร์เชิงกฎ (งบ/โซน) และให้ LLM re-rank พร้อมสรุปเหตุผล.
              </p>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <h4>Automation layer (n8n)</h4>
              <p>
                ข้อความเข้าจาก LINE/Messenger/WhatsApp → webhook → ตรวจ intent ด้วย LLM →
                ตอบอัตโนมัติ / ส่งแมตช์ทรัพย์ / นัดดูบ้าน → sync ลง CRM + Google Calendar และ push
                แจ้งเตือน follow-up.
              </p>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <h4>ทำมาแล้วจริง</h4>
              <p>
                สถาปัตยกรรม LINE → n8n → LLM → Postgres นี้ ผมทำจริงใน Turtle.Talking (deploy บน Coolify)
                และทำ semantic search ด้วย embeddings ใน UniClip มาแล้ว — ต่อยอดเป็นระบบอสังหาได้ทันที.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer">
        <div className="wrap">
          <h2>พร้อมเริ่มงาน</h2>
          <p className="section-sub">ยืนยัน: เคยใช้ n8n จริง (Turtle.Talking สร้างบน n8n ทั้งระบบ รัน production อยู่)</p>
          <div className="contact">
            <span className="who">{YOUR_NAME}</span>
            <a className="btn primary" href={`mailto:${YOUR_EMAIL}`}>
              {YOUR_EMAIL}
            </a>
          </div>
          <p className="fine">Built with Next.js · deployed on Vercel · ทุกเดโมในหน้านี้กดเล่นได้จริง</p>
        </div>
      </footer>
    </main>
  );
}
