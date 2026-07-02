import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio · Next.js · n8n · AI",
  description:
    "Full-stack developer — Next.js, n8n automation, LINE/Messaging APIs, LLM integration, PostgreSQL/Firebase. Shipped, production-ready work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
