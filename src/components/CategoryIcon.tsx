import type { CategoryId } from "@/lib/types";

/**
 * Original minimal line icons for guide categories.
 * Sized via className; stroke follows currentColor.
 */
export function CategoryIcon({
  category,
  className = "h-5 w-5",
}: {
  category: CategoryId;
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
  switch (category) {
    case "getting-started": // compass
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "leveling": // folded map
      return (
        <svg {...common}>
          <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" />
          <path d="M9 4v13M15 6.5v13" />
        </svg>
      );
    case "gear": // shield
      return (
        <svg {...common}>
          <path d="M12 3 5 5.5v6c0 4.5 3 7.6 7 9.5 4-1.9 7-5 7-9.5v-6L12 3Z" />
        </svg>
      );
    case "pets": // paw
      return (
        <svg {...common}>
          <circle cx="7" cy="9" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="12" cy="7" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="17" cy="9" r="1.7" fill="currentColor" stroke="none" />
          <path d="M12 11.5c-2.8 0-5.5 2.2-5.5 4.8 0 1.5 1.1 2.7 2.6 2.7 1.1 0 1.9-.5 2.9-.5s1.8.5 2.9.5c1.5 0 2.6-1.2 2.6-2.7 0-2.6-2.7-4.8-5.5-4.8Z" />
        </svg>
      );
    case "gardening": // sprout
      return (
        <svg {...common}>
          <path d="M12 21v-8" />
          <path d="M12 13C12 8.5 9 6 4.5 6 4.5 10.5 7.5 13 12 13ZM12 10c0-3.5 2.5-6 7.5-6 0 4.5-3 7-7.5 7" />
        </svg>
      );
    case "gold": // coins
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6.5" rx="7" ry="3" />
          <path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
          <path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      );
    case "strategy": // crossed swords
      return (
        <svg {...common}>
          <path d="M4 4l11 11M20 4 9 15" />
          <path d="M6.5 15.5 4 20l4.5-2.5M17.5 15.5 20 20l-4.5-2.5" />
        </svg>
      );
    case "pvp": // trophy
      return (
        <svg {...common}>
          <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
          <path d="M8 5H4.5c0 3 1.5 5 3.5 5M16 5h3.5c0 3-1.5 5-3.5 5" />
          <path d="M12 14v4m-3.5 2h7" />
        </svg>
      );
    case "systems": // toolbox / wrench
      return (
        <svg {...common}>
          <path d="M14.5 6.5a4 4 0 0 0-5.6 4.9L3.5 16.8a2 2 0 1 0 2.8 2.8l5.4-5.4a4 4 0 0 0 4.9-5.6l-2.8 2.8-2.1-2.1 2.8-2.8Z" />
        </svg>
      );
    default:
      return null;
  }
}
