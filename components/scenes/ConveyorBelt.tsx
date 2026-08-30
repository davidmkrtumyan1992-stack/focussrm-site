export function ConveyorBelt() {
  return (
    <svg
      viewBox="0 34 420 178"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden" }}
      aria-hidden
    >
      <defs>
        <g id="fs-box">
          <polygon points="0,150 14,139 70,139 56,150" fill="#0B100E" stroke="#A8C1BB" strokeWidth={2.5} strokeLinejoin="round" />
          <polygon points="56,150 70,139 70,179 56,190" fill="#0B100E" stroke="#A8C1BB" strokeWidth={2.5} strokeLinejoin="round" />
          <rect x={0} y={150} width={56} height={40} fill="#0B100E" stroke="#A8C1BB" strokeWidth={2.5} strokeLinejoin="round" />
          <polygon points="56,150 70,158 84,147 70,139" fill="#0B100E" stroke="#A8C1BB" strokeWidth={2.5} strokeLinejoin="round" />
        </g>
      </defs>

      <line x1={0} y1={52} x2={420} y2={52} stroke="#6F8781" strokeWidth={2} strokeDasharray="6 6" />
      <line x1={0} y1={197} x2={420} y2={197} stroke="#6F8781" strokeWidth={2} strokeDasharray="6 6" />

      <g style={{ animation: "fsBelt 2s infinite cubic-bezier(0.45,0,0.25,1)" }}>
        <use href="#fs-box" x={-140} y={0} />
        <use href="#fs-box" x={0} y={0} />
        <use href="#fs-box" x={140} y={0} />
        <use href="#fs-box" x={280} y={0} />
      </g>

      <rect width={14} height={14} rx={1.5} fill="#7FD1BC" style={{ animation: "fsPack 4s infinite linear" }} />
      <rect width={14} height={14} rx={1.5} fill="#7FD1BC" style={{ animation: "fsPack 4s infinite linear", animationDelay: "-2s" }} />

      {[0, -2].map((delay) => (
        <g key={delay} style={{ animation: "fsClawRun 4s infinite linear", animationDelay: `${delay}s` }}>
          <line x1={0} y1={52} x2={0} y2={67} stroke="#A8C1BB" strokeWidth={2.5} strokeLinecap="round" />
          <ellipse cx={0} cy={73} rx={11} ry={7} fill="#0B100E" stroke="#A8C1BB" strokeWidth={2.5} />
          <g
            style={{
              transformBox: "view-box",
              transformOrigin: "0px 80px",
              animation: "fsClawGrip 4s infinite ease-in-out",
              animationDelay: `${delay}s`,
            }}
          >
            <path d="M -4 80 C -11 84 -12 92 -10 100" fill="none" stroke="#A8C1BB" strokeWidth={2.5} strokeLinecap="round" />
            <path d="M 4 80 C 11 84 12 92 10 100" fill="none" stroke="#A8C1BB" strokeWidth={2.5} strokeLinecap="round" />
          </g>
        </g>
      ))}
    </svg>
  );
}
