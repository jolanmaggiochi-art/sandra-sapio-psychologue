interface IconProps {
  className?: string;
  "aria-hidden"?: boolean;
}

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ListenIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M5 11a7 7 0 0 1 14 0v3" />
      <path d="M19 16a3 3 0 0 1-3 3v-5a3 3 0 0 1 3 3z" />
      <path d="M5 16a3 3 0 0 0 3 3v-5a3 3 0 0 0-3 3z" />
      <path d="M12 19v2" />
    </svg>
  );
}

export function ShieldIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M12 3 4 6v6c0 4.5 3.4 8.6 8 9.5 4.6-.9 8-5 8-9.5V6l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function LeafIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M5 19c0-7 6-13 14-13 0 8-6 14-13 14-1 0-1-.4-1-1z" />
      <path d="M5 19c4-4 8-7 12-9" />
    </svg>
  );
}

export function SunriseIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M3 18h18" />
      <path d="M5 14a7 7 0 0 1 14 0" />
      <path d="M12 5V3" />
      <path d="M5.6 7.6 4.2 6.2" />
      <path d="M18.4 7.6l1.4-1.4" />
    </svg>
  );
}

export function HeartIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-2 4.5-7 9-7 9z" />
    </svg>
  );
}

export function FamilyIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3 19c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M11 19c0-3 2.5-5 5-5s5 2 5 5" />
    </svg>
  );
}

export function BookIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M4 5c2-1 5-1 8 0v15c-3-1-6-1-8 0V5z" />
      <path d="M20 5c-2-1-5-1-8 0v15c3-1 6-1 8 0V5z" />
    </svg>
  );
}

export function CoupleIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="15" cy="8" r="2.5" />
      <path d="M5 19c0-3 2-5 4-5s4 2 4 5" />
      <path d="M11 19c0-3 2-5 4-5s4 2 4 5" />
    </svg>
  );
}

export function PersonIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
    </svg>
  );
}

export function PairIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" />
    </svg>
  );
}

export function GroupIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="6" cy="9" r="2.5" />
      <circle cx="12" cy="7" r="2.5" />
      <circle cx="18" cy="9" r="2.5" />
      <path d="M2 19c0-3 2-5 4-5s4 2 4 5" />
      <path d="M8 20c0-4 2-6 4-6s4 2 4 6" />
      <path d="M14 19c0-3 2-5 4-5s4 2 4 5" />
    </svg>
  );
}

export function ArrowIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MapPinIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function VideoIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  );
}

export function GlobeIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18" />
      <path d="M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}
