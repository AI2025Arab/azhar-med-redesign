import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-[#F5F5F4]/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/" className="text-xl font-bold tracking-wide text-[#F5F5F4]">
                        كلية الطب
                    </Link>
                    <span className="text-xs text-[#C9A227] tracking-widest font-inter">AL-AZHAR UNIVERSITY</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 text-sm font-semibold tracking-wide text-[#E7E3DB]">
                    <Link href="#analysis" className="hover:text-[#C9A227] transition-colors">التحليل المعماري</Link>
                    <Link href="#swot" className="hover:text-[#C9A227] transition-colors">SWOT</Link>
                    <Link href="#redesign" className="hover:text-[#C9A227] transition-colors">إعادة التصميم</Link>
                    <Link href="#gallery" className="hover:text-[#C9A227] transition-colors">المعرض المعماري</Link>
                </div>

                <button className="md:hidden text-[#F5F5F4] p-2">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}
