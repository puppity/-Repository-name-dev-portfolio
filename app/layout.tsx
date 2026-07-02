import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio · Next.js · n8n · AI",
  description:
    "Full-stack developer — Next.js, n8n automation, LINE/Messaging APIs, LLM integration, PostgreSQL/Firebase. ผลงานจริงที่ deploy แล้ว.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
