"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectIntro from "@/components/ProjectIntro";
import AnalysisGrid from "@/components/AnalysisGrid";
import SiteDocumentation from "@/components/SiteDocumentation";
import SwotMatrix from "@/components/SwotMatrix";
import ProblemCards from "@/components/ProblemCards";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProposalGallery from "@/components/ProposalGallery";
import DeanProfileSection from "@/components/DeanProfileSection";
import TeamSection from "@/components/TeamSection";
import MarketValueSection from "@/components/MarketValueSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0B0C] text-[#F5F5F4] w-full relative">
      <Navbar />

      <main>
        {/* Section 0: Hero */}
        <HeroSection />

        {/* Section 0.5: Project Intro */}
        <ProjectIntro />

        {/* Section 1: Architectural Analysis */}
        <AnalysisGrid />

        {/* Section 1.5: Field Research & Site Documentation */}
        <SiteDocumentation />

        {/* Section 2: SWOT Matrix */}
        <SwotMatrix />

        {/* Section 3: Identified Problems */}
        <ProblemCards />

        {/* Section 4: AI Redesign Before/After */}
        <BeforeAfterSlider />

        {/* Section 5 & 6: Proposal Image Boards & Gallery with Lightbox */}
        <ProposalGallery />

        {/* Section 7: Academic Leadership */}
        <DeanProfileSection />

        {/* Section 8: Team Profiles */}
        <TeamSection />

        {/* Section 9: Market Value Roadmap */}
        <MarketValueSection />
      </main>

      <Footer />
    </div>
  );
}
