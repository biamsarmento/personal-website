"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function AboutSection() {
  const t = useTranslations("about");
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="about" className="bg-white">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                className={`animate-on-scroll delay-${(i + 1) * 100} font-body font-300 text-[#7d5a56] leading-relaxed text-[0.95rem]`}
              >
                {t(key)}
              </p>
            ))}
          </div>

          {/* Decorative stats */}
          <div className="animate-on-scroll delay-400 mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-[#f7ddd5]">
            {[
              { value: "3+", label: "Years\nExperience" },
              { value: "3", label: "Countries\nStudied" },
              { value: "4.0", label: "Exchange\nGPA" },
            ].map(({ value, label }) => (
              <div key={value} className="text-center">
                <p className="font-display text-3xl font-light text-[#9e4f62]">{value}</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#7d5a56] mt-1 whitespace-pre-line leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="animate-on-scroll delay-200">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#d8a4af]/30 rounded-2xl" />
            {/* Main image area */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#f7ddd5]/40"
              style={{ maxHeight: "560px" }}
            >
              {/* 
                PLACEHOLDER: Replace this div with an <Image> component:
                <Image src="/images/about.jpg" alt={t("imageAlt")} fill className="object-cover" />
              */}
              <div className="w-full h-full bg-gradient-to-br from-[#f7ddd5] via-[#ede4e1] to-[#d8a4af]/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#d8a4af]/30 mx-auto mb-4 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="11" r="5" stroke="#6b403b" strokeWidth="1.5" strokeOpacity="0.4" />
                      <path d="M4 28C4 21.373 9.373 16 16 16C22.627 16 28 21.373 28 28" stroke="#6b403b" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[#7d5a56]">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
            {/* Accent dot */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#d8a4af]" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
