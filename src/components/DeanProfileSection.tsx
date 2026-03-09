"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DeanProfileSection() {
    return (
        <section className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[800px] mx-auto px-[24px] sm:px-[32px]">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F4] mb-3">
                        الشخصيات الأكاديمية المرتبطة بالمشروع
                    </h2>
                    <p className="text-[#888888] font-inter uppercase tracking-widest text-xs md:text-sm">
                        Academic Leadership
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="group relative flex flex-col items-center bg-[#1A1A1A] border border-[#1F1F22] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 hover:border-[#C9A227] transition-all duration-500"
                >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#1F1F22] group-hover:border-[#0F766E] transition-colors duration-500 mb-6 bg-[#0B0B0C]">
                        <Image
                            src="/images/team/dean-hussein-abo-elghit.png"
                            alt="عميد كلية الطب بجامعة الأزهر"
                            fill
                            loading="lazy"
                            className="object-contain object-center"
                        />
                    </div>

                    <div className="text-center space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F4]">
                            د. حسين أبو الغيط
                        </h3>
                        <p className="text-xs sm:text-sm text-[#C9A227] font-inter tracking-widest font-bold uppercase">
                            عميد كلية الطب — جامعة الأزهر
                        </p>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#1F1F22] group-hover:border-[#C9A227] transition-colors duration-500 m-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#1F1F22] group-hover:border-[#C9A227] transition-colors duration-500 m-2" />
                </motion.div>
            </div>
        </section>
    );
}

