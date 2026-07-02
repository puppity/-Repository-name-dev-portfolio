"use client";

import PropertyMatcher from "@/components/PropertyMatcher";
import Reveal from "@/components/Reveal";
import Turtle from "@/components/Turtle";
import { useLang } from "@/components/LangContext";
import { UI, PROJECTS, APPROACH, STACK_MATCH, type Project, type Lang } from "@/lib/i18n";

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

function ProjectCard({ p, lang, t }: { p: Project; lang: Lang; t: Record<string, string> }) {
  const body = (
    <div>
      {p.featured && <span className="flag">{t.flag}</span>}
      <h3>{p.name[lang]}</h3>
      <p className="project-tag">{p.tagline[lang]}</p>
      <p className="project-problem">{p.problem[lang]}</p>
      <ul className="project-highlights">
        {p.highlights[lang].map((h) => (
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
          {t.liveLink}
        </a>
      ) : (
        <span className="project-link muted">{t.moreInfo}</span>
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
        <figure className="n8n-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/n8n-workflow.png"
            alt="Turtle.Talking n8n workflow — LINE → n8n → LLM → Postgres, 36+ nodes"
            loading="lazy"
            onError={(e) => {
              const fig = e.currentTarget.closest("figure");
              if (fig) fig.style.display = "none";
            }}
          />
          <figcaption>{t.n8nCaption}</figcaption>
        </figure>
      </article>
    );
  }
  return <article className="project">{body}</article>;
}

export default function Home() {
  const { lang, setLang } = useLang();
  const t = UI[lang];

  return (
    <main id="top">
      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-name">
            Nattapoom P.
          </a>
          <div className="nav-right">
            <nav className="nav-links">
              <a href="#work">{t.navWork}</a>
              <a href="#demo">{t.navDemo}</a>
              <a href="#contact">{t.navContact}</a>
            </nav>
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                className={lang === "th" ? "active" : ""}
                onClick={() => setLang("th")}
                aria-pressed={lang === "th"}
              >
                TH
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <Reveal>
            <p className="kicker">{t.kicker}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1>Nattapoom Prikmak</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="role">{t.role}</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="lead">{t.lead}</p>
          </Reveal>
          <Reveal delay={280}>
            <p className="stackline">{STACK.join("   ·   ")}</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="cta-row">
              <a className="btn primary" href="#work">
                {t.ctaWork}
              </a>
              <a className="btn ghost" href="#demo">
                {t.ctaDemo}
              </a>
              <a className="btn ghost" href="#contact">
                {t.ctaContact}
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
              <h2>{t.workTitle}</h2>
              <span className="num">{t.workNum}</span>
            </div>
          </Reveal>
          <div className="work">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name.en} delay={i * 60}>
                <ProjectCard p={p} lang={lang} t={t} />
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
                <h2>
                  {t.demoTitle} <span className="tag-fun">{t.demoBadge}</span>
                </h2>
                <p className="section-sub">{t.demoSub}</p>
              </div>
              <span className="num">{t.demoNum}</span>
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
              <h2>{t.approachTitle}</h2>
              <span className="num">{t.approachNum}</span>
            </div>
          </Reveal>
          <div className="steps">
            {APPROACH.map((s, i) => (
              <Reveal key={s.title.en} delay={i * 80}>
                <div className="step">
                  <span className="step-n">0{i + 1}</span>
                  <h4>{s.title[lang]}</h4>
                  <p>{s.body[lang]}</p>
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
              <h2>{t.fitTitle}</h2>
              <span className="num">{t.fitNum}</span>
            </div>
          </Reveal>
          <div className="fit">
            {STACK_MATCH.map((row, i) => (
              <Reveal key={row.need.en} delay={(i % 2) * 60}>
                <div className="fit-row">
                  <span className="check">✓</span>
                  <div>
                    <div className="fit-need">{row.need[lang]}</div>
                    <div className="fit-have">{row.have[lang]}</div>
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
            <h2 className="foot-name">{t.footTitle}</h2>
            <div className="contact-info">
              <div>
                <span className="ci-label">{t.ciName}</span>
                <span className="ci-val">{CONTACT.name}</span>
              </div>
              <div>
                <span className="ci-label">{t.ciAge}</span>
                <span className="ci-val">{CONTACT.age}</span>
              </div>
              <div>
                <span className="ci-label">{t.ciTel}</span>
                <a className="ci-val" href={`tel:${CONTACT.tel}`}>
                  {CONTACT.tel}
                </a>
              </div>
            </div>
            <div className="cta-row">
              <a className="btn primary" href={`tel:${CONTACT.tel}`}>
                {t.callBtn}
              </a>
            </div>
            <p className="fine">{t.fine}</p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
