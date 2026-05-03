"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const ref = useScrollReveal<HTMLDivElement>();

  const items = t.raw("items") as Array<{
    company: string;
    role: string;
    period: string;
    type: string;
    bullets: string[];
    projects?: Array<{ name: string; url: string }>;
  }>;

  const personalProjects = t.raw("personalProjectsList") as Array<{
    name: string;
    url: string;
    tech: string;
  }>;

  return (
    <SectionWrapper id="experience" className="bg-white">
      <div ref={ref}>
        <div className="animate-on-scroll">
          <SectionHeading
            id="experience"
            heading={t("heading")}
            subheading={t("subheading")}
          />
        </div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <article
              key={i}
              className={`animate-on-scroll delay-${(i + 1) * 100} group`}
              aria-label={`${item.company} — ${item.role}`}
            >
              <div className="bg-[#faf8f7] rounded-2xl p-8 md:p-10 border border-[#f5f0ee] hover:border-[#d8a4af]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d8a4af]/10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-display text-2xl font-medium text-[#6b403b]">
                        {item.company}
                      </h3>
                      <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#9e4f62] bg-[#f7ddd5] rounded-full px-2.5 py-1">
                        {item.type}
                      </span>
                    </div>
                    <p className="font-body font-400 text-[#7d5a56] text-sm tracking-wide">
                      {item.role}
                    </p>
                  </div>
                  <p className="font-body text-[14px] tracking-[0.22em] uppercase text-[#9e4f62] shrink-0 md:text-right">
                    {item.period}
                  </p>
                </div>

                {/* Bullets */}
                <ul className={`space-y-2.5 ${i === 0 ? "mb-8" : ""}`} role="list">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span
                        className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#d8a4af]"
                        aria-hidden="true"
                      />
                      <p className="font-body font-300 text-[#7d5a56] text-[0.9rem] leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Projects — only for first item (Simplify) */}
                {i === 0 && (
                  <div className="border-t border-[#f7ddd5] pt-6">
                    <p className="font-body text-[14px] tracking-[0.22em] uppercase text-[#9e4f62] mb-3">
                      {t("projectsLabel")}
                    </p>
                    {item.projects && item.projects.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {item.projects.map((project) => (
                          <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-xs text-[#6b403b] border border-[#d8a4af]/40 rounded-full px-4 py-2 hover:bg-[#f7ddd5] hover:border-[#d8a4af] transition-all duration-200"
                          >
                            {project.name} →
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="border border-dashed border-[#d8a4af]/40 rounded-xl p-4 text-center">
                        <p className="font-body text-xs text-[#7d5a56] italic">
                          {t("projectsPlaceholder")}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Personal Projects Card */}
          <article className="animate-on-scroll delay-400 group">
            <div className="bg-[#faf8f7] rounded-2xl p-8 md:p-10 border border-[#f5f0ee] hover:border-[#d8a4af]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d8a4af]/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-display text-2xl font-medium text-[#6b403b]">
                      {t("personalProjectsHeading")}
                    </h3>
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#9e4f62] bg-[#f7ddd5] rounded-full px-2.5 py-1">
                      {t("personalProjectsType")}
                    </span>
                  </div>
                  <p className="font-body font-400 text-[#7d5a56] text-sm tracking-wide">
                    {t("personalProjectsSubtitle")}
                  </p>
                </div>
              </div>

              {personalProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalProjects.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-4 rounded-xl border border-[#f7ddd5] hover:border-[#d8a4af]/60 hover:bg-white transition-all duration-200"
                    >
                      <div>
                        <p className="font-body text-sm font-400 text-[#6b403b] group-hover/link:text-[#9e4f62] transition-colors">
                          {project.name}
                        </p>
                        <p className="font-body text-xs text-[#7d5a56] mt-0.5">{project.tech}</p>
                      </div>
                      <span className="text-[#d8a4af] group-hover/link:text-[#9e4f62] transition-colors ml-4">→</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-[#d8a4af]/40 rounded-xl p-4 text-center">
                  <p className="font-body text-xs text-[#7d5a56] italic">
                    {t("projectsPlaceholder")}
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
}
