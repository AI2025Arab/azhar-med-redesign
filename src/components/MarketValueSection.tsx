"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChartNoAxesCombined, Handshake, Rocket, ShieldCheck, Target } from "lucide-react";

const valuePillars = [
  {
    icon: Target,
    title: "عرض قيمة واضح ومُقنع",
    description:
      "تحويل المشروع من عرض أكاديمي إلى منتج استشاري قابل للبيع للجامعات والمستشفيات والمؤسسات التعليمية.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "مؤشرات أداء قابلة للقياس",
    description:
      "قياس التحسين في الانطباع البصري، تجربة المستخدم، وكفاءة الحركة الداخلية عبر KPI واضحة قبل/بعد التنفيذ.",
  },
  {
    icon: ShieldCheck,
    title: "جاهزية مهنية للتنفيذ",
    description:
      "إطار تسليم احترافي يشمل نطاق العمل، آلية التنفيذ المرحلي، وحوكمة الجودة لتقليل المخاطر والتكلفة.",
  },
];

const executionPlan = [
  {
    phase: "المرحلة 01",
    title: "Proof of Value",
    details: "إخراج نسخة استثمارية مختصرة للمشروع مع عرض التأثير المالي والتشغيلي خلال 90 يوم.",
  },
  {
    phase: "المرحلة 02",
    title: "Commercial Pilot",
    details: "تطبيق نموذج تجريبي على مبنى واحد مع تتبع التحسن الفعلي في الجودة، الصورة المؤسسية، ورضا المستخدم.",
  },
  {
    phase: "المرحلة 03",
    title: "Scale & Partnerships",
    details: "توسيع النموذج لشبكة مؤسسات تعليمية وطبية عبر عقود استشارية وشراكات تنفيذية طويلة المدى.",
  },
];

export default function MarketValueSection() {
  return (
    <section id="market-value" className="relative py-24 border-t border-[#C9A227]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0F766E]/40 bg-[#0F766E]/10 px-4 py-1.5 text-sm text-[#7DD3C7]">
            <Rocket className="h-4 w-4" />
            تحويل المشروع إلى قيمة سوقية فعلية
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#F5F5F4] leading-tight">
            خارطة تشغيلية ترفع المشروع <span className="text-[#C9A227]">10X</span>
          </h2>
          <p className="mt-4 text-[#D6D3CC] leading-relaxed text-lg">
            تم تصميم هذا القسم ليمنحك مساراً عملياً لتحويل الفكرة إلى منتج معماري قابل للتسويق، بآلية تنفيذ تدريجية تُناسب
            أصحاب المشاريع غير التقنية.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-[#C9A227]/20 bg-gradient-to-b from-[#171717] to-[#111111] p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E]/20 text-[#5EEAD4]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F4] mb-2">{pillar.title}</h3>
                <p className="text-[#CFC8BD] leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="rounded-3xl border border-[#C9A227]/25 bg-[#111111] p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="h-5 w-5 text-[#C9A227]" />
            <h3 className="text-2xl md:text-3xl font-semibold text-[#F5F5F4]">خطة التنفيذ الذكي</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {executionPlan.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-white/10 bg-[#181818] p-5">
                <p className="text-xs tracking-[0.18em] text-[#7DD3C7] uppercase mb-2">{item.phase}</p>
                <h4 className="text-lg font-semibold text-[#F5F5F4] mb-2">{item.title}</h4>
                <p className="text-[#D6D3CC] text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="mailto:contact@azhar-med-redesign.com?subject=طلب%20نسخة%20تنفيذية%20من%20مشروع%20إعادة%20التصميم"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-[#0B0B0C] font-semibold hover:brightness-105 transition"
            >
              احجز جلسة تقييم مشروعك
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/201000000000?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%84%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0F766E]/50 px-5 py-3 text-[#7DD3C7] hover:bg-[#0F766E]/10 transition"
            >
              حمل النسخة الاستثمارية (PDF)
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
