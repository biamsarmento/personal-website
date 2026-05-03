import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#6b403b] text-[#f7ddd5]/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl font-light tracking-widest text-[#f7ddd5]/90">
            Beatriz Sarmento
          </p>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="font-body text-xs tracking-[0.16em] uppercase">
              {t("madeWith")}
            </p>
            <p className="font-body text-xs tracking-wide text-[#f7ddd5]/50">
              &copy; {year} {t("rights")}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#f7ddd5]/10 flex justify-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.14em] uppercase text-[#f7ddd5]/50 hover:text-[#d8a4af] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#f7ddd5]/20">·</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.14em] uppercase text-[#f7ddd5]/50 hover:text-[#d8a4af] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#f7ddd5]/20">·</span>
          <a
            href="mailto:biamsarmento@gmail.com"
            className="font-body text-xs tracking-[0.14em] uppercase text-[#f7ddd5]/50 hover:text-[#d8a4af] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
