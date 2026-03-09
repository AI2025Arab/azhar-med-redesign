"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "أحمد سليمان محمد العادلي",
        role: "Student / Project Author",
        image: "/images/team/ahmed-al-adly.png",
    },
    {
        name: "أ.د. أحمد القطان",
        role: "Professor of Architecture, Al-Azhar University",
        image: "/images/team/dr-ahmed-el-kattan.png",
    }
];

export default function TeamSection() {
    return (
        <section className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">فريق المشروع</h2>
                    <p className="text-[#888888] font-inter uppercase tracking-widest text-sm">Project Team</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group relative flex flex-col items-center bg-[#1A1A1A] border border-[#1F1F22] p-8 min-w-[320px] hover:border-[#C9A227] transition-all duration-500"
                        >
                            {/* Image Frame */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#1F1F22] group-hover:border-[#0F766E] transition-colors duration-500 mb-6 bg-[#0B0B0C]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-[#F5F5F4] mb-2">{member.name}</h3>
                                <p className="text-xs text-[#C9A227] font-inter tracking-widest font-bold uppercase">{member.role}</p>
                            </div>

                            {/* Subtle Decorative Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#1F1F22] group-hover:border-[#C9A227] transition-colors duration-500 m-2" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#1F1F22] group-hover:border-[#C9A227] transition-colors duration-500 m-2" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
