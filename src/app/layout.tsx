import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const pSA = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-plex"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "إعادة صياغة الهوية المعمارية لكلية الطب — جامعة الأزهر",
  description: "دراسة تحليلية مع إعادة تصميم معماري باستخدام الذكاء الاصطناعي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${pSA.variable} ${inter.variable} font-plex antialiased bg-[#0B0B0C] text-[#F5F5F4] selection:bg-[#C9A227] selection:text-[#0B0B0C]`}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
