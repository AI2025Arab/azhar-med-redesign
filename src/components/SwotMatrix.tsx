"use client";

import { motion } from "framer-motion";
import { projectData } from "@/data/projectData";

export default function SwotMatrix() {
    // Aggregate SWOT from the project data
    const strengths = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.strengths))).slice(0, 5);
    const weaknesses = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.weaknesses))).slice(0, 5);
    const opportunities = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.opportunities))).slice(0, 5);
    const threats = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.threats))).slice(0, 5);

    const swotCards = [
        { title: "Strengths", desc: "نقاط القوة", data: strengths, color: "border-l-[#0F766E]" },
        { title: "Weaknesses", desc: "نقاط الضعف", data: weaknesses, color: "border-l-[#888888]" },
        { title: "Opportunities", desc: "الفرص التصميمية", data: opportunities, color: "border-l-[#C9A227]" },
        { title: "Threats", desc: "التهديدات والمخاطر", data: threats, color: "border-l-[#1F1F22]" },
    ];

    return (
        <section id="swot" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">التحليل الاستراتيجي</h2>
                    <p className="text-[#888888] font-inter tracking-widest uppercase text-sm">Comprehensive SWOT Matrix</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {swotCards.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`bg-[#1A1A1A] border border-[#1F1F22] border-l-4 ${card.color} p-6 hover:bg-[#1A1A1A]/80 transition-colors`}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold font-inter text-[#F5F5F4] mb-1">{card.title}</h3>
                                <span className="text-sm text-[#888888]">{card.desc}</span>
                            </div>

                            <ul className="space-y-4">
                                {card.data.map((item, i) => (
                                    <li key={i} className="text-sm text-[#E7E3DB] relative pl-4 leading-relaxed">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-[#C9A227] rounded-none opacity-50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
