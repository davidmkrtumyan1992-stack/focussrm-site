import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-[clamp(14px,4vw,32px)] ${className}`}>
      {children}
    </div>
  );
}
