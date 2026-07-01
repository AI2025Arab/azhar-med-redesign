"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section 
            ref={targetRef} 
            className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#080809]"
        >
            {/* Background Image with Parallax scaling */}
            <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/redesign/24_after.png"
                    alt="Faculty of Medicine Hero"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Dark Architectural Luxury Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080809]/30 via-[#080809]/75 to-[#080809]" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-[#080809]/80" />

            {/* Ambient slow-moving colored glows for luxury feel */}
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#0D9488]/5 blur-[150px] rounded-full animate-pulse-slow" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center justify-between h-[85vh] mt-24">
                {/* Spacer */}
                <div />

                {/* Main Heading Content */}
                <motion.div
                    style={{ y: yText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8 max-w-4xl text-center"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8F9FA] leading-tight tracking-tight">
                        إعادة صياغة الهوية المعمارية<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F8F9FA] to-[#0D9488]">
                            لكلية الطب — جامعة الأزهر
                        </span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-32 h-[3px] bg-gradient-to-r from-[#0D9488] via-[#D4AF37] to-[#0D9488] mx-auto rounded-full origin-center"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-2xl text-[#E7E3DB]/90 leading-relaxed max-w-3xl mx-auto font-plex"
                    >
                        دراسة تحليلية مع إعادة تصميم معماري باستخدام الذكاء الاصطناعي.
                    </motion.p>
                </motion.div>

                {/* Floating Architectural metadata cards at the bottom */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl bg-[#131315]/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl"
                >
                    <div className="text-center sm:text-right border-b sm:border-b-0 sm:border-l border-white/5 pb-4 sm:pb-0 sm:pl-4">
                        <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block mb-1">المنهجية</span>
                        <span className="text-sm md:text-base font-bold text-[#F8F9FA]">ذكاء اصطناعي توليدي (Generative AI)</span>
                    </div>
                    <div className="text-center sm:text-right border-b sm:border-b-0 sm:border-l border-white/5 py-4 sm:py-0 sm:pl-4">
                        <span className="text-[10px] text-[#0D9488] uppercase tracking-widest block mb-1">الموقع</span>
                        <span className="text-sm md:text-base font-bold text-[#F8F9FA]">الحرم الجامعي، القاهرة</span>
                    </div>
                    <div className="text-center sm:text-right pt-4 sm:pt-0">
                        <span className="text-[10px] text-[#E7E3DB]/60 uppercase tracking-widest block mb-1">النمط المعماري</span>
                        <span className="text-sm md:text-base font-bold text-[#F8F9FA]">عمارة حداثية بلمسات تراثية إسلامية</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[9px] tracking-widest text-[#888888] font-inter uppercase">Scroll to Explore</span>
                <div className="w-[2px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
