"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Front-End",
    emoji: "✦",
    bgClass: "bg-blush-50 border-blush-200",
    labelClass: "text-blush-500",
    pillClass: "bg-blush-100 text-blush-600 border-blush-200",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React", "Next.js", "Angular", "TailwindCSS",
      "Vite", "Figma", "UI/UX Design",
    ],
  },
  {
    title: "Back-End",
    emoji: "⬡",
    bgClass: "bg-sage-50 border-sage-200",
    labelClass: "text-sage-600",
    pillClass: "bg-sage-100 text-sage-600 border-sage-200",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"],
  },
  {
    title: "Tools & DevOps",
    emoji: "◈",
    bgClass: "bg-mocha-100 border-mocha-200",
    labelClass: "text-mocha-600",
    pillClass: "bg-white text-mocha-600 border-mocha-200",
    skills: ["Git", "Docker", "GitHub Actions", "Cypress", "Selenium", "Postman"],
  },
  {
    title: "Methodologies",
    emoji: "◎",
    bgClass: "bg-blush-50 border-blush-100",
    labelClass: "text-blush-400",
    pillClass: "bg-white text-blush-500 border-blush-200",
    skills: ["Scrum", "Agile Development", "Test Automation"],
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-sage-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush-50 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title mb-4">My Skills</h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className={`rounded-3xl border p-7 transition-shadow duration-300 hover:shadow-md ${cat.bgClass}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xl ${cat.labelClass}`}>{cat.emoji}</span>
                <h3 className={`font-dm font-semibold text-lg ${cat.labelClass}`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`skill-pill ${cat.pillClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
