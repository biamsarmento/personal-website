"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/lib/useScrollReveal";

const locationIcons: Record<number, string> = {
  0: "BR",
  1: "US",
  2: "FR",
  3: "WW",
};

export function EducationSection() {
  const t = useTranslations("education");
  const ref = useScrollReveal<HTMLDivElement>();

  const items = t.raw("items") as Array<{
    institution: string;
    degree: string;
    period: string;
    note: string;
    location: string;
  }>;

  return (
    <SectionWrapper id="education" className="bg-[#faf8f7]">
      <div ref={ref}>
        <div className="animate-on-scroll">
          <SectionHeading
            id="education"
            heading={t("heading")}
            subheading={t("subheading")}
          />
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-[#d8a4af]/25" />

          <div className="space-y-10 md:space-y-0">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`animate-on-scroll delay-${(i + 1) * 100} relative md:grid md:grid-cols-2 md:gap-16 md:mb-10`}
                >
                  {/* Left content or spacer */}
                  <div className={`${isLeft ? "md:text-right" : "md:order-2"} md:pr-12 md:pl-0`}>
                    {isLeft && (
                      <EducationCard item={item} flagCode={locationIcons[i]} />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-[#d8a4af] border-2 border-white shadow-sm z-10" />

                  {/* Right content or spacer */}
                  <div className={`${!isLeft ? "md:text-left" : "md:order-2"} md:pl-12 md:pr-0`}>
                    {!isLeft && (
                      <EducationCard item={item} flagCode={locationIcons[i]} />
                    )}
                  </div>

                  {/* Mobile layout — always full width */}
                  <div className="md:hidden">
                    <EducationCard item={item} flagCode={locationIcons[i]} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function EducationCard({
  item,
}: {
  item: { institution: string; degree: string; period: string; note: string; location: string };
  flagCode: string;
}) {
  return (
    <div className="group bg-[var(--color-blush)] rounded-2xl p-7 border border-[#f7ddd5] hover:border-[#d8a4af]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#d8a4af]/10 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#6b403b] mb-1.5">
            {item.period}
          </p>
          <h3 className="font-display text-xl font-medium text-[#6b403b] leading-snug">
            {item.institution}
          </h3>
        </div>
        <span className="font-body text-[10px] tracking-widest text-[#6b403b]/40 bg-[#f7ddd5]/60 rounded-full px-2.5 py-1 shrink-0">
          {item.location.split(",")[1]?.trim() || item.location}
        </span>
      </div>
      <p className="font-body font-400 text-[#6b403b]/70 text-sm mb-3">{item.degree}</p>
      <p className="font-body font-300 text-[#6b403b]/50 text-xs italic">{item.note}</p>
    </div>
  );
}
