"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/data/projectData";

export default function SiteDocumentation() {
    const docs = projectData.siteDocumentation;

    return (
        <section id="documentation" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">التوثيق الميداني والبحث</h2>
                        <p className="text-[#888888] font-inter uppercase tracking-widest text-sm">Site Documentation & Field Research</p>
                    </div>
                    <div className="max-w-xl text-[#888888] border-r-2 border-[#0F766E] pr-6">
                        <p className="text-sm leading-relaxed">
                            مجموعة من الصور الفوتوغرافية التوثيقية التي تم رصدها وتحليلها خلال الدراسات الميدانية للموقع، والتي وفرت المادة العلمية الأساسية لتوجيه محركات الذكاء الاصطناعي في عمليات إعادة التصميم.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                    {docs.map((doc, idx) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group relative aspect-square bg-[#1A1A1A] border border-[#1F1F22] overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={doc.url}
                                alt=""
                                fill
                                loading="lazy"
                                className="object-contain object-center grayscale transition-all duration-700 opacity-60 group-hover:opacity-100 bg-[#0B0B0C]"
                            />

                            {/* Overlay with ID / Index */}
                            <div className="absolute top-0 right-0 p-2">
                                <span className="text-[10px] font-inter font-bold text-[#F5F5F4]/30 group-hover:text-[#C9A227] transition-colors">
                                    DOC_{idx + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
