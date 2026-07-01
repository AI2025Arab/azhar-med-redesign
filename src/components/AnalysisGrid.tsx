"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { AlertCircle } from "lucide-react";

export default function AnalysisGrid() {
    // Display the core analysis for all site locations
    const analysisItems = projectData.images;

    return (
        <section id="analysis" className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-[#0D9488]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">

                <div className="mb-20 text-right">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">Architectural Site Analysis & Evaluation</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8F9FA] mb-4">التحليل المعماري للوضع الراهن</h2>
                    <div className="w-20 h-[2px] bg-[#D4AF37] mr-0 ml-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {analysisItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="group bg-[#131315]/40 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-500 rounded-2xl flex flex-col justify-between"
                        >
                            <div className="relative w-full border-b border-white/5 overflow-hidden bg-[#080809] flex items-center justify-center">
                                <Image
                                    src={item.original_url}
                                    alt={item.title}
                                    width={1600}
                                    height={900}
                                    loading="lazy"
                                    className="w-full h-auto max-w-full object-contain object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-[#080809]/80 backdrop-blur-md px-3 py-1 text-[10px] text-[#D4AF37] border border-white/10 font-inter tracking-widest uppercase rounded">
                                    EXISTING STATE
                                </div>
                            </div>

                            <div className="p-8 space-y-6 text-right flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#F8F9FA] group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.description}</p>
                                </div>

                                <div className="bg-[#080809]/60 p-4 border border-white/5 flex items-start justify-between gap-4 rounded-xl mt-auto">
                                    <div className="text-right">
                                        <span className="block text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest font-inter mb-1.5">Key Architectural Issue</span>
                                        <span className="text-sm text-[#E7E3DB]/90 leading-relaxed">{item.swot_analysis.weaknesses[0]}</span>
                                    </div>
                                    <AlertCircle className="text-[#D4AF37] w-5 h-5 shrink-0 mt-0.5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
