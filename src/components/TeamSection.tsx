"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const getInitials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("");

const team = [
    {
        name: "أحمد سليمان محمد العادلي",
        role: "Student / Project Author",
        image: "/images/team/ahmed-al-adly.png",
    },
    {
        name: "أحمد أسامة",
        role: "Student / Project Author",
    },
    {
        name: "أ.د. أحمد القطان",
        role: "Professor of Architecture, Al-Azhar University",
        image: "/images/team/dr-ahmed-el-kattan.png",
    }
];

export default function TeamSection() {
    return (
        <section className="py-[120px] bg-[#080809] border-b border-[#1F1F24] relative overflow-hidden">
            {/* Ambient background light */}
            <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#D4AF37]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">

                <div className="text-center mb-20">
                    <span className="text-[#D4AF37] font-inter text-xs tracking-[0.2em] uppercase font-bold block mb-3">Project Team</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8F9FA] mb-4">فريق العمل الأكاديمي</h2>
                    <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                            className="group relative flex flex-col items-center bg-[#131315]/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl flex-1 min-w-[280px] hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-500"
                        >
                            {/* Image Frame */}
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-[#D4AF37] transition-all duration-500 mb-8 bg-[#080809] flex items-center justify-center shadow-lg">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        loading="lazy"
                                        className="object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                    />
                                ) : (
                                    <span className="text-4xl font-bold text-[#D4AF37] font-plex">
                                        {getInitials(member.name)}
                                    </span>
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="text-center mt-auto">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#F8F9FA] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-[#D4AF37] font-inter tracking-widest font-bold uppercase leading-relaxed">
                                    {member.role}
                                </p>
                            </div>

                            {/* Subtle Decorative Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-[#D4AF37] transition-colors duration-500 m-4 rounded-tr-md" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-[#D4AF37] transition-colors duration-500 m-4 rounded-bl-md" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
