import { clsx } from "clsx";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";

interface WatercolorBlobProps {
  position?: Position;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "watercolor" | "watercolor-soft" | "background-alt";
  className?: string;
  variant?: 1 | 2;
}

const POSITION: Record<Position, string> = {
  "top-right": "-top-20 -right-32",
  "top-left": "-top-20 -left-32",
  "bottom-right": "-bottom-20 -right-32",
  "bottom-left": "-bottom-20 -left-32",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const SIZE = {
  sm: "h-64 w-64",
  md: "h-96 w-96",
  lg: "h-[28rem] w-[28rem]",
  xl: "h-[40rem] w-[40rem]",
};

const COLOR = {
  watercolor: "bg-watercolor",
  "watercolor-soft": "bg-watercolor-soft",
  "background-alt": "bg-background-alt",
};

export function WatercolorBlob({
  position = "top-right",
  size = "lg",
  color = "watercolor-soft",
  className,
  variant = 1,
}: WatercolorBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute rounded-full opacity-50 blur-3xl",
        POSITION[position],
        SIZE[size],
        COLOR[color],
        variant === 1 ? "animate-blob-1" : "animate-blob-2",
        className,
      )}
    />
  );
}
