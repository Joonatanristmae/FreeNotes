import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light shadow-sm shadow-forest/20",
  secondary:
    "bg-sand text-ink hover:bg-sand-dark border border-ink/10",
  outline:
    "border border-forest/30 text-forest bg-transparent hover:bg-forest/5",
  ghost: "text-forest hover:bg-forest/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const isAppRoute = href.startsWith("/") && !href.includes("#");

    if (isAppRoute) {
      return (
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
