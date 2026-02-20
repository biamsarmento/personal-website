"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/biamsarmento",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/beatriz-sarmento",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:biamsarmento@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 -left-20 w-80 h-80 bg-blush-100 rounded-full blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-32 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute bottom-16 left-1/3 w-72 h-72 bg-blush-50 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            ✦ Welcome to my corner of the web
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-6xl lg:text-7xl font-bold text-espresso leading-[1.1] mb-3"
          >
            Beatriz <span className="italic text-blush-400">Sarmento</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="section-divider origin-left mb-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-dm text-mocha-500 text-lg font-medium mb-4"
          >
            Web Developer · Brasília, Brazil 🇧🇷
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-dm text-mocha-400 leading-relaxed max-w-md mb-8 text-base"
          >
            Building responsive, high-performance web experiences with React,
            Next.js & TypeScript. Passionate about clean design, great UX, and
            bringing ideas to life — one component at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-9"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="/ResumeNovember2025.pdf"
              download
              className="btn-secondary"
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
              Download Résumé
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-blush-200 text-mocha-400 hover:border-blush-400 hover:text-blush-500 hover:bg-blush-50 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Soft gradient frame */}
            <div className="absolute -inset-3 bg-gradient-to-br from-blush-200 via-sage-100 to-blush-100 rounded-[2.5rem] opacity-70 blur-sm" />

            {/* Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/graduation.JPG"
                alt="Beatriz Sarmento at her graduation"
                width={420}
                height={520}
                className="object-cover object-top"
                style={{ width: "340px", height: "420px" }}
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blush-50/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 border border-blush-100"
            >
              <p className="text-xs text-mocha-400 font-dm">Currently at</p>
              <p className="text-sm font-semibold text-espresso font-dm">
                Simplify Technology ✦
              </p>
            </motion.div>

            {/* Dot grid decoration */}
            <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blush-300 opacity-60"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-mocha-300 font-dm tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-mocha-200 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-mocha-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
