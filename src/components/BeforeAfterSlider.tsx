"use client";

import { motion } from "framer-motion";
import { projectData } from "@/data/projectData";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AdaptiveBeforeAfter from "@/components/AdaptiveBeforeAfter";

export default function BeforeAfterSlider() {
    // Show all architectural redesign pairs
    const redesigns = projectData.images;

    return (
        <section id="redesign" className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Ambient background light */}
            <div className="absolute top-[10%] right-[-5%] w-[350px] h-[350px] bg-[#0D9488]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">

                <div className="text-center mb-20">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">AI Generated Redesign Proposals</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8F9FA] mb-4">التدخلات المعمارية المقترحة</h2>
                    <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
                </div>

                <div className="space-y-32">
                    {redesigns.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 text-right">
                                <div>
                                    <div className="flex items-center justify-end gap-3 mb-2">
                                        <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded font-bold font-inter">PROPOSAL {idx + 1}</span>
                                        <h3 className="text-2xl font-bold text-[#F8F9FA] font-plex">{img.title}</h3>
                                    </div>
                                    <p className="text-[#9CA3AF] text-sm max-w-2xl leading-relaxed">{img.description}</p>
                                </div>
                                <div className="flex bg-[#131315]/80 backdrop-blur rounded-full p-1 border border-white/5 self-end md:self-auto">
                                    <span className="px-4 py-1 text-xs text-[#080809] bg-[#D4AF37] rounded-full shadow font-bold">المقترح الجديد</span>
                                    <span className="px-4 py-1 text-xs text-[#E7E3DB]/60">الوضع الأصلي</span>
                                </div>
                            </div>

                            <div className="w-full bg-[#131315]/50 backdrop-blur-md p-4 border border-white/5 rounded-2xl shadow-2xl transition-all duration-500 group-hover:border-[#D4AF37]/30">
                                {img.title === "مقترحات العمل الفني والهندسي للممرات" ? (
                                    <AdaptiveBeforeAfter
                                        beforeSrc={img.original_url}
                                        afterSrc={img.redesign_url}
                                        alt={img.title}
                                        delimiterColor="#D4AF37"
                                    />
                                ) : (
                                    <div className="relative w-full bg-[#080809] flex items-center justify-center overflow-hidden border border-white/5 rounded-xl">
                                        <ReactBeforeSliderComponent
                                            firstImage={{ imageUrl: img.redesign_url }}
                                            secondImage={{ imageUrl: img.original_url }}
                                            delimiterColor="#D4AF37"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
