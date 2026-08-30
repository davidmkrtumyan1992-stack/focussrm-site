import Image from "next/image";

export function DeviceFrame({
  src,
  alt,
  placeholderLabel,
  priority = false,
  maxHeightClass = "max-h-[64dvh]",
}: {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  priority?: boolean;
  maxHeightClass?: string;
}) {
  return (
    <div className="mx-auto inline-block overflow-hidden rounded-2xl border border-border bg-surface align-top shadow-[0_40px_120px_-40px_rgba(53,215,174,0.25)]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          className={`block h-auto w-auto ${maxHeightClass} max-w-full`}
        />
      ) : (
        <div className="flex aspect-[16/10] w-[80vw] max-w-3xl items-center justify-center bg-gradient-to-br from-surface via-surface to-surface-raised">
          <p className="px-8 text-center text-[13px] text-muted-dim">
            {placeholderLabel ?? "Экран интерфейса"}
          </p>
        </div>
      )}
    </div>
  );
}
