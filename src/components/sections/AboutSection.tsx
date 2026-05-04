"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function AboutSection() {
  const t = useTranslations("about");
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-[#1a0f13]">
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Text */}
        <div>
          <div className="animate-on-scroll">
            <SectionHeading
              id="about"
              heading={t("heading")}
              subheading={t("subheading")}
            />
          </div>

          <div className="space-y-5">
            {(["p1", "p2", "p3"] as const).map((key, i) => (
              <p
                key={key}
                className={`animate-on-scroll delay-${(i + 1) * 100} font-body font-300 text-[#7d5a56] dark:text-[#c9a0ac] leading-relaxed text-[0.95rem]`}
              >
                {t(key)}
              </p>
            ))}
          </div>

          {/* Decorative stats */}
          <div className="animate-on-scroll delay-400 mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-[#f7ddd5] dark:border-[#d8a4af]/20">
            {(t.raw("stats") as Array<{ value: string; label: string }>).map(({ value, label }) => (
              <div key={value} className="text-center">
                <p className="font-display text-3xl font-light text-[#9e4f62] dark:text-[#e8b4be]">
                  {value}
                </p>
                <p className="font-body text-[14px] tracking-[0.15em] uppercase text-[#7d5a56] dark:text-[#c9a0ac] mt-1 whitespace-pre-line leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="animate-on-scroll delay-200">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#d8a4af]/30 dark:border-[#d8a4af]/20 rounded-2xl" />
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#f7ddd5]/40 dark:bg-[#2a1820]"
              style={{ maxHeight: "560px" }}
            >
              <img
                src="/images/about-me.jpeg"
                alt="Beatriz Sarmento"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#d8a4af]" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
