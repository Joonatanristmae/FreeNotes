"use client";

import Image from "next/image";import type { AdvertisingPrice } from "@/data/types";
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

type AdvertisingPriceCardProps = {
  item: AdvertisingPrice;
};

export function AdvertisingPriceCard({ item }: AdvertisingPriceCardProps) {
  const imageOnLeft = item.imagePosition === "left";
  const imageRotation = item.imageRotation ?? (imageOnLeft ? 0 : 14);
  const imageAlignTop = item.imageAlignTop ?? false;
  const showDescription = Boolean(item.description?.trim());
  const compactPriceLayout = [
    "tagakaas",
    "tagakaane-sisekylg",
    "valemileht",
  ].includes(item.id);
  const largeImage = item.id === "tagakaas";
  const enlargedLeftImage = item.id === "tagakaane-sisekylg";
  const alignImageRight = item.id === "valemileht";
  const raisedPriceLayout = item.id === "tavaleht";
  const infoText = item.size ?? item.description;

  const imageBlock = item.image ? (    <div
      className={cn(
        "relative shrink-0",
        alignImageRight || raisedPriceLayout || largeImage
          ? "overflow-visible"
          : "overflow-hidden",
        imageOnLeft
          ? cn(
              "-my-5 min-w-[6rem] self-stretch",
              enlargedLeftImage ? "w-[50%]" : "w-[45%]",
            )
          : cn(
              "min-w-[5rem]",
              largeImage
                ? "-mr-5 w-[42%]"
                : alignImageRight
                  ? "-my-5 -mr-5 -ml-4 w-[50%] self-stretch sm:-ml-5"
                  : "-mr-5 w-[48%]",
              !alignImageRight &&
                (imageAlignTop ? "-mt-5 self-start" : "-my-5 self-stretch"),
              alignImageRight && "-my-5 self-stretch",
            ),
      )}
    >
      <Image
        src={encodeAssetPath(item.image)}
        alt=""
        width={640}
        height={480}
        unoptimized
        className={cn(
          "h-full w-full object-contain",
          imageOnLeft
            ? "object-left object-center"
            : imageAlignTop
              ? "object-right object-top"
              : "object-right",
          imageAlignTop &&
            !alignImageRight &&
            "h-auto max-h-[calc(100%+1.25rem)]",
        )}
        style={
          imageRotation ||
          largeImage ||
          alignImageRight ||
          enlargedLeftImage ||
          raisedPriceLayout
            ? {
                ...(alignImageRight || raisedPriceLayout || largeImage
                  ? { transformOrigin: "right center" }
                  : enlargedLeftImage
                    ? { transformOrigin: "left center" }
                    : {}),
                transform: [
                  imageRotation ? `rotate(${imageRotation}deg)` : null,
                  largeImage ? "scale(1.3)" : null,
                  alignImageRight ? "scale(1.22)" : null,
                  raisedPriceLayout ? "scale(1.12)" : null,
                  enlargedLeftImage
                    ? "translateY(-1rem) scale(1.08)"
                    : null,
                ]
                  .filter(Boolean)
                  .join(" "),
              }
            : undefined
        }
        sizes="(max-width: 768px) 48vw, 280px"
      />
    </div>
  ) : null;

  return (
    <article
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
            aria-label={`More info about ${item.name}`}
          >
            i
          </button>
          <div
            role="tooltip"
            className="pointer-events-none absolute right-0 top-full z-30 mt-2 w-max max-w-[14rem] border border-ink/15 bg-white px-3 py-2 text-xs leading-snug text-ink opacity-0 shadow-md transition-opacity group-hover/info:opacity-100 group-focus-within/info:opacity-100"
          >
            {infoText.startsWith("Size:") || infoText.startsWith("size:")
              ? infoText
              : `Size: ${infoText}`}
          </div>
        </div>
      ) : null}

      <div
        className={cn(
          "flex h-full min-h-0",
          alignImageRight ? "gap-0" : "gap-3 sm:gap-4",
        )}
      >
        {imageOnLeft ? imageBlock : null}

        <div
          className={cn(
            "flex min-w-0 flex-1 flex-col",
            (alignImageRight || raisedPriceLayout || largeImage) &&
              "relative z-10",
            alignImageRight && "pr-8",
            enlargedLeftImage && "-ml-6 sm:-ml-10",
            largeImage && "translate-x-6 sm:translate-x-10",
          )}
        >
          <h3
            className={cn(
              "mt-1 font-display text-[1.4rem] tracking-tight text-ink capitalize sm:mt-1.5 sm:text-[1.55rem]",
              largeImage && "whitespace-nowrap",
            )}
          >
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
                    <span
                      className={cn(
                        "mt-0.5 block text-sm font-normal leading-snug text-forest/75 sm:text-base",
                        largeImage && "whitespace-nowrap",
                      )}
                    >
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
