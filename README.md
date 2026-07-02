# Dev Portfolio — Next.js · n8n · AI

พอร์ตหน้าเดียวสำหรับสมัครงาน Full-Stack Developer พร้อมเดโม "AI จับคู่อสังหา" ที่กดเล่นได้จริง (client-side, ไม่ต้องใช้ API key).

## ก่อน deploy — แก้ 2 จุด
เปิด `app/page.tsx` แล้วแก้:
```ts
const YOUR_NAME = "ชื่อของคุณ";
const YOUR_EMAIL = "your-email@example.com";
```
และในไฟล์ `lib/projects.ts` ใส่ลิงก์ `live` ของแต่ละโปรเจกต์ (ถ้ามี URL จริง เช่น Vercel/โดเมน).

## รันในเครื่อง
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy ขึ้น Vercel (ได้ลิงก์จริงไว้แนบใบสมัคร)
1. push โค้ดขึ้น GitHub
2. เข้า vercel.com → New Project → import repo นี้
3. กด Deploy (ไม่ต้องตั้ง env อะไรเลย) → ได้ URL เช่น `https://your-portfolio.vercel.app`

## โครงสร้าง
```
app/page.tsx              หน้าเดียว: hero, ตารางแมตช์สเปก, เดโม, ผลงาน, วิธีคิด, ติดต่อ
components/PropertyMatcher.tsx   เดโม AI จับคู่อสังหา (client component)
lib/matcher.ts            ทรัพย์จำลอง + พาร์สภาษาธรรมชาติ + ให้คะแนน hybrid
lib/projects.ts           ข้อมูลผลงาน + ตารางเทียบสเปกงาน
```

## หมายเหตุเรื่องเดโม
เดโมนี้ให้คะแนนแบบ hybrid (ฟิลเตอร์เชิงกฎ งบ/ห้อง/ทำเล + keyword overlap ของไลฟ์สไตล์) ทำงานในเบราว์เซอร์ล้วน ๆ
เพื่อให้ recruiter คลิกเห็นผลทันทีโดยไม่ต้องมี backend. เวอร์ชัน production จริงจะเปลี่ยนเป็น vector embeddings (pgvector)
+ LLM re-rank และรับ input ผ่าน n8n จาก LINE/Messenger/WhatsApp.
