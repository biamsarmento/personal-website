"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Simplify Technology",
    companyUrl: "https://simplifytec.com.br/en/",
    role: "Web Developer",
    period: "Apr 2025 — Present",
    dotClass: "bg-blush-300",
    borderClass: "border-blush-200",
    bgClass: "bg-blush-50/60",
    achievements: [
      "Designed and developed high-performance corporate portals using Liferay and React, ensuring scalability and maintainability.",
      "Implemented responsive, user-focused interfaces, increasing user engagement by 25%.",
      "Led internal workshops on UI/UX best practices, enhancing team collaboration and design consistency.",
      "Collaborated with senior developers to build scalable front-end architectures and improve code quality.",
    ],
  },
  {
    company: "Eldorado Research Institute",
    companyUrl: "https://www.eldorado.org.br/en/",
    role: "Web Developer Intern",
    period: "Nov 2022 — Jul 2023",
    dotClass: "bg-sage-300",
    borderClass: "border-sage-200",
    bgClass: "bg-sage-50/60",
    achievements: [
      "Supported the enhancement of enterprise websites within an Agile Scrum environment.",
      "Contributed to the development and launch of new pages, improving site performance and user experience.",
      "Participated in daily stand-ups and sprint reviews to maintain delivery alignment and team efficiency.",
    ],
  },
  {
    company: "Federal Court of Accounts (TCU)",
    companyUrl: "https://portal.tcu.gov.br/english",
    role: "Tests Intern",
    period: "Sep 2020 — Mar 2021",
    dotClass: "bg-mocha-300",
    borderClass: "border-mocha-200",
    bgClass: "bg-mocha-100/40",
    achievements: [
      "Developed and maintained automated testing frameworks to streamline quality assurance processes and reduce testing time.",
      "Supported continuous improvement of build and deployment pipelines, enhancing delivery speed and reliability.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#130A0D" }}
    >
      <div className="absolute top-20 right-10 w-80 h-80 bg-blush-300/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Where I&apos;ve worked</p>
          <h2 className="section-title mb-4">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush-200 via-sage-200 to-mocha-200 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 md:pl-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm top-6 ${exp.dotClass}`}
                />

                {/* Card — alternates left/right on desktop */}
                <div
                  className={`md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div
                    className={`rounded-3xl border p-6 hover:shadow-md transition-all duration-300 ${exp.bgClass} ${exp.borderClass}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm font-semibold text-espresso hover:text-blush-500 transition-colors flex items-center gap-1.5 group"
                      >
                        {exp.company}
                        <svg
                          className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-xs text-mocha-600 font-dm bg-black/20 px-3 py-1 rounded-full border border-mocha-200">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-mocha-500 font-dm mb-4 italic">{exp.role}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-mocha-500 font-dm leading-relaxed"
                        >
                          <span className="text-blush-300 mt-0.5 flex-shrink-0">◦</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
