"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero-section";
import ExperimentWarning from "@/components/experiment-warning";
import PhishingSection from "@/components/phishing-section";
import QRCodeSection from "@/components/qr-code-section";
import SocialEngineeringSection from "@/components/social-engineering-section";
import HackersSection from "@/components/hackers-section";
import Footer from "@/components/footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      <HeroSection scrollY={scrollY} />
      <ExperimentWarning />
      <PhishingSection />
      <QRCodeSection />
      <SocialEngineeringSection />
      <HackersSection />
      <Footer />
    </main>
  );
}
