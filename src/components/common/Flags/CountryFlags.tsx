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

export function UsaFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="United States Flag"
    >
      <clipPath id="usaFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#usaFlagClip)">
        <rect width="60" height="36" fill="#B22234" />
        {/* 13 stripes */}
        <line x1="0" y1="4.15" x2="60" y2="4.15" stroke="#ffffff" strokeWidth="2.77" />
        <line x1="0" y1="9.7" x2="60" y2="9.7" stroke="#ffffff" strokeWidth="2.77" />
        <line x1="0" y1="15.23" x2="60" y2="15.23" stroke="#ffffff" strokeWidth="2.77" />
        <line x1="0" y1="20.77" x2="60" y2="20.77" stroke="#ffffff" strokeWidth="2.77" />
        <line x1="0" y1="26.31" x2="60" y2="26.31" stroke="#ffffff" strokeWidth="2.77" />
        <line x1="0" y1="31.85" x2="60" y2="31.85" stroke="#ffffff" strokeWidth="2.77" />
        {/* Canton (blue box) */}
        <rect width="24" height="19.4" fill="#3C3B6E" />
        {/* Simplified stars representation */}
        <circle cx="6" cy="5" r="1" fill="#ffffff" />
        <circle cx="12" cy="5" r="1" fill="#ffffff" />
        <circle cx="18" cy="5" r="1" fill="#ffffff" />
        <circle cx="9" cy="9.7" r="1" fill="#ffffff" />
        <circle cx="15" cy="9.7" r="1" fill="#ffffff" />
        <circle cx="6" cy="14.4" r="1" fill="#ffffff" />
        <circle cx="12" cy="14.4" r="1" fill="#ffffff" />
        <circle cx="18" cy="14.4" r="1" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function CanadaFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Canada Flag"
    >
      <clipPath id="canadaFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#canadaFlagClip)">
        <rect width="15" height="36" fill="#D80027" />
        <rect x="15" width="30" height="36" fill="#ffffff" />
        <rect x="45" width="15" height="36" fill="#D80027" />
        {/* Stylized Maple Leaf */}
        <path
          d="M30 8 L32.5 14.5 L36 13.5 L34 17 L38 18.5 L36 21.5 L31 22.5 L31 26 L29 26 L29 22.5 L24 21.5 L22 18.5 L26 17 L24 13.5 L27.5 14.5 Z"
          fill="#D80027"
        />
      </g>
    </svg>
  );
}

export function AustraliaFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Australia Flag"
    >
      <clipPath id="ausFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#ausFlagClip)">
        <rect width="60" height="36" fill="#00247D" />
        {/* Miniature Union Jack in canton */}
        <rect width="30" height="18" fill="#012169" />
        <path d="M0,0 L30,18 M30,0 L0,18" stroke="#ffffff" strokeWidth="3.5" />
        <path d="M0,0 L30,18 M30,0 L0,18" stroke="#C8102E" strokeWidth="2" />
        <path d="M15,0 V18 M0,9 H30" stroke="#ffffff" strokeWidth="5.5" />
        <path d="M15,0 V18 M0,9 H30" stroke="#C8102E" strokeWidth="3.2" />
        {/* Commonwealth Star */}
        <circle cx="15" cy="27" r="3.5" fill="#ffffff" />
        {/* Southern Cross stars */}
        <circle cx="45" cy="8" r="1.2" fill="#ffffff" />
        <circle cx="39" cy="14" r="1.2" fill="#ffffff" />
        <circle cx="51" cy="14" r="1.2" fill="#ffffff" />
        <circle cx="47" cy="22" r="1.2" fill="#ffffff" />
        <circle cx="45" cy="28" r="1.8" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function UaeFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="United Arab Emirates Flag"
    >
      <clipPath id="uaeFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#uaeFlagClip)">
        <rect width="60" height="12" y="0" fill="#00732F" />
        <rect width="60" height="12" y="12" fill="#FFFFFF" />
        <rect width="60" height="12" y="24" fill="#000000" />
        <rect width="15" height="36" fill="#FF0000" />
      </g>
    </svg>
  );
}

export function GermanyFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Germany Flag"
    >
      <clipPath id="germanyFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#germanyFlagClip)">
        <rect width="60" height="12" y="0" fill="#000000" />
        <rect width="60" height="12" y="12" fill="#DD0000" />
        <rect width="60" height="12" y="24" fill="#FFCE00" />
      </g>
    </svg>
  );
}

export function FranceFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="France Flag"
    >
      <clipPath id="franceFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#franceFlagClip)">
        <rect width="20" height="36" fill="#0055A4" />
        <rect x="20" width="20" height="36" fill="#FFFFFF" />
        <rect x="40" width="20" height="36" fill="#EF4135" />
      </g>
    </svg>
  );
}

export function SingaporeFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Singapore Flag"
    >
      <clipPath id="sgFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#sgFlagClip)">
        <rect width="60" height="18" fill="#ED2939" />
        <rect y="18" width="60" height="18" fill="#FFFFFF" />
        {/* Crescent */}
        <circle cx="12" cy="9" r="6" fill="#FFFFFF" />
        <circle cx="14" cy="9" r="5" fill="#ED2939" />
        {/* 5 Stars */}
        <circle cx="17.5" cy="5.5" r="0.9" fill="#FFFFFF" />
        <circle cx="19.5" cy="8" r="0.9" fill="#FFFFFF" />
        <circle cx="18.5" cy="11.5" r="0.9" fill="#FFFFFF" />
        <circle cx="15" cy="11.5" r="0.9" fill="#FFFFFF" />
        <circle cx="14.5" cy="7.5" r="0.9" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function IrelandFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ireland Flag"
    >
      <clipPath id="ieFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#ieFlagClip)">
        <rect width="20" height="36" fill="#169B62" />
        <rect x="20" width="20" height="36" fill="#FFFFFF" />
        <rect x="40" width="20" height="36" fill="#FF883E" />
      </g>
    </svg>
  );
}

export function NetherlandsFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Netherlands Flag"
    >
      <clipPath id="nlFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#nlFlagClip)">
        <rect width="60" height="12" fill="#AE1C28" />
        <rect y="12" width="60" height="12" fill="#FFFFFF" />
        <rect y="24" width="60" height="12" fill="#21468B" />
      </g>
    </svg>
  );
}

export function SaudiFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Saudi Arabia Flag"
    >
      <clipPath id="saFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#saFlagClip)">
        <rect width="60" height="36" fill="#006C35" />
        {/* Stylized Shahada / sword symbol */}
        <line x1="16" y1="23" x2="44" y2="23" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22" y1="21" x2="22" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M18 13 Q30 11 42 13 Q30 16 18 13" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function QatarFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Qatar Flag"
    >
      <clipPath id="qaFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#qaFlagClip)">
        <rect width="60" height="36" fill="#8D1B3D" />
        <rect width="18" height="36" fill="#FFFFFF" />
        <polygon
          points="18,0 23,2 18,4 23,6 18,8 23,10 18,12 23,14 18,16 23,18 18,20 23,22 18,24 23,26 18,28 23,30 18,32 23,34 18,36 18,0"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

export function SwitzerlandFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Switzerland Flag"
    >
      <clipPath id="chFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#chFlagClip)">
        <rect width="60" height="36" fill="#D52B1E" />
        <rect x="26.5" y="9" width="7" height="18" fill="#FFFFFF" rx="1" />
        <rect x="21" y="14.5" width="18" height="7" fill="#FFFFFF" rx="1" />
      </g>
    </svg>
  );
}

export function NewZealandFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="New Zealand Flag"
    >
      <clipPath id="nzFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#nzFlagClip)">
        <rect width="60" height="36" fill="#00247D" />
        {/* Union Jack in canton */}
        <rect width="30" height="18" fill="#012169" />
        <path d="M0,0 L30,18 M30,0 L0,18" stroke="#ffffff" strokeWidth="3.5" />
        <path d="M0,0 L30,18 M30,0 L0,18" stroke="#C8102E" strokeWidth="2" />
        <path d="M15,0 V18 M0,9 H30" stroke="#ffffff" strokeWidth="5.5" />
        <path d="M15,0 V18 M0,9 H30" stroke="#C8102E" strokeWidth="3.2" />
        {/* Red stars with white border */}
        <circle cx="45" cy="8" r="1.6" fill="#C8102E" stroke="#ffffff" strokeWidth="0.6" />
        <circle cx="39" cy="16" r="1.6" fill="#C8102E" stroke="#ffffff" strokeWidth="0.6" />
        <circle cx="51" cy="16" r="1.6" fill="#C8102E" stroke="#ffffff" strokeWidth="0.6" />
        <circle cx="45" cy="26" r="2.1" fill="#C8102E" stroke="#ffffff" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

export function GlobalFlag({ className, width = 60, height = 36 }: FlagProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="International Flag"
    >
      <clipPath id="globalFlagClip">
        <rect width="60" height="36" rx="3" />
      </clipPath>
      <g clipPath="url(#globalFlagClip)">
        <rect width="60" height="36" fill="#0F172A" />
        <circle cx="30" cy="18" r="11" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
        <ellipse cx="30" cy="18" rx="6" ry="11" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
        <line x1="19" y1="18" x2="41" y2="18" stroke="#38BDF8" strokeWidth="1.2" />
        <line x1="21.5" y1="12" x2="38.5" y2="12" stroke="#38BDF8" strokeWidth="1" strokeDasharray="1 1" />
        <line x1="21.5" y1="24" x2="38.5" y2="24" stroke="#38BDF8" strokeWidth="1" strokeDasharray="1 1" />
      </g>
    </svg>
  );
}


