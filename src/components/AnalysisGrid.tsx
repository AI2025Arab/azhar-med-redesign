"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { AlertCircle } from "lucide-react";

export default function AnalysisGrid() {
    // Display the core analysis for all site locations
    const analysisItems = projectData.images;

    return (
        <section id="analysis" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">التحليل المعماري للوضع الراهن</h2>
                    <p className="text-[#888888] max-w-2xl font-inter">Architectural Site Analysis & Evaluation</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {analysisItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group bg-[#1A1A1A] border border-[#1F1F22] overflow-hidden hover:border-[#C9A227] transition-all duration-500"
                        >
                            <div className="relative w-full border-b border-[#1F1F22] overflow-hidden bg-[#0B0B0C] flex items-center justify-center">
                                <Image
                                    src={item.original_url}
                                    alt={item.title}
                                    width={1600}
                                    height={900}
                                    loading="lazy"
                                    className="w-full h-auto max-w-full object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-[#E7E3DB] border border-white/10 font-inter tracking-widest uppercase">
                                    EXISTING STATE
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-[#F5F5F4] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#888888]">{item.description}</p>
                                </div>

                                <div className="bg-[#0B0B0C] p-4 border border-[#1F1F22]/50 flex items-start gap-3">
                                    <AlertCircle className="text-[#C9A227] w-5 h-5 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="block text-xs text-[#C9A227] font-bold uppercase tracking-widest font-inter mb-1">Key Architectural Issue</span>
                                        <span className="text-sm text-[#E7E3DB]">{item.swot_analysis.weaknesses[0]}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
