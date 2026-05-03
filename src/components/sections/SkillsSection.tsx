"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/lib/useScrollReveal";

const skillData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Vite",
    "TailwindCSS",
    "Figma",
    "UI/UX Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "RESTful APIs",
    "Prisma",
    "Vercel",
    "Neon",
  ],
  tools: ["Git", "Docker", "GitHub Actions", "Cypress", "Selenium", "Postman"],
  methodologies: ["Scrum", "Agile Development", "Test Automation"],
  languages: ["Portuguese", "English", "French", "Spanish"],
};

type SkillCategory = keyof typeof skillData;

const categoryColors: Record<
  SkillCategory,
  { bg: string; text: string; border: string }
> = {
  frontend: {
    bg: "bg-[#f7ddd5]/80",
    text: "text-[#6b403b]",
    border: "border-[#d8a4af]/30",
  },
  backend: {
    bg: "bg-[#ede4e1]/70",
    text: "text-[#6b403b]",
    border: "border-[#d8a4af]/25",
  },
  tools: {
    bg: "bg-white",
    text: "text-[#6b403b]",
    border: "border-[#d8a4af]/40",
  },
  methodologies: {
    bg: "bg-[#d8a4af]/15",
    text: "text-[#6b403b]",
    border: "border-[#d8a4af]/30",
  },
  languages: {
    bg: "bg-[#6b403b]/8",
    text: "text-[#6b403b]",
    border: "border-[#6b403b]/20",
  },
};

function SkillTag({
  label,
  category,
}: {
  label: string;
  category: SkillCategory;
}) {
  const colors = categoryColors[category];
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full font-body font-400 text-[0.78rem] tracking-wide border transition-all duration-200 hover:scale-105 hover:shadow-sm cursor-default ${colors.bg} ${colors.text} ${colors.border}`}
    >
      {label}
    </span>
  );
}

export function SkillsSection() {
  const t = useTranslations("skills");
  const catT = useTranslations("skills.categories");
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="skills" className="bg-[#faf8f7]">
      <div ref={ref}>
        <div className="animate-on-scroll">
          <SectionHeading
            id="skills"
            heading={t("heading")}
            subheading={t("subheading")}
          />
        </div>

        <div className="space-y-10">
          {(Object.keys(skillData) as SkillCategory[]).map((category, i) => (
            <div
              key={category}
              className={`animate-on-scroll delay-${(i + 1) * 100}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-body text-[14px] tracking-[0.25em] uppercase text-[#9e4f62] shrink-0">
                  {catT(category)}
                </h3>
                <div className="h-px flex-1 bg-[#f7ddd5]" />
              </div>
              <div
                className="flex flex-wrap gap-2.5"
                role="list"
                aria-label={catT(category)}
              >
                {skillData[category].map((skill) => (
                  <div key={skill} role="listitem">
                    <SkillTag label={skill} category={category} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
