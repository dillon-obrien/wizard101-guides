/**
 * Original minimal line icons for the seven schools (no game assets).
 * Sized via className; stroke/fill follow currentColor.
 */
export function SchoolIcon({
  school,
  className = "h-5 w-5",
}: {
  school: string;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (school) {
    case "fire":
      return (
        <svg {...common}>
          <path d="M12 3c2.6 3.1 5 5.6 5 9.2A5.2 5.2 0 0 1 12 17.5 5.2 5.2 0 0 1 7 12.2c0-1.5.5-2.9 1.4-4.3.7 1 1.6 1.7 2.7 2 -.2-2.4.2-4.6.9-6.9Z" />
          <path d="M12 21.5v-4" />
        </svg>
      );
    case "ice":
      return (
        <svg {...common}>
          <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
          <path d="M12 3l-2 2m2-2 2 2M12 21l-2-2m2 2 2-2" />
        </svg>
      );
    case "storm":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M13.2 2 5.5 13.2h4.3L7.9 22l8.6-11.6h-4.5L13.2 2Z" />
        </svg>
      );
    case "myth":
      return (
        <svg {...common}>
          <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6S18 18 12 18 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "life":
      return (
        <svg {...common}>
          <path d="M20 4c-9.5 0-15 5.2-15.4 14.6C11 19.4 17.5 16.6 20 4Z" />
          <path d="M4.6 18.6C8 13.5 13 9.5 20 4" />
        </svg>
      );
    case "death":
      return (
        <svg {...common}>
          <path d="M12 3a7 7 0 0 0-7 7c0 2.4 1.2 4.2 3 5.3V18a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 16 18v-2.7c1.8-1.1 3-2.9 3-5.3a7 7 0 0 0-7-7Z" />
          <circle cx="9.3" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="14.7" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "balance":
      return (
        <svg {...common}>
          <path d="M12 4v16M8 20h8M4.5 7h15" />
          <path d="M6.5 7 4 12.2a2.8 2.8 0 0 0 5 0L6.5 7ZM17.5 7 15 12.2a2.8 2.8 0 0 0 5 0L17.5 7Z" />
        </svg>
      );
    default:
      return null;
  }
}
