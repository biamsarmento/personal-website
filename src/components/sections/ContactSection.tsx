"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function ContactSection() {
  const t = useTranslations("contact");
  const ref = useScrollReveal<HTMLDivElement>();

  const contactItems = [
    {
      label: t("email"),
      value: "biamsarmento@gmail.com",
      href: "mailto:biamsarmento@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M1.5 5.5L9 10L16.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: t("location"),
      value: t("locationValue"),
      href: null,
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6C4.5 9.75 9 16.5 9 16.5C9 16.5 13.5 9.75 13.5 6C13.5 3.515 11.485 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="9" cy="6" r="1.75" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      label: t("linkedin"),
      value: "linkedin.com/in/biamsarmento",
      href: "https://www.linkedin.com/in/beatriz-sarmento/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="1.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M5 7.5V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M8.5 13V10C8.5 8.619 9.619 7.5 11 7.5C12.381 7.5 13.5 8.619 13.5 10V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="5" cy="5.25" r="0.75" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: t("github"),
      value: "github.com/biamsarmento",
      href: "https://github.com/biamsarmento",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5C4.858 1.5 1.5 4.858 1.5 9C1.5 12.313 3.647 15.107 6.648 16.097C7.023 16.166 7.16 15.935 7.16 15.738C7.16 15.559 7.154 15.076 7.15 14.438C5.12 14.889 4.68 13.451 4.68 13.451C4.34 12.587 3.847 12.356 3.847 12.356C3.17 11.894 3.897 11.904 3.897 11.904C4.642 11.957 5.036 12.671 5.036 12.671C5.701 13.817 6.768 13.489 7.174 13.297C7.241 12.814 7.44 12.487 7.658 12.303C6.017 12.117 4.294 11.48 4.294 8.716C4.294 7.894 4.58 7.222 5.052 6.694C4.977 6.507 4.722 5.741 5.122 4.706C5.122 4.706 5.749 4.506 7.14 5.481C7.726 5.318 8.366 5.236 9.001 5.234C9.636 5.236 10.277 5.318 10.864 5.481C12.254 4.506 12.879 4.706 12.879 4.706C13.281 5.741 13.025 6.507 12.951 6.694C13.424 7.222 13.708 7.894 13.708 8.716C13.708 11.487 11.981 12.115 10.336 12.298C10.608 12.526 10.851 12.978 10.851 13.668C10.851 14.658 10.841 15.458 10.841 15.738C10.841 15.937 10.976 16.17 11.357 16.097C14.355 15.104 16.5 12.312 16.5 9C16.5 4.858 13.142 1.5 9 1.5Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: t("whatsapp"),
      value: "+55 61 99879-3939",
      href: `https://wa.me/5561998793939?text=${encodeURIComponent(t("whatsappMessage"))}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5C4.858 1.5 1.5 4.858 1.5 9C1.5 10.42 1.887 11.75 2.561 12.892L1.5 16.5L5.226 15.478C6.323 16.081 7.62 16.5 9 16.5C13.142 16.5 16.5 13.142 16.5 9C16.5 4.858 13.142 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M6.3 5.7C6.45 5.4 6.6 5.4 6.75 5.4C6.87 5.4 6.99 5.4 7.095 5.406C7.2 5.412 7.35 5.37 7.5 5.73C7.65 6.09 8.01 6.99 8.055 7.08C8.1 7.17 8.13 7.275 8.07 7.395C8.01 7.515 7.98 7.59 7.89 7.695C7.8 7.8 7.7 7.929 7.62 8.01C7.53 8.1 7.436 8.199 7.542 8.379C7.647 8.559 8.01 9.153 8.549 9.633C9.242 10.251 9.827 10.44 10.007 10.53C10.187 10.62 10.292 10.605 10.397 10.485C10.502 10.365 10.847 9.96 10.967 9.78C11.087 9.6 11.207 9.63 11.372 9.69C11.537 9.75 12.437 10.194 12.617 10.284C12.797 10.374 12.917 10.419 12.962 10.494C13.007 10.569 13.007 10.923 12.86 11.334C12.712 11.745 12.005 12.135 11.677 12.183C11.383 12.226 11.017 12.243 10.616 12.116C10.372 12.038 10.058 11.934 9.657 11.763C7.994 11.05 6.909 9.383 6.826 9.273C6.743 9.163 6.15 8.38 6.15 7.57C6.15 6.76 6.573 6.362 6.72 6.194" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-[#6b403b] dark:bg-[#120b0e] py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="animate-on-scroll text-center mb-16">
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-[#d8a4af] mb-3">
            {t("subheading")}
          </p>
          <h2
            className="font-display font-light text-[#f7ddd5] leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
          >
            {t("heading")}
          </h2>
          <div className="mt-4 h-px w-16 bg-[#d8a4af]/50 mx-auto" />
        </div>

        <div className="animate-on-scroll delay-100 max-w-2xl mx-auto text-center mb-16">
          <p className="font-body font-500 text-[#f7ddd5]/65 leading-relaxed text-[0.95rem]">
            {t("description")}
          </p>
        </div>

        <div className="animate-on-scroll delay-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {contactItems.map((item, i) => (
            <div key={i} className="group">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#f7ddd5]/15 hover:border-[#d8a4af]/50 hover:bg-[#f7ddd5]/5 transition-all duration-300 group text-center"
                >
                  <div className="text-[#d8a4af] group-hover:text-[#f7ddd5] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.25em] uppercase text-[#f7ddd5]/40 mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-xs text-[#f7ddd5]/70 group-hover:text-[#f7ddd5] transition-colors break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#f7ddd5]/15 text-center">
                  <div className="text-[#d8a4af]">{item.icon}</div>
                  <div>
                    <p className="font-body text-[9px] tracking-[0.25em] uppercase text-[#f7ddd5]/40 mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-xs text-[#f7ddd5]/70">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
