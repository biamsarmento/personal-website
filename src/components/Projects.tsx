"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "CGEE — Strategic Studies Center",
    url: "https://www.cgee.org.br",
    description:
      "Corporate web portal for Brazil's Center for Strategic Studies and Management, a leading think tank supporting public policy, innovation, and science nationwide.",
    tags: ["React", "Liferay", "CSS", "RESTful APIs"],
    accent: "from-blush-200 to-blush-100",
    tagClass: "bg-blush-100 text-blush-600 border-blush-200",
  },
  {
    name: "SINPOL-DF",
    url: "https://sinpoldf.com.br/web/sinpol",
    description:
      "Web application for the Brasília Civil Police Officers Union, featuring member services, news portal, and institutional information with a modern, accessible interface.",
    tags: ["HTML", "CSS", "JavaScript", "Liferay"],
    accent: "from-sage-200 to-sage-100",
    tagClass: "bg-sage-100 text-sage-600 border-sage-200",
  },
  {
    name: "ASSERJ",
    url: "https://asserj.com.br/pt/",
    description:
      "Professional association website with comprehensive member management, event listings, and institutional information for the Rio de Janeiro judiciary.",
    tags: ["React", "Node.js", "CSS", "Responsive Design"],
    accent: "from-mocha-100 to-blush-100",
    tagClass: "bg-mocha-100 text-mocha-600 border-mocha-200",
  },
  {
    name: "Quotes Newsletter",
    url: "https://quotesnewsletter.com",
    description:
      "Curated newsletter platform delivering handpicked inspirational quotes to subscribers worldwide. Clean, minimal design focused on daily motivation and elegant reading.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Email"],
    accent: "from-sage-100 to-blush-100",
    tagClass: "bg-blush-100 text-blush-500 border-blush-200",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-blush-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Things I&apos;ve built</p>
          <h2 className="section-title mb-4">Featured Projects</h2>
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
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              className="group bg-white rounded-3xl border border-blush-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Accent gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />

              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-playfair font-bold text-xl text-espresso leading-snug">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-blush-200 text-mocha-400 hover:border-blush-400 hover:text-blush-500 hover:bg-blush-50 transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <p className="text-mocha-400 font-dm text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`skill-pill ${project.tagClass}`}>
                      {tag}
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
