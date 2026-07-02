export type Listing = {
  id: number;
  title: string;
  type: "Condo" | "House" | "Townhome";
  zone: string;
  zoneKeys: string[];
  price: number; // THB / month (rent)
  bedrooms: number;
  area: number; // sqm
  tags: string[]; // lifestyle / highlights — labels here must match the keyword labels below
  nearBTS: boolean;
};

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Ideo Sukhumvit Condo — steps from BTS On Nut",
    type: "Condo",
    zone: "Sukhumvit / On Nut",
    zoneKeys: ["sukhumvit", "on nut", "onnut", "bts", "transit", "train"],
    price: 18000,
    bedrooms: 1,
    area: 32,
    tags: ["Near transit", "Gym", "Pool", "Great for professionals", "Easy commute"],
    nearBTS: true,
  },
  {
    id: 2,
    title: "Detached house with garden, Bangna",
    type: "House",
    zone: "Bangna",
    zoneKeys: ["bangna", "suburb"],
    price: 35000,
    bedrooms: 3,
    area: 180,
    tags: ["Has garden", "2 parking spaces", "Pet-friendly", "Family-friendly", "Quiet", "Near school"],
    nearBTS: false,
  },
  {
    id: 3,
    title: "2-bedroom townhome, Ratchada — near MRT",
    type: "Townhome",
    zone: "Ratchada",
    zoneKeys: ["ratchada", "mrt", "transit", "train", "huai khwang"],
    price: 22000,
    bedrooms: 2,
    area: 110,
    tags: ["Near transit", "Pet-friendly", "Parking", "Family-friendly", "Near market"],
    nearBTS: true,
  },
  {
    id: 4,
    title: "Budget studio condo, Ladprao",
    type: "Condo",
    zone: "Ladprao",
    zoneKeys: ["ladprao", "mrt", "transit"],
    price: 9500,
    bedrooms: 1,
    area: 24,
    tags: ["Budget-friendly", "Near transit", "Great for students", "Fully furnished"],
    nearBTS: false,
  },
  {
    id: 5,
    title: "Luxury 2-bedroom condo, Thonglor — city view",
    type: "Condo",
    zone: "Thonglor",
    zoneKeys: ["thonglor", "sukhumvit", "bts", "transit"],
    price: 55000,
    bedrooms: 2,
    area: 75,
    tags: ["Luxury", "Near transit", "Great view", "Pet-friendly", "Gym", "Co-working"],
    nearBTS: true,
  },
  {
    id: 6,
    title: "4-bedroom detached house, Nonthaburi / Ratchaphruek",
    type: "House",
    zone: "Nonthaburi / Ratchaphruek",
    zoneKeys: ["nonthaburi", "ratchaphruek", "suburb"],
    price: 45000,
    bedrooms: 4,
    area: 240,
    tags: ["Has garden", "3 parking spaces", "Pet-friendly", "Family-friendly", "Quiet", "Gated community"],
    nearBTS: false,
  },
  {
    id: 7,
    title: "1-bedroom condo, Ari — by BTS, cafes everywhere",
    type: "Condo",
    zone: "Ari",
    zoneKeys: ["ari", "bts", "transit", "phahon"],
    price: 25000,
    bedrooms: 1,
    area: 40,
    tags: ["Near transit", "Cafes nearby", "Great for professionals", "Easy commute", "Pet-friendly"],
    nearBTS: true,
  },
  {
    id: 8,
    title: "3-bedroom townhome, Prachauthit — great value",
    type: "Townhome",
    zone: "Prachauthit / Rama 2",
    zoneKeys: ["prachauthit", "rama 2", "suburb"],
    price: 15000,
    bedrooms: 3,
    area: 130,
    tags: ["Budget-friendly", "Parking", "Pet-friendly", "Family-friendly", "Near school"],
    nearBTS: false,
  },
];

export type MatchResult = {
  listing: Listing;
  score: number; // 0-100
  reasons: string[];
  misses: string[];
};

export type ParsedQuery = {
  budget: number | null;
  bedrooms: number | null;
  zoneHits: string[];
  keywords: string[];
};

// Parse a natural-language query into concrete conditions
export function parseQuery(raw: string): ParsedQuery {
  const q = raw.toLowerCase();

  // budget: "20000", "20k", "under 30000"
  let budget: number | null = null;
  const kMatch = q.match(/(\d+(?:\.\d+)?)\s*k/);
  const numMatch = q.match(/(\d[\d,]{3,})/);
  if (kMatch) budget = Math.round(parseFloat(kMatch[1]) * 1000);
  else if (numMatch) budget = parseInt(numMatch[1].replace(/,/g, ""), 10);

  // bedrooms
  let bedrooms: number | null = null;
  const bedMatch = q.match(/(\d+)\s*-?\s*(bedroom|bed|br|room)/);
  if (bedMatch) bedrooms = parseInt(bedMatch[1], 10);

  const has = (...arr: string[]) => arr.some((k) => q.includes(k));

  const ZONES = [
    "sukhumvit", "on nut", "onnut", "thonglor", "ari", "ratchada",
    "huai khwang", "ladprao", "bangna", "nonthaburi", "ratchaphruek",
    "prachauthit", "rama 2", "phahon",
  ];
  const zoneHits = ZONES.filter((z) => q.includes(z));

  const wantBTS = has("bts", "mrt", "transit", "train", "station", "skytrain", "subway", "commute");
  const wantPet = has("pet", "dog", "cat", "animal");
  const wantGarden = has("garden", "yard", "outdoor");
  const wantFamily = has("family", "kids", "children", "school");
  const wantCheap = has("cheap", "affordable", "student", "low budget", "low-cost", "tight budget", "inexpensive");
  const wantLuxury = has("luxury", "premium", "high-end", "upscale", "great view", "view");

  const keywords = [
    wantBTS && "Near transit",
    wantPet && "Pet-friendly",
    wantGarden && "Has garden",
    wantFamily && "Family-friendly",
    wantCheap && "Budget-friendly",
    wantLuxury && "Luxury",
  ].filter(Boolean) as string[];

  return { budget, bedrooms, zoneHits, keywords };
}

// Hybrid matching: rule filters (budget/beds/zone) + semantic-ish tag overlap
export function matchListings(raw: string): { parsed: ParsedQuery; results: MatchResult[] } {
  const parsed = parseQuery(raw);

  const results: MatchResult[] = LISTINGS.map((l) => {
    let score = 0;
    const reasons: string[] = [];
    const misses: string[] = [];
    let weightSum = 0;

    // budget (weight 35)
    if (parsed.budget != null) {
      weightSum += 35;
      if (l.price <= parsed.budget) {
        score += 35;
        reasons.push(`Within budget THB ${parsed.budget.toLocaleString()} (THB ${l.price.toLocaleString()})`);
      } else if (l.price <= parsed.budget * 1.15) {
        score += 20;
        reasons.push(`Slightly over budget (THB ${l.price.toLocaleString()})`);
      } else {
        misses.push(`Over budget (THB ${l.price.toLocaleString()})`);
      }
    }

    // bedrooms (weight 20)
    if (parsed.bedrooms != null) {
      weightSum += 20;
      if (l.bedrooms === parsed.bedrooms) {
        score += 20;
        reasons.push(`${l.bedrooms} bedrooms as requested`);
      } else if (Math.abs(l.bedrooms - parsed.bedrooms) === 1) {
        score += 10;
        reasons.push(`${l.bedrooms} bedrooms (close)`);
      } else {
        misses.push(`${l.bedrooms} bedrooms`);
      }
    }

    // zone (weight 25)
    if (parsed.zoneHits.length > 0) {
      weightSum += 25;
      const hit = parsed.zoneHits.some((z) => l.zoneKeys.includes(z));
      if (hit) {
        score += 25;
        reasons.push(`Location match: ${l.zone}`);
      } else {
        misses.push(`Location: ${l.zone}`);
      }
    }

    // lifestyle / keyword overlap (weight 20 total)
    if (parsed.keywords.length > 0) {
      const per = 20 / parsed.keywords.length;
      weightSum += 20;
      for (const kw of parsed.keywords) {
        const matched = l.tags.some((t) => t.includes(kw) || kw.includes(t));
        if (matched) {
          score += per;
          reasons.push(kw);
        } else {
          misses.push(kw);
        }
      }
    }

    if (weightSum === 0) {
      score = l.nearBTS ? 60 : 45;
      reasons.push("Recommended (popular) — no filters set yet");
    } else {
      score = Math.round((score / weightSum) * 100);
    }

    return { listing: l, score: Math.min(100, Math.round(score)), reasons, misses };
  });

  results.sort((a, b) => b.score - a.score);
  return { parsed, results };
}
