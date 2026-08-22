"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  getRegionByPathname,
  regionOptions,
  type RegionOption,
} from "@/data/regions";
import { cn } from "@/lib/utils";

type RegionSelectorProps = {
  className?: string;
  /** Emphasize the selector in the header (country marketing pages). */
  prominent?: boolean;
  /** Called after a region is chosen (e.g. close mobile nav). */
  onNavigate?: () => void;
};

export function RegionSelector({
  className,
  prominent = false,
  onNavigate,
}: RegionSelectorProps) {
  const pathname = usePathname();
  const current = getRegionByPathname(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (target && rootRef.current?.contains(target)) return;
      setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close when the route changes (e.g. back/forward).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function selectRegion() {
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className={cn(
          "inline-flex max-w-full items-center gap-1.5 rounded-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2",
          prominent
            ? "border-2 border-forest bg-forest px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-forest/20 hover:bg-forest-light"
            : "px-2.5 py-1.5 text-sm font-medium text-muted hover:bg-sand/60 hover:text-ink",
          !prominent && open && "bg-sand/60 text-ink",
          prominent && open && "bg-forest-light",
        )}
        aria-label={`Select country or region. Current: ${current.name}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="truncate">{current.name}</span>
        <span
          aria-hidden
          className={cn(
            "text-[0.65rem] transition-transform",
            prominent ? "text-white/80" : "text-muted",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Countries and regions"
          className={cn(
            "absolute right-0 z-50 mt-2 max-h-[min(70vh,22rem)] w-[min(calc(100vw-2rem),16rem)] overflow-y-auto",
            "border border-ink/10 bg-paper py-1 shadow-lg shadow-ink/10",
          )}
        >
          {regionOptions.map((region) => (
            <RegionOptionItem
              key={region.code}
              region={region}
              selected={region.code === current.code}
              onSelect={selectRegion}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function RegionOptionItem({
  region,
  selected,
  onSelect,
}: {
  region: RegionOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li role="option" aria-selected={selected}>
      <Link
        href={region.href}
        className={cn(
          "flex items-center gap-3 px-3.5 py-2.5 text-sm transition-colors",
          selected
            ? "bg-forest/8 font-semibold text-ink"
            : "text-ink hover:bg-sand/70",
        )}
        onClick={onSelect}
      >
        <span aria-hidden className="text-base leading-none">
          {region.flag}
        </span>
        <span>{region.name}</span>
        {selected ? (
          <span className="sr-only">(current)</span>
        ) : null}
      </Link>
    </li>
  );
}
