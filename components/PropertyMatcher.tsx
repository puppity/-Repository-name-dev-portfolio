"use client";

import { useMemo, useState } from "react";
import { matchListings } from "@/lib/matcher";

const EXAMPLES = [
  "1-bedroom condo near BTS, under 20000, pet friendly",
  "Detached house with a garden, 3 bedrooms, family friendly, Bangna",
  "Low budget around 10k, near transit, good to start out",
  "Luxury condo in Thonglor, 2 bedrooms, great view, pet friendly",
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
          placeholder="Describe what you want in plain English, e.g. condo near BTS, budget 20k, pet friendly"
        />
        <button onClick={run}>Match →</button>
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
            {ex.length > 44 ? ex.slice(0, 44) + "…" : ex}
          </button>
        ))}
      </div>

      <div className="parsed">
        <span className="parsed-label">AI understood:</span>
        {parsed.budget != null && <span className="pill">≤ THB {parsed.budget.toLocaleString()}</span>}
        {parsed.bedrooms != null && <span className="pill">{parsed.bedrooms} bedrooms</span>}
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
        {parsed.budget == null &&
          parsed.bedrooms == null &&
          parsed.zoneHits.length === 0 &&
          parsed.keywords.length === 0 && (
            <span className="pill muted">No filters yet — showing popular</span>
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
                {r.listing.type} · {r.listing.bedrooms} bd · {r.listing.area} sqm · THB{" "}
                {r.listing.price.toLocaleString()}/mo · {r.listing.zone}
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
        This demo runs client-side over 8 mock listings — it parses natural language into filters, then
        scores each listing with a hybrid of rule filters (budget / beds / location) and lifestyle tag
        similarity. In production this swaps keyword overlap for <strong>vector embeddings (pgvector)</strong>{" "}
        with an <strong>LLM re-rank</strong>, taking input from LINE / Messenger / WhatsApp through{" "}
        <strong>n8n</strong>.
      </p>
    </div>
  );
}
