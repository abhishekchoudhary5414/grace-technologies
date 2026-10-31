'use client';

import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import TerminalIcon from '@mui/icons-material/Terminal';
import styles from './ServiceVisual.module.css';

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  switch (serviceId) {
    case 'website-development':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Main Browser Window */}
          <div className={styles.browserWindow}>
            <div className={styles.browserHeader}>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <span className={styles.browserUrl}>gracetechnologies.uk/platform</span>
              <div className={styles.liveTag}>PRODUCTION</div>
            </div>

            <div className={styles.browserBody}>
              <div className={styles.codeBanner}>
                <div className={styles.codePill}>
                  <CodeIcon fontSize="inherit" />
                  <span>Next.js 16 + TypeScript</span>
                </div>
                <span className={styles.speedScore}>100% Core Web Vitals</span>
              </div>

              <div className={styles.mockupHero}>
                <div className={styles.mockupTextGroup}>
                  <div className={styles.lineH1} />
                  <div className={styles.lineP1} />
                  <div className={styles.lineP2} />
                </div>
                <div className={styles.mockupCta} />
              </div>

              <div className={styles.mockupGrid3}>
                <div className={styles.mockupCard}>
                  <LanguageIcon fontSize="small" />
                  <div className={styles.miniBar} />
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.miniCircle} />
                  <div className={styles.miniBar} />
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.miniSquare} />
                  <div className={styles.miniBar} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Preview Companion */}
          <div className={styles.floatingMobile}>
            <div className={styles.mobileSpeaker} />
            <div className={styles.mobileScreen}>
              <div className={styles.mobileHero} />
              <div className={styles.mobileBtn} />
            </div>
          </div>
        </div>
      );

    case 'merchant-account-management':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />

          {/* Realistic Merchant Laptop Stage */}
          <div className={styles.laptopStage}>
            {/* Laptop Screen Body */}
            <div className={styles.laptopDisplay}>
              {/* Laptop Camera & Bezel Top */}
              <div className={styles.laptopBezelTop}>
                <span className={styles.laptopWebcam} />
              </div>

              {/* Laptop Screen Viewport */}
              <div className={styles.laptopScreenViewport}>
                {/* Store Top Navigation Bar */}
                <div className={styles.laptopBrowserBar}>
                  <div className={styles.laptopDots}>
                    <span className={styles.lDot} />
                    <span className={styles.lDot} />
                    <span className={styles.lDot} />
                  </div>
                  <div className={styles.laptopUrlBar}>
                    <span className={styles.laptopLock}>🔒</span>
                    <span>merchant.gracetechnologies.uk</span>
                  </div>
                  <div className={styles.laptopLivePill}>
                    <span className={styles.pulseDot} />
                    <span>LIVE STORE</span>
                  </div>
                </div>

                {/* Merchant Operating Console Screen Content */}
                <div className={styles.laptopConsoleBody}>
                  {/* Top Stats Overview: Balance & Cart Volumes */}
                  <div className={styles.consoleKpiRow}>
                    {/* KPI 1: Gross Sales in Pounds (£) */}
                    <div className={styles.consoleKpiCard}>
                      <div className={styles.kpiIconPound}>
                        <CurrencyPoundIcon fontSize="small" />
                      </div>
                      <div className={styles.kpiInfo}>
                        <span className={styles.kpiLabel}>Net Settlement</span>
                        <span className={styles.kpiValue}>
                          <CurrencyPoundIcon sx={{ fontSize: '1rem', verticalAlign: '-1px' }} />
                          84,920.50
                        </span>
                      </div>
                      <div className={styles.kpiGrowthBadge}>
                        <ArrowUpwardIcon sx={{ fontSize: 11 }} />
                        <span>+32.6%</span>
                      </div>
                    </div>

                    {/* KPI 2: Live Cart Orders */}
                    <div className={styles.consoleKpiCard}>
                      <div className={styles.kpiIconCart}>
                        <ShoppingCartOutlinedIcon fontSize="small" />
                      </div>
                      <div className={styles.kpiInfo}>
                        <span className={styles.kpiLabel}>Cart Volume</span>
                        <span className={styles.kpiValue}>1,428 Orders</span>
                      </div>
                      <div className={styles.kpiGrowthBadge}>
                        <ArrowUpwardIcon sx={{ fontSize: 11 }} />
                        <span>+18.4%</span>
                      </div>
                    </div>
                  </div>

                  {/* Merchant Live Growth Graph Area */}
                  <div className={styles.chartVisualBlock}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartTitleGroup}>
                        <ShowChartIcon fontSize="small" className={styles.chartTrendIcon} />
                        <span className={styles.chartTitle}>Revenue Velocity & Multi-Store Trajectory</span>
                      </div>
                      <span className={styles.chartTimeframe}>Last 30 Days (GBP £)</span>
                    </div>

                    {/* Interactive SVG Growth Graph with Area Fill */}
                    <div className={styles.svgGraphWrapper}>
                      <svg
                        viewBox="0 0 380 90"
                        className={styles.growthSvg}
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-blue)" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="var(--color-blue)" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Horizontal Gridlines */}
                        <line x1="0" y1="20" x2="380" y2="20" stroke="var(--color-border-subtle)" strokeDasharray="4 4" />
                        <line x1="0" y1="50" x2="380" y2="50" stroke="var(--color-border-subtle)" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="380" y2="80" stroke="var(--color-border-subtle)" />

                        {/* Shaded Area under Curve */}
                        <path
                          d="M 0 75 Q 40 68, 80 58 T 160 48 T 240 32 T 320 20 T 380 10 L 380 90 L 0 90 Z"
                          fill="url(#growthGrad)"
                        />

                        {/* Bold Growth Trajectory Line */}
                        <path
                          d="M 0 75 Q 40 68, 80 58 T 160 48 T 240 32 T 320 20 T 380 10"
                          fill="none"
                          stroke="var(--color-blue)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Key Milestones on Growth Curve */}
                        <circle cx="80" cy="58" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="160" cy="48" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="240" cy="32" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="320" cy="20" r="3.5" fill="var(--color-surface)" stroke="var(--color-blue)" strokeWidth="2" />
                        <circle cx="380" cy="10" r="4.5" fill="var(--color-blue)" stroke="#ffffff" strokeWidth="2" />
                      </svg>

                      {/* Floating Peak Label */}
                      <div className={styles.floatingPeakPill}>
                        <CurrencyPoundIcon sx={{ fontSize: 11 }} />
                        <span>Peak: £12.4k/day</span>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Channel Merchant Channel Footer */}
                  <div className={styles.merchantChannelFooter}>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Shopify & WooCommerce Sync</span>
                    </div>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Amazon & Stripe GBP Gateways</span>
                    </div>
                    <div className={styles.channelItem}>
                      <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                      <span>Instant KYC Settlement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Realistic Laptop Base & Trackpad */}
            <div className={styles.laptopBase}>
              <div className={styles.laptopNotch} />
            </div>
            <div className={styles.laptopBottomLip} />
          </div>

          {/* Floating Companion Badge: Live Cart Checkout */}
          <div className={styles.floatingCartBadge}>
            <div className={styles.cartBadgeIcon}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </div>
            <div className={styles.cartBadgeText}>
              <span className={styles.cartBadgeTitle}>Live Cart Conversion</span>
              <span className={styles.cartBadgeSub}>
                Avg Basket: <strong>£68.50</strong>
              </span>
            </div>
          </div>
        </div>
      );

    case 'ai-automation':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />

          {/* AI Autonomous Bot & Neural Automation Stage */}
          <div className={styles.aiBotStage}>
            {/* Top Status Capsule */}
            <div className={styles.aiHeaderPill}>
              <div className={styles.aiStatusDot} />
              <span className={styles.aiStatusText}>AUTONOMOUS AGENT ACTIVE</span>
              <span className={styles.aiLatencyBadge}>
                <BoltIcon sx={{ fontSize: 12 }} /> 4ms Response
              </span>
            </div>

            {/* Futuristic Animated AI Bot Character */}
            <div className={styles.botContainer}>
              {/* Floating Holographic Aura Rings */}
              <div className={styles.auraRingOuter} />
              <div className={styles.auraRingInner} />

              {/* Bot Body Chassis */}
              <div className={styles.botChassis}>
                {/* Bot Head Antennas */}
                <div className={styles.botAntenna}>
                  <div className={styles.antennaBeam} />
                  <div className={styles.antennaTip} />
                </div>

                {/* Bot Head Display */}
                <div className={styles.botHead}>
                  {/* Visor Screen with Animated Glowing Eyes */}
                  <div className={styles.botVisor}>
                    <div className={styles.botEye}>
                      <span className={styles.eyeGleam} />
                    </div>
                    <div className={styles.botEye}>
                      <span className={styles.eyeGleam} />
                    </div>
                    {/* Scanning Beam Sweep */}
                    <div className={styles.visorScanLine} />
                  </div>
                  {/* Neural Ear Nodes */}
                  <span className={`${styles.earNode} ${styles.earLeft}`} />
                  <span className={`${styles.earNode} ${styles.earRight}`} />
                </div>

                {/* Bot Torso & Core Processor */}
                <div className={styles.botTorso}>
                  <div className={styles.coreReactor}>
                    <AutoAwesomeIcon sx={{ fontSize: 16 }} className={styles.coreSparkle} />
                  </div>
                  <div className={styles.circuitLines}>
                    <span className={styles.cLine} />
                    <span className={styles.cLine} />
                  </div>
                </div>

                {/* Bot Floating Repulsor Thruster Base */}
                <div className={styles.botThrusterGlow} />
              </div>

              {/* Floating Thought / Reasoning Bubble */}
              <div className={styles.botSpeechBubble}>
                <div className={styles.speechHeader}>
                  <PsychologyOutlinedIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                  <span>Agent Reasoning</span>
                </div>
                <div className={styles.speechCode}>
                  <code>&gt; Analyzing workflow... 100% automated</code>
                </div>
              </div>

              {/* Satellite Node 1: Multi-modal Pipeline */}
              <div className={`${styles.satelliteChip} ${styles.satelliteLeft}`}>
                <TerminalIcon sx={{ fontSize: 14, color: 'var(--color-blue)' }} />
                <div className={styles.chipMeta}>
                  <span className={styles.chipTitle}>Self-Learning</span>
                  <span className={styles.chipVal}>Zero Human Loop</span>
                </div>
              </div>

              {/* Satellite Node 2: Real-time Execution */}
              <div className={`${styles.satelliteChip} ${styles.satelliteRight}`}>
                <SmartToyOutlinedIcon sx={{ fontSize: 14, color: 'var(--color-whatsapp-green-strong, #22c55e)' }} />
                <div className={styles.chipMeta}>
                  <span className={styles.chipTitle}>24/7 Execution</span>
                  <span className={styles.chipVal}>99.98% Precision</span>
                </div>
              </div>
            </div>

            {/* Bottom Capability Footer Strip */}
            <div className={styles.aiCapabilityStrip}>
              <div className={styles.capItem}>
                <CheckCircleIcon sx={{ fontSize: 12, color: 'var(--color-blue)' }} />
                <span>Autonomous LLM Agents</span>
              </div>
              <div className={styles.capItem}>
                <CheckCircleIcon sx={{ fontSize: 12, color: 'var(--color-blue)' }} />
                <span>Enterprise API Tool-Use</span>
              </div>
              <div className={styles.capItem}>
                <CheckCircleIcon sx={{ fontSize: 12, color: 'var(--color-blue)' }} />
                <span>Self-Healing Workflows</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'digital-marketing':
      return (
        <div className={styles.visualContainer}>
          <div className={styles.ambientGlow} />
          {/* Performance Dashboard */}
          <div className={styles.marketingCanvas}>
            <div className={styles.dashHeader}>
              <div className={styles.dashTitle}>
                <BarChartIcon fontSize="small" />
                <span>Conversion Velocity</span>
              </div>
              <div className={styles.growthBadge}>
                <TrendingUpIcon fontSize="inherit" />
                <span>+340% ROAS</span>
              </div>
            </div>

            <div className={styles.chartArea}>
              <div className={styles.chartBarsGroup}>
                <div className={`${styles.cBar} ${styles.cb1}`}><span className={styles.barLabel}>SEO</span></div>
                <div className={`${styles.cBar} ${styles.cb2}`}><span className={styles.barLabel}>PPC</span></div>
                <div className={`${styles.cBar} ${styles.cb3}`}><span className={styles.barLabel}>CRO</span></div>
                <div className={`${styles.cBar} ${styles.cb4}`}><span className={styles.barLabel}>GEO</span></div>
                <div className={`${styles.cBar} ${styles.cb5}`}><span className={styles.barLabel}>PIPE</span></div>
              </div>
            </div>

            <div className={styles.campaignPill}>
              <CampaignIcon fontSize="small" />
              <span>Targeted Pipeline Acquisition Active</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
