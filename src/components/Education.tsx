"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "University of Brasília (UnB)",
    degree: "B.Sc. in Network Engineering",
    period: "Mar 2018 — Feb 2025",
    highlights: ["Honor Student"],
    topBorderColor: "#C41848",
  },
  {
    school: "Montgomery College",
    degree: "Engineering Exchange Program",
    period: "Aug 2018 — May 2019",
    highlights: ["GPA: 4.0"],
    topBorderColor: "#C4956A",
  },
  {
    school: "Télécom Physique Strasbourg",
    degree: "Computer Engineering — Scholarship Exchange",
    period: "Sep 2023 — Jan 2024",
    highlights: ["Scholarship Program", "France"],
    topBorderColor: "#9A3358",
  },
  {
    school: "TripleTen Bootcamp",
    degree: "Full-Stack Web Development",
    period: "Mar 2024 — Feb 2025",
    highlights: ["React · Node.js · MongoDB"],
    topBorderColor: "#8A7050",
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
      style={{ backgroundColor: "#130A0D" }}
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-blush-300/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage-300/10 rounded-full blur-3xl" />

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
              className="bg-mocha-100 rounded-3xl border border-mocha-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top color bar */}
              <div
                className="h-1.5"
                style={{ backgroundColor: edu.topBorderColor }}
              />

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-dm font-semibold text-espresso text-base leading-snug">
                    {edu.school}
                  </h3>
                  <p className="text-xs text-mocha-400 mt-0.5 font-dm">{edu.period}</p>
                </div>

                <p className="font-playfair italic text-mocha-500 text-base mb-4">
                  {edu.degree}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-blush-50 text-blush-300 border border-blush-100 px-3 py-1 rounded-full font-dm"
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
