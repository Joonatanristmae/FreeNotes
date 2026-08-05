import Image from "next/image";
import { encodeAssetPath, cn } from "@/lib/utils";

type PartnerLogoProps = {
  name: string;
  logo: string;
  className?: string;
  showName?: boolean;
  scale?: number;
};

export function PartnerLogo({
  name,
  logo,
  className,
  showName = false,
  scale = 1,
}: PartnerLogoProps) {
  // Request enough pixels for retina * any visual scale, so CSS scale stays sharp
  const requestedPx = Math.ceil(220 * scale * 2);

  return (
    <div
      className={cn(
        "flex h-28 flex-col items-center justify-center overflow-hidden border border-ink/8 bg-white px-4 py-4",
        className,
      )}
    >
      <div className="relative h-16 w-full">
        <Image
          src={encodeAssetPath(logo)}
          alt={`${name} logo`}
          fill
          unoptimized
          className="object-contain object-center"
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
          sizes={`${requestedPx}px`}
        />
      </div>
      {showName ? (
        <p className="mt-3 text-center text-xs text-muted">{name}</p>
      ) : null}
    </div>
  );
}
