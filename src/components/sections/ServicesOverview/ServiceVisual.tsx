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
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PublicIcon from '@mui/icons-material/Public';
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

          {/* Omnichannel Marketing Ad Command Deck */}
          <div className={styles.mktCommandDeck}>
            {/* Header: Ad Performance & ROAS Status */}
            <div className={styles.mktHeader}>
              <div className={styles.mktTitleBox}>
                <div className={styles.mktLivePulse} />
                <div>
                  <span className={styles.mktHeading}>OMNICHANNEL AD ACCELERATOR</span>
                  <span className={styles.mktSubHeading}>Multi-Network Campaign Engine Active</span>
                </div>
              </div>
              <div className={styles.mktRoasBadge}>
                <TrendingUpIcon sx={{ fontSize: 13 }} />
                <span>+340% Blended ROAS</span>
              </div>
            </div>

            {/* Central Animated Omnichannel Platform Grid */}
            <div className={styles.channelBadgeRow}>
              {/* Meta (Facebook + Instagram) */}
              <div className={`${styles.channelCard} ${styles.chanMeta}`}>
                <div className={styles.chanIconWrapper}>
                  <svg className={styles.metaSvg} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div className={styles.chanInfo}>
                  <span className={styles.chanName}>Meta Ads</span>
                  <span className={styles.chanMetric}>ROAS 4.8x</span>
                </div>
                <span className={styles.chanActivePing} />
              </div>

              {/* Instagram */}
              <div className={`${styles.channelCard} ${styles.chanInstagram}`}>
                <div className={styles.chanIconWrapper}>
                  <InstagramIcon sx={{ fontSize: 17 }} />
                </div>
                <div className={styles.chanInfo}>
                  <span className={styles.chanName}>Instagram</span>
                  <span className={styles.chanMetric}>248k Reach</span>
                </div>
                <span className={styles.chanActivePing} />
              </div>

              {/* YouTube */}
              <div className={`${styles.channelCard} ${styles.chanYoutube}`}>
                <div className={styles.chanIconWrapper}>
                  <YouTubeIcon sx={{ fontSize: 18 }} />
                </div>
                <div className={styles.chanInfo}>
                  <span className={styles.chanName}>YouTube</span>
                  <span className={styles.chanMetric}>78% VTR</span>
                </div>
                <span className={styles.chanActivePing} />
              </div>

              {/* Google AdSense / Google Ads */}
              <div className={`${styles.channelCard} ${styles.chanAdsense}`}>
                <div className={styles.chanIconWrapper}>
                  <AdsClickIcon sx={{ fontSize: 17 }} />
                </div>
                <div className={styles.chanInfo}>
                  <span className={styles.chanName}>Google Ads</span>
                  <span className={styles.chanMetric}>12.4k Clicks</span>
                </div>
                <span className={styles.chanActivePing} />
              </div>
            </div>

            {/* Live Real-Time Conversion & Wave Chart */}
            <div className={styles.mktChartCard}>
              <div className={styles.mktChartHeader}>
                <div className={styles.mktChartTitleGroup}>
                  <BarChartIcon sx={{ fontSize: 15, color: 'var(--color-blue)' }} />
                  <span>Real-Time Ingestion: Meta, Google, YouTube & Adsense</span>
                </div>
                <span className={styles.mktLiveBadge}>● LIVE STREAM</span>
              </div>

              {/* Animated Growth Bars */}
              <div className={styles.dynamicWaveGrid}>
                <div className={styles.mktBarCol}>
                  <div className={`${styles.animatedBar} ${styles.barMeta}`} />
                  <span className={styles.barColLabel}>Meta</span>
                </div>
                <div className={styles.mktBarCol}>
                  <div className={`${styles.animatedBar} ${styles.barInsta}`} />
                  <span className={styles.barColLabel}>Insta</span>
                </div>
                <div className={styles.mktBarCol}>
                  <div className={`${styles.animatedBar} ${styles.barYt}`} />
                  <span className={styles.barColLabel}>YouTube</span>
                </div>
                <div className={styles.mktBarCol}>
                  <div className={`${styles.animatedBar} ${styles.barGoogle}`} />
                  <span className={styles.barColLabel}>Google</span>
                </div>
                <div className={styles.mktBarCol}>
                  <div className={`${styles.animatedBar} ${styles.barAdsense}`} />
                  <span className={styles.barColLabel}>AdSense</span>
                </div>
              </div>
            </div>

            {/* Campaign Optimization Footer */}
            <div className={styles.mktFooterStrip}>
              <div className={styles.mktFootItem}>
                <CampaignIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                <span>Pixel & CAPI Synced</span>
              </div>
              <div className={styles.mktFootItem}>
                <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                <span>Cross-Channel Attribution</span>
              </div>
              <div className={styles.mktFootItem}>
                <CheckCircleIcon sx={{ fontSize: 13, color: 'var(--color-blue)' }} />
                <span>AI Creative Optimization</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
