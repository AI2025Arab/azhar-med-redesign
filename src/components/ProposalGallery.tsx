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
        <section id="gallery" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">المعرض المعماري والمقترحات</h2>
                    <p className="text-[#888888] font-inter tracking-widest uppercase text-sm">Architectural Proposals Gallery</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-6">
                            {col.map((img, imgIdx) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "50px" }}
                                    transition={{ duration: 0.6, delay: (imgIdx * 0.1) }}
                                    className="group relative cursor-zoom-in overflow-hidden bg-[#1A1A1A] border-4 border-[#1F1F22] hover:border-[#0F766E] transition-colors duration-500"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="relative w-full bg-[#0B0B0C] flex items-center justify-center">
                                        <Image
                                            src={img.url}
                                            alt={img.title}
                                            width={1600}
                                            height={900}
                                            loading="lazy"
                                            className="w-full h-auto max-w-full object-contain object-center"
                                        />
                                        <div className="absolute inset-0 bg-[#0B0B0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <span className="text-[#E7E3DB] font-bold tracking-wide backdrop-blur-md px-6 py-3 border border-white/10 shadow-xl">
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
