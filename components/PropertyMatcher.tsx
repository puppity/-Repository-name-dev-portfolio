"use client";

import { useMemo, useState } from "react";
import { matchListings } from "@/lib/matcher";

const EXAMPLES = [
  "หาคอนโด 1 ห้องนอน ใกล้ BTS งบไม่เกิน 20000 เลี้ยงแมวได้",
  "อยากได้บ้านเดี่ยวมีสวน 3 ห้องนอน เหมาะครอบครัว ย่านบางนา",
  "งบน้อยประมาณ 1 หมื่น ใกล้รถไฟฟ้า เหมาะเริ่มทำงาน",
  "คอนโดหรู ทองหล่อ 2 ห้องนอน วิวสวย เลี้ยงสัตว์ได้",
];

export default function PropertyMatcher() {
  const [query, setQuery] = useState(EXAMPLES[0]);
  const [submitted, setSubmitted] = useState(EXAMPLES[0]);

  const { parsed, results } = useMemo(() => matchListings(submitted), [submitted]);
  const top = results.slice(0, 3);

  const run = () => setSubmitted(query.trim() || EXAMPLES[0]);

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
          placeholder="พิมพ์ความต้องการเป็นภาษาธรรมชาติ เช่น: หาคอนโดใกล้ BTS งบ 2 หมื่น เลี้ยงแมวได้"
        />
        <button onClick={run}>จับคู่ทรัพย์ →</button>
      </div>

      <div className="chips">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            className="chip"
            onClick={() => {
              setQuery(ex);
              setSubmitted(ex);
            }}
          >
            {ex.length > 42 ? ex.slice(0, 42) + "…" : ex}
          </button>
        ))}
      </div>

      <div className="parsed">
        <span className="parsed-label">AI เข้าใจว่า:</span>
        {parsed.budget != null && <span className="pill">งบ ≤ {parsed.budget.toLocaleString()}฿</span>}
        {parsed.bedrooms != null && <span className="pill">{parsed.bedrooms} ห้องนอน</span>}
        {parsed.zoneHits.map((z) => (
          <span key={z} className="pill">
            📍 {z}
          </span>
        ))}
        {parsed.keywords.map((k) => (
          <span key={k} className="pill">
            {k}
          </span>
        ))}
        {parsed.budget == null && parsed.bedrooms == null && parsed.zoneHits.length === 0 && parsed.keywords.length === 0 && (
          <span className="pill muted">ยังไม่ระบุเงื่อนไข — แนะนำตามความนิยม</span>
        )}
      </div>

      <div className="results">
        {top.map((r, i) => (
          <div key={r.listing.id} className="result-card">
            <div className="result-rank">#{i + 1}</div>
            <div className="result-body">
              <div className="result-head">
                <span className="result-title">{r.listing.title}</span>
                <span className={`score score-${r.score >= 80 ? "hi" : r.score >= 55 ? "mid" : "lo"}`}>
                  {r.score}% match
                </span>
              </div>
              <div className="result-meta">
                {r.listing.type} · {r.listing.bedrooms} นอน · {r.listing.area} ตร.ม. ·{" "}
                {r.listing.price.toLocaleString()} ฿/เดือน · {r.listing.zone}
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

      <p className="matcher-note">
        เดโมนี้รัน client-side บนทรัพย์จำลอง 8 รายการ — พาร์สภาษาธรรมชาติเป็นเงื่อนไข แล้วให้คะแนนแบบ hybrid
        (ฟิลเตอร์เชิงกฎ งบ/ห้อง/ทำเล + ความใกล้เชิงความหมายของไลฟ์สไตล์). ใน production เวอร์ชันจริง จะเปลี่ยน
        keyword-overlap เป็น <strong>vector embeddings (pgvector)</strong> + ให้ <strong>LLM re-rank</strong> พร้อมสรุปเหตุผล
        และรับ input จาก LINE/Messenger/WhatsApp ผ่าน <strong>n8n</strong>.
      </p>
    </div>
  );
}
