interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-6 lg:px-8 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  id,
  heading,
  subheading,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subheading && (
        <p
          className={`font-body text-[14px] tracking-[0.3em] uppercase mb-3 ${
            light
              ? "text-[#f7ddd5]/60"
              : "text-[#9e4f62] dark:text-[#e8b4be]"
          }`}
        >
          {subheading}
        </p>
      )}
      <h2
        id={`${id}-heading`}
        className={`font-display font-light leading-tight ${
          light ? "text-[#f7ddd5]" : "text-[#6b403b] dark:text-[#f0dbd5]"
        }`}
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "0.02em",
        }}
      >
        {heading}
      </h2>
      <div
        className={`mt-4 h-px w-16 ${light ? "bg-[#f7ddd5]/30" : "bg-[#d8a4af]"} ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
