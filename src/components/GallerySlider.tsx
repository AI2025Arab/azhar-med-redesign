"use client"

import React, { useState } from "react";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { SwotAnalysis } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Info } from "lucide-react";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGES = projectData.images;

export default function GallerySlider() {
    const [selectedImage, setSelectedImage] = useState<typeof FIRST_IMAGES[0] | null>(null);

    const openModal = (img: typeof FIRST_IMAGES[0]) => setSelectedImage(img);
    const closeModal = () => setSelectedImage(null);

    return (
        <section className="py-16 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-cairo text-primary">المعالجــــات المـعـماريـة</h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                    استكشف التحديثات المعمارية المقترحة لكل جزء من أجزاء الكلية. اسحب لمقارنة الوضع الحالي (قبل) مع التصميم المولد بالذكاء الاصطناعي (بعد).
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {FIRST_IMAGES.map((img, idx) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 bg-card hover:border-primary/50 transition-colors"
                        onClick={() => openModal(img)}
                    >
                        <div className="relative w-full bg-black flex items-center justify-center">
                            <Image
                                src={img.redesign_url}
                                alt={img.title}
                                width={1600}
                                height={900}
                                loading="lazy"
                                className="w-full h-auto max-w-full object-contain object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold">{img.title}</h3>
                                <div className="flex items-center gap-2 mt-2 text-primary text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                    <ZoomIn size={16} />
                                    <span>عرض التفاصيل وتحليل SWOT</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0" onClick={closeModal} />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl max-h-[90vh] bg-card border border-white/10 rounded-2xl overflow-y-auto"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 left-4 z-50 p-2 bg-black/50 hover:bg-black rounded-full text-white backdrop-blur-md transition-colors"
                                dir="ltr"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 flex-col-reverse lg:flex-row">

                                {/* Content Side */}
                                <div className="p-8 space-y-8 order-2 lg:order-1 border-l border-white/10">
                                    <div>
                                        <h3 className="text-3xl font-bold text-primary mb-4">{selectedImage.title}</h3>
                                        <p className="text-white/80 leading-relaxed">{selectedImage.description}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-xl font-bold border-b border-white/10 pb-2">
                                            <Info className="text-primary" />
                                            <h4>تحليل SWOT المعماري</h4>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-green-950/20 border border-green-900/30 rounded-lg p-4 space-y-2">
                                                <h5 className="font-bold text-green-400">نقاط القوة (Strengths)</h5>
                                                <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                                                    {selectedImage.swot_analysis.strengths.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>

                                            <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-4 space-y-2">
                                                <h5 className="font-bold text-red-400">نقاط الضعف (Weaknesses)</h5>
                                                <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                                                    {selectedImage.swot_analysis.weaknesses.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>

                                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-4 space-y-2">
                                                <h5 className="font-bold text-blue-400">الفرص (Opportunities)</h5>
                                                <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                                                    {selectedImage.swot_analysis.opportunities.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>

                                            <div className="bg-orange-950/20 border border-orange-900/30 rounded-lg p-4 space-y-2">
                                                <h5 className="font-bold text-orange-400">المخاطر (Threats)</h5>
                                                <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                                                    {selectedImage.swot_analysis.threats.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Slider Side */}
                                <div className={`order-1 lg:order-2 bg-black/50 p-6 flex flex-col justify-center items-center min-h-[50vh]`}>
                                    <p className="text-white/50 text-sm mb-4">اسحب يميناً ويساراً للمقارنة</p>
                                    <div className={`w-full max-w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl ${selectedImage.aspect_ratio === 'horizontal' ? 'aspect-video' : 'aspect-[3/4] max-h-[70vh] flex justify-center'}`}>
                                        <ReactBeforeSliderComponent
                                            firstImage={{ imageUrl: selectedImage.redesign_url }}
                                            secondImage={{ imageUrl: selectedImage.original_url }}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-4 text-sm font-bold opacity-50 px-4">
                                        <span>الوضع المقترح (بعد)</span>
                                        <span>الوضع الأصلي (قبل)</span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
