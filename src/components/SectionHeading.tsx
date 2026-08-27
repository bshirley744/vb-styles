export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow text-accent">{eyebrow}</p>}
      <h2 className="mt-4 font-display text-3xl leading-[1.15] font-light text-balance sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted">{intro}</p>
      )}
    </div>
  );
}
