type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 36 33" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient
          id="nw-blue"
          x1="3"
          y1="30"
          x2="18"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient
          id="nw-gold"
          x1="18"
          y1="30"
          x2="34"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a78bfa" />
          <stop offset="0.45" stopColor="#d4b86a" />
          <stop offset="1" stopColor="#f0d9a0" />
        </linearGradient>
      </defs>

      <g stroke="url(#nw-gold)" strokeWidth="1.3" opacity="0.85">
        <circle cx="22.5" cy="12" r="9.5" />
        <ellipse cx="22.5" cy="12" rx="4" ry="9.5" />
        <path d="M13.5 9h18M13.5 15h18" />
      </g>

      <g fill="url(#nw-gold)">
        <circle cx="22.5" cy="2.5" r="1.25" />
        <circle cx="16" cy="9" r="1.05" />
        <circle cx="29" cy="9" r="1.05" />
        <circle cx="15" cy="15" r="1.05" />
        <circle cx="30" cy="15" r="1.05" />
        <circle cx="22.5" cy="21.5" r="1.25" />
      </g>

      <path
        d="M2.5 30 10 10.5 16 25.5"
        stroke="url(#nw-blue)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 25.5 31 9.5"
        stroke="url(#nw-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M33.5 6.5 26.1 9.3 31.3 14.1 Z" fill="url(#nw-gold)" />
    </svg>
  );
}
