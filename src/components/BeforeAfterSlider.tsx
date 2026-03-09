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
        <section id="redesign" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F4] mb-4">التدخلات المعمارية</h2>
                    <p className="text-[#888888] font-inter uppercase tracking-widest text-sm">AI Generated Redesign Proposals</p>
                </div>

                <div className="space-y-24">
                    {redesigns.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#F5F5F4] mb-2 font-plex">{img.title}</h3>
                                    <p className="text-[#888888] font-inter text-sm max-w-2xl">{img.description}</p>
                                </div>
                                <div className="flex bg-[#1F1F22] rounded-full p-1 border border-[#1F1F22]">
                                    <span className="px-4 py-1 text-xs text-[#E7E3DB] bg-[#0B0B0C] rounded-full shadow font-bold">المقترح الجديد</span>
                                    <span className="px-4 py-1 text-xs text-[#888888]">الوضع الأصلي</span>
                                </div>
                            </div>

                            <div className="w-full bg-[#1A1A1A] p-4 border border-[#1F1F22] rounded-sm">
                                {img.title === "مقترحات العمل الفني والهندسي للممرات" ? (
                                    <AdaptiveBeforeAfter
                                        beforeSrc={img.original_url}
                                        afterSrc={img.redesign_url}
                                        alt={img.title}
                                        delimiterColor="#0F766E"
                                    />
                                ) : (
                                    <div className="relative w-full bg-[#0B0B0C] flex items-center justify-center overflow-hidden border border-[#0B0B0C]">
                                        <ReactBeforeSliderComponent
                                            firstImage={{ imageUrl: img.redesign_url }}
                                            secondImage={{ imageUrl: img.original_url }}
                                            delimiterColor="#0F766E"
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
