export default function Footer() {
    return (
        <footer className="bg-[#0B0B0C] border-t border-[#1F1F22] py-24 text-center text-[#E7E3DB]">
            <div className="max-w-3xl mx-auto px-8 space-y-8">
                <h3 className="text-2xl font-bold text-[#F5F5F4]">مشروع إعادة صياغة الهوية المعمارية</h3>
                <p className="text-sm font-inter text-[#888888] tracking-widest uppercase">
                    Faculty of Medicine — Al-Azhar University
                </p>

                <div className="pt-8 border-t border-[#1F1F22] flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <div className="text-right">
                        <span className="block text-[#C9A227] mb-1">تنفيذ وتصميم</span>
                        <span className="font-bold">أحمد سليمان محمد العادلي و أحمد أسامة</span>
                    </div>
                    <div className="w-px h-8 bg-[#1F1F22] hidden md:block" />
                    <div className="text-right md:text-left">
                        <span className="block text-[#C9A227] mb-1">إشراف أكاديمي</span>
                        <span className="font-bold">أ.د. أحمد القطان</span>
                    </div>
                </div>

                <div className="pt-12 border-t border-[#1F1F22] text-xs text-[#888888] space-y-4 text-right">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <span className="block text-[#E7E3DB] font-semibold mb-1">LinkedIn</span>
                            <a
                                href="https://linkedin.com/in/ahmed-aladly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-inter text-[#C9A227] hover:underline break-all"
                            >
                                linkedin.com/in/ahmed-aladly
                            </a>
                        </div>
                        <div className="text-right md:text-left">
                            <span className="block text-[#E7E3DB] font-semibold mb-1">Phone</span>
                            <p className="font-inter tracking-widest">01091567598</p>
                        </div>
                    </div>

                    <p className="pt-4 border-t border-[#1F1F22] mt-4 text-[11px] text-[#666666] text-center">
                        © {new Date().getFullYear()} كافة حقوق النشر محفوظة للدراسة الأكاديمية.
                    </p>
                </div>
            </div>
        </footer>
    );
}
