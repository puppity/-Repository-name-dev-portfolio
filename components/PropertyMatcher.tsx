"use client";

import { useMemo, useState } from "react";
import { matchListings, tagLabel } from "@/lib/matcher";
import { useLang } from "@/components/LangContext";

const EXAMPLES = {
  en: [
    "1-bedroom condo near BTS, under 20000, pet friendly",
    "Detached house with a garden, 3 bedrooms, family friendly, Bangna",
    "Low budget around 10k, near transit, good to start out",
    "Luxury condo in Thonglor, 2 bedrooms, great view, pet friendly",
  ],
  th: [
    "คอนโด 1 ห้องนอน ใกล้ BTS งบไม่เกิน 20000 เลี้ยงแมวได้",
    "บ้านเดี่ยวมีสวน 3 ห้องนอน เหมาะครอบครัว ย่านบางนา",
    "งบน้อยประมาณ 1 หมื่น ใกล้รถไฟฟ้า เหมาะเริ่มทำงาน",
    "คอนโดหรู ทองหล่อ 2 ห้องนอน วิวสวย เลี้ยงสัตว์ได้",
  ],
};

const L = {
  en: {
    placeholder: "Describe what you want in plain English, e.g. condo near BTS, budget 20k, pet friendly",
    match: "Match →",
    understood: "AI understood:",
    none: "No filters yet — showing popular",
    beds: "bedrooms",
    bd: "bd",
    sqm: "sqm",
    perMo: "/mo",
    matchWord: "% match",
    note: (
      <>
        This demo runs client-side over 8 mock listings — it parses natural language into filters, then
        scores each listing with a hybrid of rule filters (budget / beds / location) and lifestyle tag
        similarity. In production this swaps keyword overlap for <strong>vector embeddings (pgvector)</strong>{" "}
        with an <strong>LLM re-rank</strong>, taking input from LINE / Messenger / WhatsApp through{" "}
        <strong>n8n</strong>.
      </>
    ),
  },
  th: {
    placeholder: "พิมพ์ความต้องการเป็นภาษาคน เช่น คอนโดใกล้ BTS งบ 2 หมื่น เลี้ยงแมวได้",
    match: "จับคู่ทรัพย์ →",
    understood: "AI เข้าใจว่า:",
    none: "ยังไม่ระบุเงื่อนไข — แนะนำตามความนิยม",
    beds: "ห้องนอน",
    bd: "นอน",
    sqm: "ตร.ม.",
    perMo: "/เดือน",
    matchWord: "% ตรง",
    note: (
      <>
        เดโมนี้ทำงานฝั่ง client บนทรัพย์จำลอง 8 หลัง — พาร์สภาษาธรรมชาติเป็นเงื่อนไข แล้วให้คะแนนแบบ hybrid
        (ฟิลเตอร์เชิงกฎ งบ / ห้อง / ทำเล + ความใกล้เชิงไลฟ์สไตล์). เวอร์ชัน production จริงจะเปลี่ยนเป็น{" "}
        <strong>vector embeddings (pgvector)</strong> + <strong>LLM re-rank</strong> และรับ input จาก LINE /
        Messenger / WhatsApp ผ่าน <strong>n8n</strong>.
      </>
    ),
  },
};

export default function PropertyMatcher() {
  const { lang } = useLang();
  const t = L[lang];
  const examples = EXAMPLES[lang];

  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const effective = submitted || examples[0];
  const { parsed, results } = useMemo(() => matchListings(effective, lang), [effective, lang]);
  const top = results.slice(0, 3);

  const run = () => setSubmitted(query.trim() || examples[0]);

  return (
    <div className="matcher">
      <div className="matcher-input">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) run();
          }}
          rows={2}
          placeholder={t.placeholder}
        />
        <button onClick={run}>{t.match}</button>
      </div>

      <div className="chips">
        {examples.map((ex) => (
          <button
            key={ex}
            className="chip"
            onClick={() => {
              setQuery(ex);
              setSubmitted(ex);
            }}
          >
            {ex.length > 44 ? ex.slice(0, 44) + "…" : ex}
          </button>
        ))}
      </div>

      <div className="parsed">
        <span className="parsed-label">{t.understood}</span>
        {parsed.budget != null && (
          <span className="pill">≤ {lang === "th" ? "฿" : "THB "}{parsed.budget.toLocaleString()}</span>
        )}
        {parsed.bedrooms != null && (
          <span className="pill">
            {parsed.bedrooms} {t.beds}
          </span>
        )}
        {parsed.zoneHits.map((z) => (
          <span key={z} className="pill">
            📍 {z}
          </span>
        ))}
        {parsed.keywords.map((k) => (
          <span key={k} className="pill">
            {tagLabel(k, lang)}
          </span>
        ))}
        {parsed.budget == null &&
          parsed.bedrooms == null &&
          parsed.zoneHits.length === 0 &&
          parsed.keywords.length === 0 && <span className="pill muted">{t.none}</span>}
      </div>

      <div className="results">
        {top.map((r, i) => (
          <div key={r.id} className="result-card">
            <div className="result-rank">#{i + 1}</div>
            <div className="result-body">
              <div className="result-head">
                <span className="result-title">{r.title}</span>
                <span className={`score score-${r.score >= 80 ? "hi" : r.score >= 55 ? "mid" : "lo"}`}>
                  {r.score}
                  {t.matchWord}
                </span>
              </div>
              <div className="result-meta">
                {r.type} · {r.bedrooms} {t.bd} · {r.area} {t.sqm} · {lang === "th" ? "฿" : "THB "}
                {r.price.toLocaleString()}
                {t.perMo} · {r.zone}
              </div>
              <div className="reasons">
                {r.reasons.map((reason, idx) => (
                  <span key={idx} className="reason ok">
                    ✓ {reason}
                  </span>
                ))}
                {r.misses.map((m, idx) => (
                  <span key={idx} className="reason no">
                    ✕ {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="matcher-note">{t.note}</p>
    </div>
  );
}
