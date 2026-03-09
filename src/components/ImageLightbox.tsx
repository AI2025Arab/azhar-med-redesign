"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
    image: { url: string; title: string; id: string } | null;
    onClose: () => void;
}

export function ImageLightbox({ image, onClose }: LightboxProps) {
    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-[#0B0B0C]/95 backdrop-blur-xl"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-50 p-4 bg-[#1F1F22] hover:bg-[#C9A227] hover:text-[#0B0B0C] rounded-full text-[#F5F5F4] transition-all duration-300 shadow-2xl"
                    dir="ltr"
                    aria-label="Close Lightbox"
                >
                    <X size={24} strokeWidth={2.5} />
                </button>

                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-7xl h-[85vh] overflow-hidden rounded-sm shadow-[0_0_120px_rgba(201,162,39,0.08)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={image.url}
                        alt={image.title}
                        fill
                        className="object-contain"
                        quality={100}
                        priority
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 pointer-events-none">
                        <span className="text-[#C9A227] font-inter uppercase tracking-widest text-xs font-bold block mb-2">Architectural Proposal</span>
                        <h3 className="text-[#F5F5F4] text-2xl font-bold">{image.title}</h3>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
