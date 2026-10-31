'use client';

import React from 'react';
import styles from './RealisticSatelliteSvg.module.css';

interface RealisticSatelliteSvgProps {
  iconType: 'code' | 'trending' | 'cart' | 'ai';
  isActive: boolean;
}

export default function RealisticSatelliteSvg({
  iconType,
  isActive,
}: RealisticSatelliteSvgProps) {
  return (
    <svg
      className={`${styles.satelliteModelSvg} ${isActive ? styles.activeModel : ''}`}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Solar Panel Dark Grid Pattern */}
        <pattern
          id={`solarGrid-${iconType}`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 8 0 L 0 0 0 8"
            fill="none"
            stroke="var(--color-border-subtle)"
            strokeWidth="0.7"
          />
        </pattern>

        {/* Glow Filters */}
        <filter
          id={`beaconGlow-${iconType}`}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- LEFT SOLAR PANEL WING --- */}
      {/* Panel mounting boom strut */}
      <line
        x1="58"
        y1="50"
        x2="48"
        y2="50"
        stroke="var(--color-border-strong)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Solar Panel Array Frame */}
      <rect
        x="6"
        y="32"
        width="42"
        height="36"
        rx="2"
        fill="var(--color-panel-dark)"
        stroke="var(--color-border-active)"
        strokeWidth="1.2"
      />
      {/* Solar Cells Grid */}
      <rect
        x="8"
        y="34"
        width="38"
        height="32"
        fill={`url(#solarGrid-${iconType})`}
        opacity="0.85"
      />
      {/* Panel Bus Dividing Bars */}
      <line x1="20" y1="32" x2="20" y2="68" stroke="var(--color-border-medium)" strokeWidth="1" />
      <line x1="34" y1="32" x2="34" y2="68" stroke="var(--color-border-medium)" strokeWidth="1" />
      <line x1="6" y1="50" x2="48" y2="50" stroke="var(--color-border-subtle)" strokeWidth="0.8" />

      {/* --- RIGHT SOLAR PANEL WING --- */}
      {/* Panel mounting boom strut */}
      <line
        x1="102"
        y1="50"
        x2="112"
        y2="50"
        stroke="var(--color-border-strong)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Solar Panel Array Frame */}
      <rect
        x="112"
        y="32"
        width="42"
        height="36"
        rx="2"
        fill="var(--color-panel-dark)"
        stroke="var(--color-border-active)"
        strokeWidth="1.2"
      />
      {/* Solar Cells Grid */}
      <rect
        x="114"
        y="34"
        width="38"
        height="32"
        fill={`url(#solarGrid-${iconType})`}
        opacity="0.85"
      />
      {/* Panel Bus Dividing Bars */}
      <line x1="126" y1="32" x2="126" y2="68" stroke="var(--color-border-medium)" strokeWidth="1" />
      <line x1="140" y1="32" x2="140" y2="68" stroke="var(--color-border-medium)" strokeWidth="1" />
      <line x1="112" y1="50" x2="154" y2="50" stroke="var(--color-border-subtle)" strokeWidth="0.8" />

      {/* --- PARABOLIC DISH ANTENNA (TOP) --- */}
      <path
        d="M 68 24 Q 80 12, 92 24"
        stroke="var(--color-border-highlight)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Dish Feed Horn Strut */}
      <line
        x1="80"
        y1="18"
        x2="80"
        y2="7"
        stroke="var(--color-border-active)"
        strokeWidth="1.5"
      />
      <circle
        cx="80"
        cy="6"
        r="2"
        fill="var(--color-accent)"
        filter={`url(#beaconGlow-${iconType})`}
      />

      {/* --- CENTRAL MAIN SATELLITE CHASSIS / BUS --- */}
      {/* Outer Golden/Frosted Beveled Avionics Cube */}
      <rect
        x="58"
        y="30"
        width="44"
        height="40"
        rx="5"
        fill="var(--color-surface-strong)"
        stroke="var(--color-border-highlight)"
        strokeWidth="1.8"
      />

      {/* High-Tech Shading Line */}
      <rect
        x="61"
        y="33"
        width="38"
        height="10"
        rx="2"
        fill="var(--color-glass-medium)"
      />

      {/* Center Service Insignia Disc */}
      <circle
        cx="80"
        cy="50"
        r="12"
        fill="var(--color-panel-dark)"
        stroke="var(--color-accent)"
        strokeWidth="1.2"
      />

      {/* Service Icon Representation inside core */}
      {iconType === 'code' && (
        <path
          d="M 77 46 L 73 50 L 77 54 M 83 46 L 87 50 L 83 54"
          stroke="var(--color-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {iconType === 'trending' && (
        <path
          d="M 74 54 L 78 50 L 81 52 L 86 46 M 83 46 L 86 46 L 86 49"
          stroke="var(--color-accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {iconType === 'cart' && (
        <path
          d="M 73 45 H 76 L 78 53 H 85 L 87 47 H 77 M 78 55 A 1 1 0 1 1 78 56 M 85 55 A 1 1 0 1 1 85 56"
          stroke="var(--color-accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {iconType === 'ai' && (
        <g>
          <rect
            x="76"
            y="46"
            width="8"
            height="8"
            rx="1"
            stroke="var(--color-accent)"
            strokeWidth="1.3"
          />
          <line x1="74" y1="48" x2="76" y2="48" stroke="var(--color-accent)" strokeWidth="1" />
          <line x1="74" y1="52" x2="76" y2="52" stroke="var(--color-accent)" strokeWidth="1" />
          <line x1="84" y1="48" x2="86" y2="48" stroke="var(--color-accent)" strokeWidth="1" />
          <line x1="84" y1="52" x2="86" y2="52" stroke="var(--color-accent)" strokeWidth="1" />
        </g>
      )}

      {/* --- BOTTOM THRUSTER / NOZZLE --- */}
      <polygon
        points="75,70 85,70 88,76 72,76"
        fill="var(--color-panel-dark)"
        stroke="var(--color-border-strong)"
        strokeWidth="1.2"
      />
      {/* Thruster Ion Glow Plume */}
      <ellipse
        cx="80"
        cy="79"
        rx="5"
        ry="3"
        fill="var(--color-accent)"
        opacity="0.8"
        filter={`url(#beaconGlow-${iconType})`}
      />

      {/* Status Flashing LED Beacons */}
      <circle
        cx="63"
        cy="35"
        r="1.8"
        fill="var(--color-accent)"
        filter={`url(#beaconGlow-${iconType})`}
      />
      <circle
        cx="97"
        cy="35"
        r="1.8"
        fill="var(--color-border-active)"
      />
    </svg>
  );
}

