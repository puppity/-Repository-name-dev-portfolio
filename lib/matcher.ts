import type { Lang, Loc } from "./i18n";

type Listing = {
  id: number;
  title: Loc;
  type: Loc;
  zone: Loc;
  zoneTokens: string[]; // lowercased place-name tokens (EN + TH) for matching
  price: number; // THB / month
  bedrooms: number;
  area: number; // sqm
  tags: string[]; // canonical keys — subset of the filterable keys below
  nearBTS: boolean;
};

const LISTINGS: Listing[] = [
  {
    id: 1,
    title: { en: "Ideo Sukhumvit Condo — steps from BTS On Nut", th: "คอนโด Ideo สุขุมวิท ติด BTS อ่อนนุช" },
    type: { en: "Condo", th: "คอนโด" },
    zone: { en: "Sukhumvit / On Nut", th: "สุขุมวิท / อ่อนนุช" },
    zoneTokens: ["sukhumvit", "on nut", "onnut", "สุขุมวิท", "อ่อนนุช"],
    price: 18000, bedrooms: 1, area: 32, tags: ["transit"], nearBTS: true,
  },
  {
    id: 2,
    title: { en: "Detached house with garden, Bangna", th: "บ้านเดี่ยวมีสวน ย่านบางนา" },
    type: { en: "House", th: "บ้านเดี่ยว" },
    zone: { en: "Bangna", th: "บางนา" },
    zoneTokens: ["bangna", "บางนา"],
    price: 35000, bedrooms: 3, area: 180, tags: ["garden", "family", "pet"], nearBTS: false,
  },
  {
    id: 3,
    title: { en: "2-bedroom townhome, Ratchada — near MRT", th: "ทาวน์โฮม 2 ห้องนอน รัชดา ใกล้ MRT" },
    type: { en: "Townhome", th: "ทาวน์โฮม" },
    zone: { en: "Ratchada", th: "รัชดาภิเษก" },
    zoneTokens: ["ratchada", "รัชดา", "huai khwang", "ห้วยขวาง"],
    price: 22000, bedrooms: 2, area: 110, tags: ["transit", "pet", "family"], nearBTS: true,
  },
  {
    id: 4,
    title: { en: "Budget studio condo, Ladprao", th: "คอนโดสตูดิโอราคาประหยัด ลาดพร้าว" },
    type: { en: "Condo", th: "คอนโด" },
    zone: { en: "Ladprao", th: "ลาดพร้าว" },
    zoneTokens: ["ladprao", "ลาดพร้าว"],
    price: 9500, bedrooms: 1, area: 24, tags: ["cheap", "transit"], nearBTS: false,
  },
  {
    id: 5,
    title: { en: "Luxury 2-bedroom condo, Thonglor — city view", th: "คอนโดหรู 2 ห้องนอน ทองหล่อ วิวเมือง" },
    type: { en: "Condo", th: "คอนโด" },
    zone: { en: "Thonglor", th: "ทองหล่อ" },
    zoneTokens: ["thonglor", "ทองหล่อ", "sukhumvit", "สุขุมวิท"],
    price: 55000, bedrooms: 2, area: 75, tags: ["luxury", "transit", "pet"], nearBTS: true,
  },
  {
    id: 6,
    title: { en: "4-bedroom detached house, Nonthaburi / Ratchaphruek", th: "บ้านเดี่ยว 4 ห้องนอน นนทบุรี ราชพฤกษ์" },
    type: { en: "House", th: "บ้านเดี่ยว" },
    zone: { en: "Nonthaburi / Ratchaphruek", th: "นนทบุรี / ราชพฤกษ์" },
    zoneTokens: ["nonthaburi", "นนทบุรี", "ratchaphruek", "ราชพฤกษ์"],
    price: 45000, bedrooms: 4, area: 240, tags: ["garden", "family", "pet"], nearBTS: false,
  },
  {
    id: 7,
    title: { en: "1-bedroom condo, Ari — by BTS, cafes everywhere", th: "คอนโด 1 ห้องนอน อารีย์ ติด BTS คาเฟ่เยอะ" },
    type: { en: "Condo", th: "คอนโด" },
    zone: { en: "Ari", th: "อารีย์" },
    zoneTokens: ["ari", "อารีย์", "phahon", "พหลโยธิน"],
    price: 25000, bedrooms: 1, area: 40, tags: ["transit", "pet"], nearBTS: true,
  },
  {
    id: 8,
    title: { en: "3-bedroom townhome, Prachauthit — great value", th: "ทาวน์โฮม 3 ห้องนอน ประชาอุทิศ ราคาน่ารัก" },
    type: { en: "Townhome", th: "ทาวน์โฮม" },
    zone: { en: "Prachauthit / Rama 2", th: "ประชาอุทิศ / พระราม 2" },
    zoneTokens: ["prachauthit", "ประชาอุทิศ", "rama 2", "พระราม 2"],
    price: 15000, bedrooms: 3, area: 130, tags: ["cheap", "family", "pet"], nearBTS: false,
  },
];

const ZONE_TOKENS = Array.from(new Set(LISTINGS.flatMap((l) => l.zoneTokens)));

const TAG_LABEL: Record<string, Loc> = {
  transit: { en: "Near transit", th: "ใกล้รถไฟฟ้า" },
  pet: { en: "Pet-friendly", th: "เลี้ยงสัตว์ได้" },
  garden: { en: "Has garden", th: "มีสวน" },
  family: { en: "Family-friendly", th: "เหมาะครอบครัว" },
  cheap: { en: "Budget-friendly", th: "ราคาประหยัด" },
  luxury: { en: "Luxury", th: "หรูหรา" },
};

export function tagLabel(key: string, lang: Lang): string {
  return TAG_LABEL[key]?.[lang] ?? key;
}

export type ParsedQuery = {
  budget: number | null;
  bedrooms: number | null;
  zoneHits: string[];
  keywords: string[]; // canonical keys
};

export type MatchResult = {
  id: number;
  title: string;
  type: string;
  zone: string;
  price: number;
  bedrooms: number;
  area: number;
  score: number;
  reasons: string[];
  misses: string[];
};

export function parseQuery(raw: string): ParsedQuery {
  const q = raw.toLowerCase();

  // budget: "20k", "1 หมื่น", "20000"
  let budget: number | null = null;
  const kMatch = q.match(/(\d+(?:\.\d+)?)\s*k/);
  const wanMatch = q.match(/(\d+(?:\.\d+)?)\s*หมื่น/);
  const numMatch = q.match(/(\d[\d,]{3,})/);
  if (kMatch) budget = Math.round(parseFloat(kMatch[1]) * 1000);
  else if (wanMatch) budget = Math.round(parseFloat(wanMatch[1]) * 10000);
  else if (numMatch) budget = parseInt(numMatch[1].replace(/,/g, ""), 10);

  // bedrooms
  let bedrooms: number | null = null;
  const bedMatch = q.match(/(\d+)\s*-?\s*(bedroom|bed|br|room|ห้องนอน|ห้อง|นอน)/);
  if (bedMatch) bedrooms = parseInt(bedMatch[1], 10);

  const has = (...arr: string[]) => arr.some((k) => q.includes(k));
  const zoneHits = ZONE_TOKENS.filter((z) => q.includes(z));

  const wantBTS = has("bts", "mrt", "transit", "train", "station", "skytrain", "subway", "รถไฟฟ้า", "ใกล้รถไฟ", "ติดรถไฟ");
  const wantPet = has("pet", "dog", "cat", "animal", "สัตว์", "เลี้ยง", "แมว");
  const wantGarden = has("garden", "yard", "outdoor", "สวน");
  const wantFamily = has("family", "kids", "children", "school", "ครอบครัว", "ลูก", "โรงเรียน");
  const wantCheap = has("cheap", "affordable", "student", "low budget", "low-cost", "inexpensive", "ประหยัด", "ถูก", "งบน้อย", "นักศึกษา");
  const wantLuxury = has("luxury", "premium", "high-end", "upscale", "great view", "view", "หรู", "วิว");

  const keywords = [
    wantBTS && "transit",
    wantPet && "pet",
    wantGarden && "garden",
    wantFamily && "family",
    wantCheap && "cheap",
    wantLuxury && "luxury",
  ].filter(Boolean) as string[];

  return { budget, bedrooms, zoneHits, keywords };
}

export function matchListings(raw: string, lang: Lang): { parsed: ParsedQuery; results: MatchResult[] } {
  const parsed = parseQuery(raw);
  const fmt = (n: number) => n.toLocaleString();
  const cur = (n: number) => (lang === "th" ? `฿${fmt(n)}` : `THB ${fmt(n)}`);

  const results: MatchResult[] = LISTINGS.map((l) => {
    let score = 0;
    const reasons: string[] = [];
    const misses: string[] = [];
    let weightSum = 0;

    // budget (35)
    if (parsed.budget != null) {
      weightSum += 35;
      if (l.price <= parsed.budget) {
        score += 35;
        reasons.push(lang === "th" ? `อยู่ในงบ ${cur(parsed.budget)} (${cur(l.price)})` : `Within budget ${cur(parsed.budget)} (${cur(l.price)})`);
      } else if (l.price <= parsed.budget * 1.15) {
        score += 20;
        reasons.push(lang === "th" ? `เกินงบเล็กน้อย (${cur(l.price)})` : `Slightly over budget (${cur(l.price)})`);
      } else {
        misses.push(lang === "th" ? `เกินงบ (${cur(l.price)})` : `Over budget (${cur(l.price)})`);
      }
    }

    // bedrooms (20)
    if (parsed.bedrooms != null) {
      weightSum += 20;
      if (l.bedrooms === parsed.bedrooms) {
        score += 20;
        reasons.push(lang === "th" ? `${l.bedrooms} ห้องนอนตรงตามต้องการ` : `${l.bedrooms} bedrooms as requested`);
      } else if (Math.abs(l.bedrooms - parsed.bedrooms) === 1) {
        score += 10;
        reasons.push(lang === "th" ? `${l.bedrooms} ห้องนอน (ใกล้เคียง)` : `${l.bedrooms} bedrooms (close)`);
      } else {
        misses.push(lang === "th" ? `${l.bedrooms} ห้องนอน` : `${l.bedrooms} bedrooms`);
      }
    }

    // zone (25)
    if (parsed.zoneHits.length > 0) {
      weightSum += 25;
      const hit = l.zoneTokens.some((z) => parsed.zoneHits.includes(z));
      if (hit) {
        score += 25;
        reasons.push(lang === "th" ? `ทำเลตรง: ${l.zone.th}` : `Location match: ${l.zone.en}`);
      } else {
        misses.push(lang === "th" ? `ทำเล ${l.zone.th}` : `Location: ${l.zone.en}`);
      }
    }

    // lifestyle keyword overlap (20)
    if (parsed.keywords.length > 0) {
      const per = 20 / parsed.keywords.length;
      weightSum += 20;
      for (const kw of parsed.keywords) {
        if (l.tags.includes(kw)) {
          score += per;
          reasons.push(tagLabel(kw, lang));
        } else {
          misses.push(tagLabel(kw, lang));
        }
      }
    }

    if (weightSum === 0) {
      score = l.nearBTS ? 60 : 45;
      reasons.push(lang === "th" ? "แนะนำตามความนิยม (ยังไม่ระบุเงื่อนไข)" : "Recommended (popular) — no filters set yet");
    } else {
      score = Math.round((score / weightSum) * 100);
    }

    return {
      id: l.id,
      title: l.title[lang],
      type: l.type[lang],
      zone: l.zone[lang],
      price: l.price,
      bedrooms: l.bedrooms,
      area: l.area,
      score: Math.min(100, Math.round(score)),
      reasons,
      misses,
    };
  });

  results.sort((a, b) => b.score - a.score);
  return { parsed, results };
}
