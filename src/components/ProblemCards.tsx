"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/data/projectData";

export default function ProblemCards() {
    // Extract problems from the weaknesses in all images
    const problems = projectData.images.map((item, idx) => ({
        title: item.title,
        original_url: item.original_url,
        issue: item.swot_analysis.weaknesses[0] || "مشاكل في التصميم الأصلي",
        detail: item.swot_analysis.weaknesses[1] || "",
    }));

    return (
        <section id="problems" className="py-[96px] bg-[#0B0B0C] border-b border-[#1F1F22]">
            <div className="max-w-[1280px] mx-auto px-[32px]">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F4] mb-4">التحديات المعمارية</h2>
                        <p className="text-[#888888] font-inter uppercase tracking-widest text-sm">Problem Identification</p>
                    </div>
                    <div className="max-w-xl text-[#E7E3DB] leading-relaxed">
                        <p>
                            توثيق معماري دقيق للمشاكل التي واجهت التصميم الأصلي من حيث غياب الهوية، العيوب الوظيفية، والتراجع الجمالي، والتي شكلت الدافع الرئيسي لعملية إعادة التصميم.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((prob, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-[#1A1A1A] border border-[#1F1F22] overflow-hidden hover:border-[#0F766E] transition-all duration-500"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <Image
                                    src={prob.original_url}
                                    alt={prob.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] to-transparent" />
                            </div>

                            <div className="absolute bottom-0 inset-x-0 p-6">
                                <span className="block text-xs font-inter text-[#0F766E] tracking-widest font-bold uppercase mb-2">IDENTIFIED ISSUE {idx + 1}</span>
                                <h4 className="text-[#F5F5F4] font-bold text-lg mb-2">{prob.issue}</h4>
                                {prob.detail && <p className="text-sm text-[#888888]">{prob.detail}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
