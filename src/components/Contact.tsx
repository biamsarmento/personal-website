"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#1A0D14" }}
    >
      {/* Blobs on dark bg */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blush-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blush-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-blush-300/70 text-xs font-dm font-semibold tracking-[0.2em] uppercase mb-4">
            Let&apos;s connect
          </p>

          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Let&apos;s build something{" "}
            <span className="italic text-blush-300">beautiful</span> together
          </h2>

          <p
            className="font-dm leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#C4A8A0" }}
          >
            I&apos;m always open to new opportunities, collaborations, and
            exciting projects. Drop me a message — I&apos;d love to hear from
            you!
          </p>

          {/* Email CTA */}
          <a
            href="mailto:biamsarmento@gmail.com"
            className="inline-flex items-center gap-3 font-dm font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 mb-10 text-white"
            style={{ backgroundColor: "#C41848" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#A01238")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#C41848")
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            biamsarmento@gmail.com
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs font-dm" style={{ color: "#8A6878" }}>
              or find me on
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-14">
            <a
              href="https://github.com/biamsarmento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-dm text-sm px-5 py-2.5 rounded-full border transition-all duration-300 hover:text-white hover:bg-white/5"
              style={{ color: "#C4A8A0", borderColor: "rgba(196,24,72,0.15)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/beatriz-sarmento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-dm text-sm px-5 py-2.5 rounded-full border transition-all duration-300 hover:text-white hover:bg-white/5"
              style={{ color: "#C4A8A0", borderColor: "rgba(196,24,72,0.15)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="/ResumeNovember2025.pdf"
              download
              className="flex items-center gap-2 font-dm text-sm px-5 py-2.5 rounded-full border transition-all duration-300 hover:text-white hover:bg-white/5"
              style={{ color: "#C4A8A0", borderColor: "rgba(196,24,72,0.15)" }}
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Résumé
            </a>
          </div>

          {/* Footer note */}
          <div
            className="pt-8 border-t text-xs font-dm"
            style={{ borderColor: "rgba(196,24,72,0.1)", color: "#6A4858" }}
          >
            Built with Next.js & TailwindCSS &nbsp;·&nbsp; Designed with ♡ by
            Beatriz Sarmento
          </div>
        </motion.div>
      </div>
    </section>
  );
}
