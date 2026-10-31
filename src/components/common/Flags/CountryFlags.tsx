import React from 'react';

interface FlagProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function UkFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="United Kingdom Flag"
    >
      <clipPath id="ukFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#ukFlagClip)">
        {/* Navy Blue Field */}
        <rect width="60" height="36" fill="#012169" />
        {/* Diagonal White Cross */}
        <path d="M0,0 L60,36 M60,0 L0,36" stroke="#ffffff" strokeWidth="7" />
        {/* Diagonal Red Cross */}
        <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4" />
        {/* St George White Cross */}
        <path d="M30,0 V36 M0,18 H60" stroke="#ffffff" strokeWidth="11" />
        {/* St George Red Cross */}
        <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="6.5" />
      </g>
    </svg>
  );
}

export function IndiaFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="India Flag"
    >
      <clipPath id="indiaFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#indiaFlagClip)">
        {/* Top Saffron Band */}
        <rect width="60" height="12" y="0" fill="#FF9933" />
        {/* Middle White Band */}
        <rect width="60" height="12" y="12" fill="#FFFFFF" />
        {/* Bottom India Green Band */}
        <rect width="60" height="12" y="24" fill="#138808" />
        {/* Ashoka Chakra */}
        <circle cx="30" cy="18" r="4.8" fill="none" stroke="#000080" strokeWidth="0.8" />
        <circle cx="30" cy="18" r="1.1" fill="#000080" />
        {/* 24 Spokes */}
        <g stroke="#000080" strokeWidth="0.45" strokeLinecap="round">
          {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((deg) => (
            <line
              key={deg}
              x1="30"
              y1="13.2"
              x2="30"
              y2="22.8"
              transform={`rotate(${deg} 30 18)`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

