"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projectData } from "@/data/projectData";
import { ImageLightbox } from "./ImageLightbox";

export default function ProposalGallery() {
    const [selectedImage, setSelectedImage] = useState<typeof projectData.experiments[0] | null>(null);

    // Split items into 3 columns for Masonry layout visually
    const columns = [
        projectData.experiments.filter((_, i) => i % 3 === 0),
        projectData.experiments.filter((_, i) => i % 3 === 1),
        projectData.experiments.filter((_, i) => i % 3 === 2),
    ];

    return (
        <section id="gallery" className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Soft background light */}
            <div className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] bg-[#D4AF37]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">

                <div className="mb-20 text-right">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">Architectural Proposals Gallery</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8F9FA] mb-4">المعرض المعماري والمقترحات</h2>
                    <div className="w-20 h-[2px] bg-[#D4AF37] mr-0 ml-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-6 lg:gap-8">
                            {col.map((img, imgIdx) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "50px" }}
                                    transition={{ duration: 0.6, delay: (imgIdx * 0.1) }}
                                    className="group relative cursor-zoom-in overflow-hidden bg-[#131315]/40 backdrop-blur-md border border-white/5 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-500 rounded-2xl"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="relative w-full bg-[#080809] flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={img.url}
                                            alt={img.title}
                                            width={1600}
                                            height={900}
                                            loading="lazy"
                                            className="w-full h-auto max-w-full object-contain object-center group-hover:scale-105 transition-all duration-750"
                                        />
                                        <div className="absolute inset-0 bg-[#080809]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                            <span className="text-[#F8F9FA] font-bold text-center text-sm md:text-base tracking-wide backdrop-blur-md px-6 py-3 border border-[#D4AF37]/30 shadow-2xl bg-[#080809]/40 rounded-xl max-w-[85%]">
                                                {img.title}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <ImageLightbox
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
}
