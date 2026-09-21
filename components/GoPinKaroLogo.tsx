interface LogoProps {
  size?: number;
  className?: string;
  wordmark?: boolean;
}

export default function GoPinKaroLogo({ size = 28, className = "", wordmark = true }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {/* Custom SVG mark: stylised pin with upward arrow and chart bars */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background pill */}
        <rect width="32" height="32" rx="8" fill="#059669" />
        {/* Bar chart rising left to right */}
        <rect x="6" y="20" width="4" height="6" rx="1" fill="white" fillOpacity="0.55" />
        <rect x="12" y="15" width="4" height="11" rx="1" fill="white" fillOpacity="0.75" />
        <rect x="18" y="10" width="4" height="16" rx="1" fill="white" />
        {/* Upward arrow through the tallest bar */}
        <path
          d="M20 9 L23 6 L26 9"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="23"
          y1="6"
          x2="23"
          y2="12"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      {wordmark && (
        <span
          style={{
            fontWeight: 700,
            fontSize: size * 0.57,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          GoPinKaro
        </span>
      )}
    </span>
  );
}
