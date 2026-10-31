"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import type { AdvertisingPrice } from "@/data/types";
import { formatPrice } from "@/data/countries/_shared";
import { cn, encodeAssetPath } from "@/lib/utils";

function formatPriceAmount(price: number): string {
  if (Number.isInteger(price)) return `${price}€`;
  return `${price.toFixed(1).replace(".", ",")}€`;
}

function formatPriceSuffix(suffix: string): string {
  return suffix
    .replace(/in 5000/g, "in\u00A05000")
    .replace(/5000 notebooks/g, "5000\u00A0notebooks");
}

function renderInlinePriceSuffix(suffix: string) {
  return (
    <span className="text-xs font-normal text-forest/75 sm:text-base">
      {" "}
      {formatPriceSuffix(suffix)}
    </span>
  );
}

/** Preferred title indent when the card is wide enough. */
const PREFERRED_INDENT_PX = 40;
/** Minimum width reserved for title/price before touching image size. */
const MIN_TEXT_PX = 132;
const GAP_PX = 12;
/**
 * Keep images near the working "Inside back cover" size.
 * Only go below this in extremely narrow single-column cards.
 */
const IMAGE_FLOOR_PX = 168;

type AdvertisingPriceCardProps = {
  item: AdvertisingPrice;
  sizePrefix?: string;
  moreInfoAria?: string;
};

export function AdvertisingPriceCard({
  item,
  sizePrefix = "Size:",
  moreInfoAria = "More info about",
}: AdvertisingPriceCardProps) {
  const imageOnLeft = item.imagePosition === "left";
  const imageRotation = item.imageRotation ?? (imageOnLeft ? 0 : 14);
  const imageAlignTop = item.imageAlignTop ?? false;
  const showDescription = Boolean(item.description?.trim());
  const compactPriceLayout = [
    "tagakaas",
    "tagakaane-sisekylg",
    "valemileht",
  ].includes(item.id);
  const isFrontCover = item.id === "esikaas";
  const isBackCover = item.id === "tagakaas";
  const largeImage = isFrontCover || isBackCover;
  const enlargedLeftImage = item.id === "tagakaane-sisekylg";
  const alignImageRight = item.id === "valemileht";
  const raisedPriceLayout = item.id === "tavaleht";
  const infoText = item.size ?? item.description;
  // Tune front/back cover image sizes independently.
  const coverScale = isFrontCover ? 1.1 : isBackCover ? 0.95 : null;

  // Match the comfortable left-image cards (~45% of content width).
  const preferredImagePx = largeImage
    ? 220
    : enlargedLeftImage
      ? 208
      : alignImageRight
        ? 200
        : 196;

  const cardRef = useRef<HTMLElement>(null);
  const [indentPx, setIndentPx] = useState(imageOnLeft ? 0 : PREFERRED_INDENT_PX);
  const [imagePx, setImagePx] = useState(preferredImagePx);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const update = () => {
      const styles = getComputedStyle(card);
      const padX =
        (parseFloat(styles.paddingLeft) || 0) +
        (parseFloat(styles.paddingRight) || 0);
      const available = Math.max(0, card.clientWidth - padX - GAP_PX);

      // Stable image size like "Inside back cover": ~45% of card, capped by preference.
      let imageWidth = Math.min(
        preferredImagePx,
        Math.round(available * 0.45),
      );
      imageWidth = Math.max(imageWidth, Math.min(IMAGE_FLOOR_PX, available));

      // 1) Spend leftover squeeze on indent first (right-image cards).
      let indent = imageOnLeft ? 0 : PREFERRED_INDENT_PX;
      const textRoom = available - imageWidth;
      if (textRoom - indent < MIN_TEXT_PX) {
        indent = Math.max(0, textRoom - MIN_TEXT_PX);
      }

      // 2) Only if text would still be unusable, nudge image down — never tiny.
      if (available - imageWidth - indent < MIN_TEXT_PX * 0.7) {
        imageWidth = Math.max(
          IMAGE_FLOOR_PX,
          available - indent - Math.floor(MIN_TEXT_PX * 0.7),
        );
      }

      setIndentPx(indent);
      setImagePx(imageWidth);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(card);
    return () => observer.disconnect();
  }, [imageOnLeft, preferredImagePx]);

  const imageBlock = item.image ? (
    <div
      className="relative shrink-0 self-stretch overflow-hidden"
      style={{
        width: imagePx,
        marginTop: "-1.25rem",
        marginBottom: "-1.25rem",
        marginRight: imageOnLeft ? undefined : "-1.25rem",
      }}
    >
      <Image
        src={encodeAssetPath(item.image)}
        alt=""
        width={640}
        height={480}
        unoptimized
        className={cn(
          "h-full w-full max-h-full object-contain",
          imageOnLeft
            ? "object-left object-center"
            : imageAlignTop
              ? "object-right object-top"
              : "object-right object-center",
        )}
        style={
          imageRotation || coverScale || alignImageRight || enlargedLeftImage
            ? {
                ...(imageOnLeft
                  ? { transformOrigin: "left center" }
                  : { transformOrigin: "right center" }),
                transform: [
                  imageRotation ? `rotate(${imageRotation}deg)` : null,
                  coverScale ? `scale(${coverScale})` : null,
                  alignImageRight ? "scale(1.1)" : null,
                  enlargedLeftImage ? "translateY(-0.5rem) scale(1.05)" : null,
                ]
                  .filter(Boolean)
                  .join(" "),
              }
            : undefined
        }
        sizes="(max-width: 1024px) 80vw, 280px"
      />
    </div>
  ) : null;

  return (
    <article
      ref={cardRef}
      className={cn(
        "relative flex h-52 flex-col overflow-hidden border border-ink/8 bg-[#EFEEEB] shadow-sm sm:h-60",
        imageOnLeft ? "py-5 pr-5 pl-0" : "p-5",
      )}
    >
      {infoText ? (
        <div className="group/info absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/30 text-xs font-medium text-ink/45 transition-colors hover:border-ink/50 hover:bg-ink/5 hover:text-ink/65"
            aria-label={`${moreInfoAria} ${item.name}`}
          >
            i
          </button>
          <div
            role="tooltip"
            className="pointer-events-none absolute right-0 top-full z-30 mt-2 w-max max-w-[14rem] border border-ink/15 bg-white px-3 py-2 text-xs leading-snug text-ink opacity-0 shadow-md transition-opacity group-hover/info:opacity-100 group-focus-within/info:opacity-100"
          >
            {infoText.startsWith(sizePrefix) ||
            infoText.toLowerCase().startsWith("size:")
              ? infoText
              : `${sizePrefix} ${infoText}`}
          </div>
        </div>
      ) : null}

      <div className="flex h-full min-h-0" style={{ gap: GAP_PX }}>
        {imageOnLeft ? imageBlock : null}

        <div
          className="flex min-w-0 flex-1 flex-col"
          style={{ paddingLeft: indentPx }}
        >
          <h3 className="mt-1 font-display text-[1.4rem] leading-tight tracking-tight text-ink capitalize sm:mt-1.5 sm:text-[1.55rem]">
            {item.name}
          </h3>

          {showDescription ? (
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed text-muted sm:mt-3",
                !raisedPriceLayout && "flex-1",
              )}
            >
              {item.description}
            </p>
          ) : compactPriceLayout ? null : (
            <div className="flex-1" />
          )}

          <div
            className={cn(
              showDescription
                ? raisedPriceLayout
                  ? "mt-2 sm:mt-3"
                  : "mt-4 sm:mt-5"
                : compactPriceLayout
                  ? "mt-3 sm:mt-4"
                  : "mt-auto",
            )}
          >
            {item.price === null ? (
              <p className="font-display text-xl tracking-tight text-forest sm:text-2xl">
                On request
              </p>
            ) : (
              <p
                className={cn(
                  "font-display text-xl leading-snug tracking-tight text-forest sm:text-2xl",
                  raisedPriceLayout && "whitespace-nowrap",
                )}
              >
                {item.priceSuffix
                  ? formatPriceAmount(item.price)
                  : formatPrice(item.price)}
                {item.priceSuffix ? (
                  item.priceSuffix.startsWith("+") && !raisedPriceLayout ? (
                    <span className="mt-0.5 block text-sm font-normal leading-snug text-forest/75 sm:text-base">
                      {formatPriceSuffix(item.priceSuffix)}
                    </span>
                  ) : (
                    renderInlinePriceSuffix(item.priceSuffix)
                  )
                ) : null}
              </p>
            )}
            {item.priceNote ? (
              <p className="mt-1 text-xs text-muted">({item.priceNote})</p>
            ) : null}
          </div>
        </div>

        {!imageOnLeft ? imageBlock : null}
      </div>
    </article>
  );
}
