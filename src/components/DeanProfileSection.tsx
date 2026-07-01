"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeanProfileSection() {
    return (
        <section className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-[#D4AF37]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[800px] mx-auto px-[24px] sm:px-[32px] relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">Academic Leadership</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#F8F9FA] mb-4">
                        الشخصيات الأكاديمية المرتبطة بالمشروع
                    </h2>
                    <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="group relative flex flex-col items-center bg-[#131315]/40 backdrop-blur-xl border border-white/5 px-6 py-10 sm:px-12 sm:py-12 md:px-16 md:py-14 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-500 rounded-2xl"
                >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-[#D4AF37] transition-all duration-500 mb-8 bg-[#080809]">
                        <Image
                            src="/images/team/dean-hussein-abo-elghit.png"
                            alt="عميد كلية الطب بجامعة الأزهر"
                            fill
                            loading="lazy"
                            className="object-contain object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    <div className="text-center space-y-2">
                        <h3 className="text-xl sm:text-3xl font-bold text-[#F8F9FA] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                            د. حسين أبو الغيط
                        </h3>
                        <p className="text-xs sm:text-sm text-[#D4AF37] font-inter tracking-widest font-bold uppercase">
                            عميد كلية الطب — جامعة الأزهر
                        </p>
                    </div>

                    {/* Corner decorative borders */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-[#D4AF37] transition-colors duration-500 m-4 rounded-tr-md" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-[#D4AF37] transition-colors duration-500 m-4 rounded-bl-md" />
                </motion.div>
            </div>
        </section>
    );
}

