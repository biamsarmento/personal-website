"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const languages = [
  { lang: "Portuguese", level: "Fluent" },
  { lang: "English", level: "Fluent" },
  { lang: "French", level: "Fluent" },
  { lang: "Spanish", level: "Intermediate" },
];

const interests = [
  { label: "Ballet" },
  { label: "Traveling" },
  { label: "Reading" },
  { label: "UI Design" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#130A0D" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blush-300/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="section-label">Get to know me</p>
          <h2 className="section-title mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Photos collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative" style={{ width: "340px", height: "490px" }}>
              {/* Decorative blob behind */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blush-100 rounded-full blur-2xl opacity-60 -z-10" />

              {/* Main photo: ballet */}
              <div className="absolute top-0 left-0 z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/ballet.jpeg"
                  alt="Beatriz dancing ballet"
                  width={300}
                  height={390}
                  className="object-cover object-top"
                  style={{ width: "300px", height: "390px" }}
                />
              </div>

              {/* Secondary photo: london — offset bottom right */}
              <div className="absolute bottom-0 right-0 z-20 rounded-2xl overflow-hidden shadow-xl border-4 border-white" style={{ transform: "translate(30px, 20px)" }}>
                <Image
                  src="/images/london.jpeg"
                  alt="Beatriz in London"
                  width={210}
                  height={240}
                  className="object-cover object-center"
                  style={{ width: "210px", height: "240px" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-7 pb-10 lg:pb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h3 className="font-playfair text-3xl font-bold text-espresso mb-4 italic">
                Who I am
              </h3>
              <p className="font-dm text-mocha-500 leading-relaxed text-base">
                I&apos;m a Web Developer from Brasília, Brazil, with a B.Sc. in Network
                Engineering from the University of Brasília — where I graduated as an
                Honor Student. I&apos;ve had the privilege of studying and working across
                three countries, which shaped both my technical skills and my perspective
                on building great products.
              </p>
              <p className="font-dm text-mocha-500 leading-relaxed text-base mt-3">
                I&apos;m passionate about clean, thoughtful interfaces that feel as good as
                they look. Outside of code, you&apos;ll find me at the barre, lost in a good
                book, or planning my next adventure somewhere in the world.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h4 className="font-dm font-semibold text-espresso text-sm tracking-wide uppercase mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l.lang}
                    className="inline-flex items-center gap-1.5 bg-mocha-100 border border-blush-100 text-mocha-600 font-dm text-sm px-4 py-1.5 rounded-full shadow-sm"
                  >
                    <span>{l.lang}</span>
                    <span className="text-mocha-300 text-xs">· {l.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h4 className="font-dm font-semibold text-espresso text-sm tracking-wide uppercase mb-3">
                Beyond the code
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 bg-mocha-100 border border-sage-100 text-mocha-600 font-dm text-sm px-4 py-2 rounded-full shadow-sm hover:border-sage-300 hover:bg-sage-50 transition-colors duration-200"
                  >
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
