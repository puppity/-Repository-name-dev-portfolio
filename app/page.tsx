import PropertyMatcher from "@/components/PropertyMatcher";
import Reveal from "@/components/Reveal";
import Turtle from "@/components/Turtle";
import { PROJECTS, STACK_MATCH, type Project } from "@/lib/projects";

// ⬇️ real info
const YOUR_NAME = "Nattapoom Prikmak";
const CONTACT = { name: "Nattapoom P.", age: "29", tel: "08394563998" };

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
    body: "Extract listing data with an LLM → build embeddings stored in Postgres (pgvector). A buyer's needs become an embedding too, then matching is hybrid: semantic similarity + rule filters, with an LLM re-ranking results and explaining why.",
  },
  {
    title: "Automation layer (n8n)",
    body: "Messages from LINE/Messenger/WhatsApp → webhook → intent detection with an LLM → auto-reply / send matches / book a viewing → sync to CRM + Google Calendar and push follow-up reminders.",
  },
  {
    title: "Already done for real",
    body: "I've shipped this exact LINE → n8n → LLM → Postgres architecture in Turtle.Talking (deployed on Coolify), and built semantic search with embeddings in UniClip — so extending it to real estate is immediate.",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const body = (
    <div>
      {p.featured && <span className="flag">Live in Production</span>}
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
          View it live →
        </a>
      ) : (
        <span className="project-link muted">More details on request</span>
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
            <a href="#contact">Contact</a>
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
              I build AI-powered platforms end to end — connecting n8n, messaging platforms, LLMs and
              databases. With work that&apos;s <strong>live in production</strong> and verified with real users.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="stackline">{STACK.join("   ·   ")}</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="cta-row">
              <a className="btn primary" href="#work">
                View Work
              </a>
              <a className="btn ghost" href="#demo">
                Try the AI Demo
              </a>
              <a className="btn ghost" href="#contact">
                Contact
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
              <span className="num">05 — PROJECTS</span>
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
                <h2>AI Property Matcher</h2>
                <p className="section-sub">
                  Type what you want in plain language → it ranks the best-fit listings with reasons.
                  Fully interactive, no login.
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
              <h2>How I&apos;d build it</h2>
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
              <h2>Why I fit this role</h2>
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
      <footer className="footer" id="contact">
        <div className="wrap">
          <Reveal>
            <h2 className="foot-name">Ready to help build your AI platform.</h2>
            <div className="contact-info">
              <div>
                <span className="ci-label">Name</span>
                <span className="ci-val">{CONTACT.name}</span>
              </div>
              <div>
                <span className="ci-label">Age</span>
                <span className="ci-val">{CONTACT.age}</span>
              </div>
              <div>
                <span className="ci-label">Tel</span>
                <a className="ci-val" href={`tel:${CONTACT.tel}`}>
                  {CONTACT.tel}
                </a>
              </div>
            </div>
            <div className="cta-row">
              <a className="btn primary" href={`tel:${CONTACT.tel}`}>
                Call me
              </a>
            </div>
            <p className="fine">
              Confirmed: real n8n experience — Turtle.Talking is built entirely on n8n and runs in
              production · Built with Next.js
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
