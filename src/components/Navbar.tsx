"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                setScrollProgress((window.scrollY / totalScroll) * 100);
            }
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "التحليل المعماري", href: "#analysis" },
        { name: "SWOT", href: "#swot" },
        { name: "إعادة التصميم", href: "#redesign" },
        { name: "المعرض المعماري", href: "#gallery" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4">
            <div className={`max-w-7xl mx-auto w-full rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                scrolled 
                    ? "bg-[#080809]/85 backdrop-blur-xl border-[#D4AF37]/20 shadow-2xl py-3 px-6 md:px-10" 
                    : "bg-transparent border-transparent py-4 px-4 md:px-8"
            }`}>
                {/* Scroll Progress Bar */}
                <div 
                    className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#0D9488] via-[#D4AF37] to-[#0D9488] transition-all duration-100" 
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <Link href="/" className="text-lg md:text-xl font-bold tracking-wide text-[#F8F9FA] hover:text-[#D4AF37] transition-colors">
                            كلية الطب
                        </Link>
                        <span className="text-[10px] md:text-xs text-[#D4AF37] tracking-widest font-inter">AL-AZHAR UNIVERSITY</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 lg:gap-12 text-sm font-semibold tracking-wide text-[#E7E3DB]">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href} 
                                className="hover:text-[#D4AF37] transition-all duration-300 relative group py-1"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Interactive Signature Button */}
                        <div className="hidden sm:block text-xs border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1.5 rounded-full font-inter font-bold hover:bg-[#D4AF37] hover:text-[#080809] transition-all duration-300">
                            AZHAR REDESIGN
                        </div>

                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#F8F9FA] hover:text-[#D4AF37] p-2 transition-colors focus:outline-none"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-2 mx-4 bg-[#080809]/95 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl"
                    >
                        <div className="flex flex-col gap-5 text-right">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href} 
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-semibold text-[#E7E3DB] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#1F1F24]/50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="text-center text-xs text-[#D4AF37] pt-2 font-inter">
                                AL-AZHAR UNIVERSITY
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
