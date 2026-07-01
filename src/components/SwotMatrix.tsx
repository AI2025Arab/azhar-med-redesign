"use client";

import { motion } from "framer-motion";
import { projectData } from "@/data/projectData";
import { Shield, AlertTriangle, Lightbulb, Compass } from "lucide-react";

export default function SwotMatrix() {
    // Aggregate SWOT from the project data
    const strengths = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.strengths))).slice(0, 5);
    const weaknesses = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.weaknesses))).slice(0, 5);
    const opportunities = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.opportunities))).slice(0, 5);
    const threats = Array.from(new Set(projectData.images.flatMap(img => img.swot_analysis.threats))).slice(0, 5);

    const swotCards = [
        { 
            title: "Strengths", 
            desc: "نقاط القوة", 
            data: strengths, 
            borderColor: "border-[#0D9488]/30",
            hoverBg: "hover:border-[#0D9488]/80 hover:shadow-[0_0_30px_rgba(13,148,136,0.15)]",
            icon: <Shield className="text-[#0D9488] w-6 h-6" />,
            badgeBg: "bg-[#0D9488]/10 text-[#0D9488]"
        },
        { 
            title: "Weaknesses", 
            desc: "نقاط الضعف", 
            data: weaknesses, 
            borderColor: "border-[#E7E3DB]/20",
            hoverBg: "hover:border-[#E7E3DB]/60 hover:shadow-[0_0_30px_rgba(231,227,219,0.1)]",
            icon: <AlertTriangle className="text-[#E7E3DB]/80 w-6 h-6" />,
            badgeBg: "bg-white/5 text-[#E7E3DB]/80"
        },
        { 
            title: "Opportunities", 
            desc: "الفرص التصميمية", 
            data: opportunities, 
            borderColor: "border-[#D4AF37]/30",
            hoverBg: "hover:border-[#D4AF37]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]",
            icon: <Lightbulb className="text-[#D4AF37] w-6 h-6" />,
            badgeBg: "bg-[#D4AF37]/10 text-[#D4AF37]"
        },
        { 
            title: "Threats", 
            desc: "التهديدات والمخاطر", 
            data: threats, 
            borderColor: "border-[#EF4444]/30",
            hoverBg: "hover:border-[#EF4444]/80 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
            icon: <Compass className="text-[#EF4444] w-6 h-6" />,
            badgeBg: "bg-[#EF4444]/10 text-[#EF4444]"
        },
    ];

    return (
        <section id="swot" className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/3 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[30%] right-[-10%] w-[400px] h-[400px] bg-[#0D9488]/3 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">

                <div className="text-center mb-20">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">Comprehensive SWOT Matrix</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8F9FA] mb-4">التحليل الاستراتيجي (SWOT)</h2>
                    <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {swotCards.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className={`glass-panel border-t-4 border ${card.borderColor} ${card.hoverBg} p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between group`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold font-inter text-[#F8F9FA] tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        <span className="text-xs text-[#9CA3AF] font-bold block">{card.desc}</span>
                                    </div>
                                    <div className={`p-3 rounded-xl transition-all duration-300 ${card.badgeBg}`}>
                                        {card.icon}
                                    </div>
                                </div>

                                <ul className="space-y-4 text-right">
                                    {card.data.map((item, i) => (
                                        <li key={i} className="text-sm text-[#E7E3DB]/90 relative pr-5 leading-relaxed">
                                            <span className="absolute right-0 top-2.5 w-1.5 h-1.5 bg-[#D4AF37] rounded-full transition-transform duration-300 group-hover:scale-125" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
