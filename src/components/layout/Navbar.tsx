"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "@/lib/ThemeProvider";

const localeLabels: Record<string, string> = {
  en: "EN",
  pt: "PT",
  fr: "FR",
};

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "education", href: "#education" },
    { key: "experience", href: "#experience" },
    { key: "skills", href: "#skills" },
    { key: "contact", href: "#contact" },
  ];

  const handleLocaleChange = (newLocale: string) => {
    window.location.href = `/${newLocale}`;
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f7]/80 dark:bg-[#1a0f13]/90 backdrop-blur-md shadow-sm border-b border-[#f7ddd5]/60 dark:border-[#d8a4af]/15"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`font-display text-xl font-medium tracking-widest transition-colors duration-300 ${scrolled ? "text-[#6b403b] hover:text-[#9e4f62]" : "text-[#f7ddd5] hover:text-[#f7ddd5]/80"}`}
        >
          <img
            src={
              scrolled
                ? theme === "dark"
                  ? "/images/logo_before.png"
                  : "/images/logo_after.png"
                : "/images/logo_before.png"
            }
            alt="Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNavClick(href)}
              className={`font-body text-xs font-400 font-medium tracking-[0.18em] uppercase transition-colors duration-300 relative group ${scrolled ? "text-[#6b403b]/70 hover:text-[#6b403b] dark:text-[#f0dbd5]/70 dark:hover:text-[#f0dbd5]" : "text-[#f7ddd5]/80 hover:text-[#f7ddd5]"}`}
            >
              {t(key as keyof ReturnType<typeof t>)}
              <span
                className={`absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled ? "bg-[#d8a4af]" : "bg-[#f7ddd5]"}`}
              />
            </button>
          ))}
        </div>

        {/* Right: Language Switcher + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`font-body text-xs tracking-[0.14em] uppercase transition-colors flex items-center gap-1.5 border rounded-full px-3 py-1 ${scrolled ? "text-[#6b403b]/70 hover:text-[#6b403b] border-[#d8a4af]/40 hover:border-[#d8a4af] hover:bg-[#f7ddd5]/40 dark:text-[#f0dbd5]/70 dark:hover:text-[#f0dbd5] dark:border-[#d8a4af]/30 dark:hover:border-[#d8a4af] dark:hover:bg-[#d8a4af]/10" : "text-[#f7ddd5]/80 hover:text-[#f7ddd5] border-[#f7ddd5]/40 hover:border-[#f7ddd5] hover:bg-[#f7ddd5]/10"}`}
              aria-label="Switch language"
            >
              {localeLabels[locale]}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 3.5L5 6.5L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white/95 dark:bg-[#2a1820]/95 backdrop-blur-sm border border-[#f7ddd5] dark:border-[#d8a4af]/20 rounded-xl shadow-lg overflow-hidden">
                {Object.entries(localeLabels).map(([loc, label]) => (
                  <button
                    key={loc}
                    onClick={() => handleLocaleChange(loc)}
                    className={`block w-full px-4 py-2 text-xs tracking-[0.14em] uppercase font-body text-left transition-colors hover:bg-[#f7ddd5]/60 dark:hover:bg-[#d8a4af]/10 ${
                      loc === locale
                        ? "text-[#6b403b] dark:text-[#f0dbd5] font-500"
                        : "text-[#6b403b]/60 dark:text-[#f0dbd5]/60"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${scrolled ? "border-[#d8a4af]/40 hover:border-[#d8a4af] hover:bg-[#f7ddd5]/40 text-[#6b403b]/70 hover:text-[#6b403b] dark:border-[#d8a4af]/30 dark:hover:bg-[#d8a4af]/10 dark:text-[#f0dbd5]/70 dark:hover:text-[#f0dbd5]" : "border-[#f7ddd5]/40 hover:border-[#f7ddd5] hover:bg-[#f7ddd5]/10 text-[#f7ddd5]/80 hover:text-[#f7ddd5]"}`}
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 1.5V2.5M7 11.5V12.5M1.5 7H2.5M11.5 7H12.5M3.1 3.1L3.8 3.8M10.2 10.2L10.9 10.9M3.1 10.9L3.8 10.2M10.2 3.8L10.9 3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12.5 9C11.7 11.4 9.5 13 7 13C3.7 13 1 10.3 1 7C1 4.5 2.6 2.3 5 1.5C4.2 3.7 4.9 6.2 6.8 7.8C8.2 9 10.4 9.4 12.5 9Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#6b403b] dark:bg-[#f0dbd5]" : "bg-[#f7ddd5]"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#6b403b] dark:bg-[#f0dbd5]" : "bg-[#f7ddd5]"} ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#6b403b] dark:bg-[#f0dbd5]" : "bg-[#f7ddd5]"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#faf8f7]/95 dark:bg-[#1a0f13]/95 backdrop-blur-sm border-b border-[#f7ddd5] dark:border-[#d8a4af]/15`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNavClick(href)}
              className="text-left font-body text-xs font-700 tracking-[0.18em] uppercase text-[#6b403b]/70 hover:text-[#6b403b] dark:text-[#f0dbd5]/70 dark:hover:text-[#f0dbd5] transition-colors py-1"
            >
              {t(key as keyof ReturnType<typeof t>)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
