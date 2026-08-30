export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="8" height="8" rx="2" className="fill-muted-dim" />
        <rect x="17" y="1" width="8" height="8" rx="2" className="fill-muted-dim" />
        <rect x="1" y="17" width="8" height="8" rx="2" className="fill-muted-dim" />
        <rect x="8.5" y="8.5" width="9" height="9" rx="2.5" className="fill-accent" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        FocusSRM
      </span>
    </span>
  );
}
