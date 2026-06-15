export function BrandMark() {
  return (
    <span className="inline-flex items-center text-white">
      <svg
        aria-hidden="true"
        className="h-8 w-8 shrink-0 drop-shadow-[0_0_18px_rgba(110,231,249,0.35)]"
        viewBox="0 0 512 512"
        role="img">
        <defs>
          <radialGradient id="brand-halo" cx="34%" cy="20%" r="78%">
            <stop offset="0%" stopColor="#12365f" />
            <stop offset="46%" stopColor="#07111f" />
            <stop offset="100%" stopColor="#050811" />
          </radialGradient>
          <linearGradient id="brand-signal" x1="112" y1="124" x2="410" y2="372" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e6fbff" />
            <stop offset="42%" stopColor="#6ee7f9" />
            <stop offset="100%" stopColor="#8fb6d8" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="112" fill="url(#brand-halo)" />
        <path
          d="M58 132 182 70M42 252 246 150M268 78 456 0M332 196 508 108M74 430 224 356M292 442 470 352"
          stroke="#8fb6d8"
          strokeWidth="10"
          strokeLinecap="round"
          opacity=".16"
        />
        <path
          d="M96 122 256 58 416 122V304C416 374 350 418 256 456 162 418 96 374 96 304V122Z"
          fill="none"
          stroke="#6ee7f9"
          strokeWidth="12"
          opacity=".42"
        />
        <g transform="translate(99 106) scale(.55)">
          <path
            d="M146 158V354M146 256H254M254 158V354"
            fill="none"
            stroke="url(#brand-signal)"
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M296 158 360 254M424 158 360 254V354"
            fill="none"
            stroke="url(#brand-signal)"
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="146" cy="158" r="13" fill="#e6fbff" />
          <circle cx="424" cy="158" r="13" fill="#e6fbff" />
          <circle cx="360" cy="354" r="13" fill="#e6fbff" />
        </g>
      </svg>
    </span>
  );
}
