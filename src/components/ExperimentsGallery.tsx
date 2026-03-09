"use client"

import { projectData } from "@/data/projectData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

export default function ExperimentsGallery() {
    const [selectedBanner, setSelectedBanner] = useState<typeof projectData.experiments[0] | null>(null);

    const openBanner = (banner: typeof projectData.experiments[0]) => setSelectedBanner(banner);
    const closeBanner = () => setSelectedBanner(null);

    return (
        <section className="py-24 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-cairo text-primary">المقترحات التجريبية</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                    تجارب معمارية وتصميمات بانر إضافية مولدة بالذكاء الاصطناعي لاستكشاف آفاق جديدة في تصميم كلية الطب.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-[320px]">
                {projectData.experiments.map((banner, idx) => (
                    <motion.div
                        key={banner.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className={`group relative cursor-zoom-in overflow-hidden bg-black border-[4px] border-[#1a1a1a] hover:border-primary/40 transition-all duration-500 shadow-2xl p-1.5 ${banner.isHorizontal ? "md:col-span-2" : "col-span-1 row-span-2"
                            }`}
                        onClick={() => openBanner(banner)}
                    >
                        {/* Third Architectural Frame */}
                        <div className="relative w-full h-full border border-white/10 overflow-hidden">
                            <Image
                                src={banner.url}
                                alt={banner.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Style - Premium Reveal */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 h-1/2 flex flex-col justify-end p-6">
                                <span className="text-primary/90 text-xs font-medium mb-1 tracking-widest uppercase">مقترح تجريبي #{banner.id}</span>
                                <span className="text-white font-bold text-lg leading-tight font-cairo">{banner.title}</span>
                                <div className="w-12 h-1 bg-primary/60 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedBanner && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={closeBanner}
                    >
                        <button
                            onClick={closeBanner}
                            className="absolute top-6 left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
                            dir="ltr"
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(200,164,93,0.15)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedBanner.url}
                                alt={`Experiment Banner ${selectedBanner.id}`}
                                fill
                                className="object-contain bg-black"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
