"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function HeroSection() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image placeholder — replace src with your actual hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1800&q=80')`,
        }}
        role="img"
        aria-label="Hero background"
      />

      {/* Elegant overlay — warm gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b403b]/30 via-[#6b403b]/20 to-[#6b403b]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#6b403b]/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="h-px w-12 bg-[#f7ddd5]/60" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#f7ddd5]/80">
            Portfolio
          </span>
          <div className="h-px w-12 bg-[#f7ddd5]/60" />
        </div>

        {/* Name */}
        <h1
          className={`font-display font-light text-[#f7ddd5] leading-none mb-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "0.06em",
            transitionDelay: "400ms",
          }}
        >
          {t("name")}
        </h1>

        {/* Title */}
        <p
          className={`font-body font-200 text-[#d8a4af] mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            transitionDelay: "600ms",
          }}
        >
          {t("title")}
        </p>

        {/* Summary */}
        <p
          className={`font-body font-300 text-[#f7ddd5]/80 max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(0.875rem, 1.6vw, 1.05rem)",
            transitionDelay: "800ms",
          }}
        >
          {t("summary")}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <button
            onClick={() => handleScroll("experience")}
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 bg-[#f7ddd5] text-[#6b403b] hover:bg-white transition-all duration-300 rounded-full hover:shadow-lg hover:shadow-[#6b403b]/20 hover:scale-105"
          >
            {t("cta")}
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 border border-[#f7ddd5]/60 text-[#f7ddd5] hover:border-[#f7ddd5] hover:bg-[#f7ddd5]/10 transition-all duration-300 rounded-full"
          >
            {t("contact")}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#f7ddd5]/50 animate-pulse" />
      </div>
    </section>
  );
}
