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
  metadataBase: new URL("https://azhar-med-redesign.com"),
  title: "إعادة صياغة الهوية المعمارية لكلية الطب — جامعة الأزهر",
  description: "دراسة تحليلية مع إعادة تصميم معماري باستخدام الذكاء الاصطناعي، مع خارطة تحويل المشروع لقيمة سوقية قابلة للتنفيذ.",
  keywords: [
    "إعادة تصميم معماري",
    "الذكاء الاصطناعي في العمارة",
    "Faculty of Medicine redesign",
    "Architectural commercialization",
    "Azhar University"
  ],
  openGraph: {
    title: "إعادة صياغة الهوية المعمارية لكلية الطب — جامعة الأزهر",
    description: "مشروع معماري مدعوم بالذكاء الاصطناعي مع خطة تنفيذ واستثمار مرحلية.",
    type: "website",
    locale: "ar_EG"
  },
  twitter: {
    card: "summary_large_image",
    title: "إعادة صياغة الهوية المعمارية لكلية الطب — جامعة الأزهر",
    description: "مشروع معماري مدعوم بالذكاء الاصطناعي مع خطة تنفيذ واستثمار مرحلية."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "إعادة صياغة الهوية المعمارية لكلية الطب - جامعة الأزهر",
    inLanguage: "ar",
    about: ["Architectural Design", "Generative AI", "Healthcare Education Facilities"],
    creator: "أحمد سليمان محمد العادلي و أحمد أسامة"
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${pSA.variable} ${inter.variable} font-plex antialiased bg-[#0B0B0C] text-[#F5F5F4] selection:bg-[#C9A227] selection:text-[#0B0B0C]`}
        suppressHydrationWarning
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
