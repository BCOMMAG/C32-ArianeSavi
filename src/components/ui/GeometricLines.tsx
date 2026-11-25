"use client";

interface GeometricLinesProps {
  variant?:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact"
    | "links";
  forceDark?: boolean;
  className?: string;
}

export function GeometricLines({
  variant = "pillars",
  forceDark = false,
  className = "",
}: GeometricLinesProps) {
  const strokeTone = forceDark
    ? "text-[#C8AE88]/[0.12]"
    : "text-[#420D21]/[0.06] dark:text-[#C8AE88]/[0.09]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${strokeTone} ${className}`}
    >
      {variant === "pillars" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 460"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="24%" y1="0" x2="24%" y2="460" stroke="currentColor" strokeWidth="0.7" />
          <line x1="50%" y1="0" x2="50%" y2="460" stroke="currentColor" strokeWidth="0.7" />
          <line x1="76%" y1="0" x2="76%" y2="460" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="50%" cy="50%" r="170" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 7" />
        </svg>
      )}

      {variant === "about" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 860"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect x="80" y="90" width="420" height="620" stroke="currentColor" strokeWidth="0.65" />
          <line x1="180" y1="0" x2="180" y2="860" stroke="currentColor" strokeWidth="0.65" />
          <line x1="0" y1="680" x2="1440" y2="680" stroke="currentColor" strokeWidth="0.55" strokeDasharray="4 6" />
          <circle cx="1220" cy="210" r="240" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      )}

      {variant === "areas" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="12%" y1="0" x2="12%" y2="900" stroke="currentColor" strokeWidth="0.65" />
          <line x1="88%" y1="0" x2="88%" y2="900" stroke="currentColor" strokeWidth="0.65" />
          <path d="M0 160 L1440 160 M0 740 L1440 740" stroke="currentColor" strokeWidth="0.55" strokeDasharray="2 8" />
          <polygon points="720,80 960,450 720,820 480,450" stroke="currentColor" strokeWidth="0.55" />
        </svg>
      )}

      {variant === "methodology" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="380" x2="1440" y2="380" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 6" />
          <line x1="25%" y1="40" x2="25%" y2="720" stroke="currentColor" strokeWidth="0.6" />
          <line x1="50%" y1="40" x2="50%" y2="720" stroke="currentColor" strokeWidth="0.6" />
          <line x1="75%" y1="40" x2="75%" y2="720" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      )}

      {variant === "reviews" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 680"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="220" cy="340" r="210" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="1220" cy="340" r="210" stroke="currentColor" strokeWidth="0.6" />
          <line x1="720" y1="40" x2="720" y2="640" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 6" />
        </svg>
      )}

      {variant === "educational" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 820"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="33.3%" y1="0" x2="33.3%" y2="820" stroke="currentColor" strokeWidth="0.6" />
          <line x1="66.6%" y1="0" x2="66.6%" y2="820" stroke="currentColor" strokeWidth="0.6" />
          <rect x="64" y="64" width="1312" height="692" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )}

      {variant === "faq" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="42%" y1="0" x2="42%" y2="760" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="280" cy="320" r="190" stroke="currentColor" strokeWidth="0.55" strokeDasharray="3 7" />
          <line x1="42%" y1="220" x2="1380" y2="220" stroke="currentColor" strokeWidth="0.5" />
          <line x1="42%" y1="540" x2="1380" y2="540" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )}

      {variant === "contact" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 780"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="120" x2="1440" y2="120" stroke="currentColor" strokeWidth="0.6" />
          <line x1="560" y1="0" x2="560" y2="780" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="1180" cy="560" r="240" stroke="currentColor" strokeWidth="0.55" />
        </svg>
      )}

      {variant === "links" && (
        <svg
          className="w-full h-full"
          viewBox="0 0 800 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="50%" y1="0" x2="50%" y2="900" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="400" cy="450" r="290" stroke="currentColor" strokeWidth="0.55" strokeDasharray="3 7" />
          <rect x="48" y="48" width="704" height="804" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )}
    </div>
  );
}
