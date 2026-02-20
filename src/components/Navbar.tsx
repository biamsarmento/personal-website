"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-DEFAULT/90 backdrop-blur-md shadow-sm border-b border-blush-100"
            : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "rgba(250, 248, 245, 0.92)" } : {}}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#home"
            className="font-playfair text-2xl italic font-bold text-espresso hover:text-blush-400 transition-colors duration-300"
          >
            bea.
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-dm text-sm text-mocha-600 hover:text-espresso hover:bg-blush-50 px-4 py-2 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <a
            href="mailto:biamsarmento@gmail.com"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6"
          >
            Hire Me ✦
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-blush-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-espresso rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-espresso rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-espresso rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(250, 248, 245, 0.97)", backdropFilter: "blur(12px)" }}
      >
        <ul className="flex flex-col items-center gap-7">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href={link.href}
                onClick={handleNavClick}
                className="font-playfair text-3xl italic text-espresso hover:text-blush-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:biamsarmento@gmail.com"
          onClick={handleNavClick}
          className="mt-10 btn-primary"
        >
          Hire Me ✦
        </a>
      </div>
    </>
  );
}
