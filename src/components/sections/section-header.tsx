import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-2xl text-center" : "",
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
