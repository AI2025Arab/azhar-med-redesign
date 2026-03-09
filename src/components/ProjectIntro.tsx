"use client";

import { motion } from "framer-motion";

export default function ProjectIntro() {
    return (
        <section className="py-[96px] px-[32px] bg-[#0B0B0C] relative border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-[#C9A227]" />
                            <span className="text-[#C9A227] text-sm font-bold tracking-widest uppercase font-inter">Project Overview</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F4] leading-tight">
                            تكامل الذكاء الاصطناعي مع العمارة الأكاديمية
                        </h2>

                        <p className="text-lg text-[#E7E3DB] leading-relaxed">
                            مشروع رائد يهدف إلى تقديم دراسة تحليلية شاملة للوضع الراهن لكلية الطب بجامعة الأزهر، متبوعة باقتراح تدخلات تصميمية جذرية تم إنشاؤها وتطويرها بالكامل باستخدام أدوات الذكاء الاصطناعي التوليدي.
                        </p>

                        <p className="text-[#888888] leading-relaxed">
                            الهدف الأساسي هو تحويل الواجهات المعمارية والممرات الداخلية إلى مساحات تعكس هيبة المؤسسة الطبية الأكاديمية وعبق التراث الإسلامي، في قوالب وظيفية معاصرة تليق بتطور التعليم الطبي السريري.
                        </p>
                    </motion.div>

                    {/* Quick Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { label: "AI Generate Rate", value: "100%", desc: "تصميم توليدي كامل" },
                            { label: "Project Focus", value: "Facade", desc: "ترميم بصرى وواجهات" },
                            { label: "Institution", value: "Al-Azhar", desc: "كلية الطب بنين" },
                            { label: "Design Code", value: "Islamic", desc: "طراز حديث بلمسة تراثية" },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-[#1A1A1A] border border-[#1F1F22] p-6 rounded-sm hover:border-[#0F766E] transition-colors">
                                <span className="block text-[#0F766E] font-inter text-xs tracking-widest font-bold uppercase mb-4">{stat.label}</span>
                                <span className="block text-4xl font-bold text-[#F5F5F4] mb-2 font-inter">{stat.value}</span>
                                <span className="block text-sm text-[#E7E3DB]">{stat.desc}</span>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
