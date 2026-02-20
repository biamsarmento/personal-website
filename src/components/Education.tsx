"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "University of Brasília (UnB)",
    flag: "🇧🇷",
    degree: "B.Sc. in Network Engineering",
    period: "Mar 2018 — Feb 2025",
    highlights: ["Honor Student"],
    topBorderColor: "#EC94B2",
  },
  {
    school: "Montgomery College",
    flag: "🇺🇸",
    degree: "Engineering Exchange Program",
    period: "Aug 2018 — May 2019",
    highlights: ["GPA: 4.0"],
    topBorderColor: "#82BEB2",
  },
  {
    school: "Télécom Physique Strasbourg",
    flag: "🇫🇷",
    degree: "Computer Engineering — Scholarship Exchange",
    period: "Sep 2023 — Jan 2024",
    highlights: ["Scholarship Program", "France"],
    topBorderColor: "#F7B8CD",
  },
  {
    school: "TripleTen Bootcamp",
    flag: "🌐",
    degree: "Full-Stack Web Development",
    period: "Mar 2024 — Feb 2025",
    highlights: ["React · Node.js · MongoDB"],
    topBorderColor: "#B0D9CE",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#F9F0F3" }}
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-blush-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Academic background</p>
          <h2 className="section-title mb-4">Education</h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={item}
              className="bg-white rounded-3xl border border-blush-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top color bar */}
              <div
                className="h-1.5"
                style={{ backgroundColor: edu.topBorderColor }}
              />

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{edu.flag}</span>
                  <div>
                    <h3 className="font-dm font-semibold text-espresso text-base leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-xs text-mocha-400 mt-0.5 font-dm">{edu.period}</p>
                  </div>
                </div>

                <p className="font-playfair italic text-mocha-500 text-base mb-4">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-blush-50 text-blush-500 border border-blush-200 px-3 py-1 rounded-full font-dm"
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
