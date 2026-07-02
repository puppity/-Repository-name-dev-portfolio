export type Listing = {
  id: number;
  title: string;
  type: "คอนโด" | "บ้านเดี่ยว" | "ทาวน์โฮม";
  zone: string;
  zoneKeys: string[];
  price: number; // บาท/เดือน (เช่า)
  bedrooms: number;
  area: number; // ตร.ม.
  tags: string[]; // ไลฟ์สไตล์/จุดเด่น
  nearBTS: boolean;
};

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "คอนโด Ideo สุขุมวิท ติด BTS อ่อนนุช",
    type: "คอนโด",
    zone: "สุขุมวิท / อ่อนนุช",
    zoneKeys: ["สุขุมวิท", "อ่อนนุช", "sukhumvit", "onnut", "bts", "รถไฟฟ้า"],
    price: 18000,
    bedrooms: 1,
    area: 32,
    tags: ["ติดรถไฟฟ้า", "มีฟิตเนส", "สระว่ายน้ำ", "สัตว์เลี้ยงไม่ได้", "เหมาะคนทำงาน", "เดินทางสะดวก"],
    nearBTS: true,
  },
  {
    id: 2,
    title: "บ้านเดี่ยว 3 ห้องนอน ย่านบางนา มีสวน",
    type: "บ้านเดี่ยว",
    zone: "บางนา",
    zoneKeys: ["บางนา", "bangna", "ชานเมือง"],
    price: 35000,
    bedrooms: 3,
    area: 180,
    tags: ["มีสวน", "ที่จอดรถ 2 คัน", "เลี้ยงสัตว์ได้", "เหมาะครอบครัว", "เงียบสงบ", "โรงเรียนใกล้"],
    nearBTS: false,
  },
  {
    id: 3,
    title: "ทาวน์โฮม 2 ห้องนอน รัชดา ใกล้ MRT",
    type: "ทาวน์โฮม",
    zone: "รัชดาภิเษก",
    zoneKeys: ["รัชดา", "ratchada", "mrt", "รถไฟฟ้า", "ห้วยขวาง"],
    price: 22000,
    bedrooms: 2,
    area: 110,
    tags: ["ใกล้รถไฟฟ้า", "เลี้ยงสัตว์ได้", "ที่จอดรถ", "เหมาะครอบครัวเล็ก", "ใกล้ตลาด"],
    nearBTS: true,
  },
  {
    id: 4,
    title: "คอนโดสตูดิโอ ราคาประหยัด ลาดพร้าว",
    type: "คอนโด",
    zone: "ลาดพร้าว",
    zoneKeys: ["ลาดพร้าว", "ladprao", "mrt", "รถไฟฟ้า"],
    price: 9500,
    bedrooms: 1,
    area: 24,
    tags: ["ราคาประหยัด", "ใกล้รถไฟฟ้า", "เหมาะนักศึกษา", "เหมาะเริ่มทำงาน", "เฟอร์นิเจอร์ครบ"],
    nearBTS: false,
  },
  {
    id: 5,
    title: "คอนโดหรู 2 ห้องนอน ทองหล่อ วิวเมือง",
    type: "คอนโด",
    zone: "ทองหล่อ",
    zoneKeys: ["ทองหล่อ", "thonglor", "สุขุมวิท", "bts", "รถไฟฟ้า"],
    price: 55000,
    bedrooms: 2,
    area: 75,
    tags: ["หรูหรา", "ติดรถไฟฟ้า", "วิวสวย", "เลี้ยงสัตว์ได้", "ฟิตเนส", "co-working", "เหมาะคนทำงานสาย"],
    nearBTS: true,
  },
  {
    id: 6,
    title: "บ้านเดี่ยว 4 ห้องนอน นนทบุรี ราชพฤกษ์",
    type: "บ้านเดี่ยว",
    zone: "นนทบุรี / ราชพฤกษ์",
    zoneKeys: ["นนทบุรี", "ราชพฤกษ์", "nonthaburi", "ชานเมือง"],
    price: 45000,
    bedrooms: 4,
    area: 240,
    tags: ["มีสวน", "ที่จอดรถ 3 คัน", "เลี้ยงสัตว์ได้", "เหมาะครอบครัวใหญ่", "เงียบสงบ", "หมู่บ้านมี รปภ."],
    nearBTS: false,
  },
  {
    id: 7,
    title: "คอนโด 1 ห้องนอน อารีย์ ใกล้ BTS + คาเฟ่เยอะ",
    type: "คอนโด",
    zone: "อารีย์",
    zoneKeys: ["อารีย์", "ari", "bts", "รถไฟฟ้า", "พหลโยธิน"],
    price: 25000,
    bedrooms: 1,
    area: 40,
    tags: ["ติดรถไฟฟ้า", "คาเฟ่เยอะ", "เหมาะคนทำงาน", "เดินทางสะดวก", "ย่านฮิป", "เลี้ยงสัตว์ได้"],
    nearBTS: true,
  },
  {
    id: 8,
    title: "ทาวน์โฮม 3 ห้องนอน ประชาอุทิศ ราคาน่ารัก",
    type: "ทาวน์โฮม",
    zone: "ประชาอุทิศ / พระราม 2",
    zoneKeys: ["ประชาอุทิศ", "พระราม 2", "ชานเมือง"],
    price: 15000,
    bedrooms: 3,
    area: 130,
    tags: ["ราคาประหยัด", "ที่จอดรถ", "เลี้ยงสัตว์ได้", "เหมาะครอบครัว", "โรงเรียนใกล้"],
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
  wantBTS: boolean;
  wantPet: boolean;
  wantGarden: boolean;
  wantFamily: boolean;
  wantCheap: boolean;
  wantLuxury: boolean;
  keywords: string[];
};

// พาร์สข้อความภาษาธรรมชาติ (ไทย/อังกฤษ) → เงื่อนไขที่จับต้องได้
export function parseQuery(raw: string): ParsedQuery {
  const q = raw.toLowerCase();

  // งบประมาณ: จับ "20000", "2 หมื่น", "20k", "ไม่เกิน 30000"
  let budget: number | null = null;
  const kMatch = q.match(/(\d+(?:\.\d+)?)\s*k/);
  const wanMatch = q.match(/(\d+(?:\.\d+)?)\s*หมื่น/);
  const numMatch = q.match(/(\d[\d,]{3,})/);
  if (kMatch) budget = Math.round(parseFloat(kMatch[1]) * 1000);
  else if (wanMatch) budget = Math.round(parseFloat(wanMatch[1]) * 10000);
  else if (numMatch) budget = parseInt(numMatch[1].replace(/,/g, ""), 10);

  // ห้องนอน
  let bedrooms: number | null = null;
  const bedMatch = q.match(/(\d+)\s*(ห้องนอน|ห้อง|นอน|bed|br)/);
  if (bedMatch) bedrooms = parseInt(bedMatch[1], 10);

  const has = (...arr: string[]) => arr.some((k) => q.includes(k));

  const ZONES = [
    "สุขุมวิท", "อ่อนนุช", "ทองหล่อ", "อารีย์", "รัชดา", "ห้วยขวาง", "ลาดพร้าว",
    "บางนา", "นนทบุรี", "ราชพฤกษ์", "ประชาอุทิศ", "พระราม 2", "พหลโยธิน",
    "sukhumvit", "onnut", "thonglor", "ari", "ratchada", "ladprao", "bangna",
  ];
  const zoneHits = ZONES.filter((z) => q.includes(z));

  const wantBTS = has("bts", "mrt", "รถไฟฟ้า", "ใกล้รถไฟ", "เดินทางสะดวก", "ติดรถไฟ");
  // หมายเหตุ: ไม่ใช้ "หมา" เดี่ยว ๆ เพราะเป็น substring ของ "เหมาะ" (เช่น "เหมาะครอบครัว") → false match
  const wantPet = has("สัตว์", "เลี้ยงหมา", "แมว", "เลี้ยง", "pet");
  const wantGarden = has("สวน", "garden", "พื้นที่นอก");
  const wantFamily = has("ครอบครัว", "family", "ลูก", "โรงเรียน", "พ่อแม่");
  const wantCheap = has("ประหยัด", "ถูก", "งบน้อย", "cheap", "budget", "นักศึกษา");
  const wantLuxury = has("หรู", "luxury", "premium", "วิว", "high end", "ไฮเอนด์");

  const keywords = [
    wantBTS && "ติดรถไฟฟ้า",
    wantPet && "เลี้ยงสัตว์ได้",
    wantGarden && "มีสวน",
    wantFamily && "เหมาะครอบครัว",
    wantCheap && "ราคาประหยัด",
    wantLuxury && "หรูหรา",
  ].filter(Boolean) as string[];

  return { budget, bedrooms, zoneHits, wantBTS, wantPet, wantGarden, wantFamily, wantCheap, wantLuxury, keywords };
}

// การจับคู่แบบ hybrid: ฟิลเตอร์เชิงกฎ (งบ/ห้อง/โซน) + ความใกล้เชิงความหมาย (tag overlap)
export function matchListings(raw: string): { parsed: ParsedQuery; results: MatchResult[] } {
  const parsed = parseQuery(raw);

  const results: MatchResult[] = LISTINGS.map((l) => {
    let score = 0;
    const reasons: string[] = [];
    const misses: string[] = [];
    let weightSum = 0;

    // งบประมาณ (น้ำหนัก 35)
    if (parsed.budget != null) {
      weightSum += 35;
      if (l.price <= parsed.budget) {
        score += 35;
        reasons.push(`อยู่ในงบ ${parsed.budget.toLocaleString()} บาท (${l.price.toLocaleString()})`);
      } else if (l.price <= parsed.budget * 1.15) {
        score += 20;
        reasons.push(`เกินงบเล็กน้อย (${l.price.toLocaleString()})`);
      } else {
        misses.push(`เกินงบ (${l.price.toLocaleString()})`);
      }
    }

    // ห้องนอน (น้ำหนัก 20)
    if (parsed.bedrooms != null) {
      weightSum += 20;
      if (l.bedrooms === parsed.bedrooms) {
        score += 20;
        reasons.push(`${l.bedrooms} ห้องนอนตรงตามต้องการ`);
      } else if (Math.abs(l.bedrooms - parsed.bedrooms) === 1) {
        score += 10;
        reasons.push(`${l.bedrooms} ห้องนอน (ใกล้เคียง)`);
      } else {
        misses.push(`${l.bedrooms} ห้องนอน`);
      }
    }

    // โซน (น้ำหนัก 25)
    if (parsed.zoneHits.length > 0) {
      weightSum += 25;
      const hit = parsed.zoneHits.some((z) => l.zoneKeys.includes(z));
      if (hit) {
        score += 25;
        reasons.push(`ทำเลตรง: ${l.zone}`);
      } else {
        misses.push(`ทำเล ${l.zone}`);
      }
    }

    // ไลฟ์สไตล์/keyword overlap (น้ำหนัก 20 รวม)
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

    // ถ้าไม่ระบุอะไรเลย ให้คะแนนกลาง ๆ ตามความนิยม (ติด BTS)
    if (weightSum === 0) {
      score = l.nearBTS ? 60 : 45;
      reasons.push("แนะนำตามความนิยม (ยังไม่ระบุเงื่อนไข)");
    } else {
      // normalize เป็น 0-100 ตามน้ำหนักที่ผู้ใช้ระบุจริง
      score = Math.round((score / weightSum) * 100);
    }

    return { listing: l, score: Math.min(100, Math.round(score)), reasons, misses };
  });

  results.sort((a, b) => b.score - a.score);
  return { parsed, results };
}
