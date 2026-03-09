"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                {/* We use the final integrated proposal as the hero backdrop */}
                <Image
                    src="/images/redesign/24_after.png"
                    alt="Faculty of Medicine Hero"
                    fill
                    priority
                    className="object-cover scale-105"
                />
            </div>

            {/* Dark Architectural Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-[#0B0B0C]/80 to-[#0B0B0C]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center text-center mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F4] leading-tight tracking-tight">
                        إعادة صياغة الهوية المعمارية<br />
                        <span className="text-[#C9A227]">لكلية الطب — جامعة الأزهر</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-[#0F766E] mx-auto rounded-full"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-2xl text-[#E7E3DB] font-plex leading-relaxed max-w-3xl mx-auto"
                    >
                        دراسة تحليلية مع إعادة تصميم معماري باستخدام الذكاء الاصطناعي.
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-xs tracking-widest text-[#888888] font-inter uppercase">Scroll to Explore</span>
                <div className="w-px h-16 bg-gradient-to-b from-[#C9A227] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
