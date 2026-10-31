import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VerifiedIcon from '@mui/icons-material/Verified';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import clientsConfig from '@/config/clients.json';
import { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import ClientWorkTabs from './ClientWorkTabs';
import styles from './client-detail.module.css';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const clients = clientsConfig.clients as ClientItem[];
  return clients.map((client) => ({
    slug: client.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clients = clientsConfig.clients as ClientItem[];
  const client = clients.find((c) => c.slug === slug);

  if (!client) {
    return {
      title: 'Client Project | Grace Technologies',
    };
  }

  return {
    title: `${client.name} - ${client.project} | Grace Technologies Case Study`,
    description: client.testimonial,
  };
}

export default function ClientDetailPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className={styles.page}>
          <div className={styles.heroDecor} />
        </div>
      }
    >
      <ClientDetailContent params={params} />
    </Suspense>
  );
}

async function ClientDetailContent({ params }: Props) {
  const { slug } = await params;
  const clients = clientsConfig.clients as ClientItem[];
  const client = clients.find((c) => c.slug === slug);

  if (!client) {
    notFound();
  }

  const initials = client.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  // Find live website deliverable if available
  const websiteDeliverable = client.workDone?.find((item) => item.type === 'website');

  return (
    <div className={styles.page}>
      {/* Ambient background architectural grid */}
      <div className={styles.heroDecor} />
      <div className={styles.ambientGlowSpot} />

      <Breadcrumb
        items={[
          { label: 'Clients', href: '/client' },
          { label: client.name },
        ]}
        backHref="/client"
        backLabel="Back to Clients"
      />

      <Container size="wide">
        {/* Modernized Case Study Hero Section */}
        <header className={styles.clientHeroBanner}>
          <div className={styles.heroContentGrid}>
            {/* Left Column: Client Identity & Executive Narrative */}
            <div className={styles.heroInfoCol}>
              <div className={styles.badgeRow}>
                <span className={styles.categoryBadge}>{client.category}</span>
                <span className={styles.verifiedTag}>
                  <VerifiedIcon sx={{ fontSize: '0.85rem', color: 'var(--color-blue)' }} />
                  Verified Case Study
                </span>
              </div>

              <h1 className={styles.clientMainTitle}>{client.name}</h1>
              <p className={styles.projectSubtitle}>{client.project}</p>
              <p className={styles.clientSummaryParagraph}>{client.summary}</p>

              {/* Quick Meta Stats / Attributes */}
              <div className={styles.metaSpecsGrid}>
                <div className={styles.metaSpecCard}>
                  <LocationOnIcon className={styles.metaSpecIcon} />
                  <div>
                    <span className={styles.metaSpecLabel}>Region / Scope</span>
                    <span className={styles.metaSpecVal}>{client.location}</span>
                  </div>
                </div>

                <div className={styles.metaSpecCard}>
                  <BusinessIcon className={styles.metaSpecIcon} />
                  <div>
                    <span className={styles.metaSpecLabel}>Industry Domain</span>
                    <span className={styles.metaSpecVal}>{client.category.split(',')[0]}</span>
                  </div>
                </div>

                <div className={styles.metaSpecCard}>
                  <CalendarMonthIcon className={styles.metaSpecIcon} />
                  <div>
                    <span className={styles.metaSpecLabel}>Delivery Period</span>
                    <span className={styles.metaSpecVal}>Q1 2026 Production</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className={styles.heroActionRow}>
                {websiteDeliverable?.url && (
                  <a
                    href={websiteDeliverable.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.heroPrimaryBtn}
                  >
                    <span>Launch Production Website</span>
                    <OpenInNewIcon fontSize="small" />
                  </a>
                )}
                <Link href="/client" className={styles.heroBackLink}>
                  <ArrowBackIcon fontSize="small" />
                  <span>All Client Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Monogram / Brand Emblem Card */}
            <div className={styles.heroBrandCardCol}>
              <div className={styles.brandGlassContainer}>
                <div className={styles.brandLogoFrame}>
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} Brand Mark`}
                      width={160}
                      height={160}
                      className={styles.heroLogoImg}
                      priority
                    />
                  ) : (
                    <div className={styles.heroLogoPlaceholder}>{initials}</div>
                  )}
                </div>

                <div className={styles.brandCardFooter}>
                  <span className={styles.brandCardClientName}>{client.name}</span>
                  <span className={styles.brandCardTypeBadge}>Enterprise Technical Partner</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Endorsement Testimonial */}
        {client.testimonial && (
          <section className={styles.executiveTestimonialCard} aria-label="Client Feedback">
            <div className={styles.quoteDecorativeIcon}>
              <FormatQuoteIcon sx={{ fontSize: '3rem', color: 'var(--color-blue)', opacity: 0.35 }} />
            </div>
            <div className={styles.quoteBody}>
              <span className={styles.quotePill}>Executive Endorsement</span>
              <blockquote className={styles.quoteText}>
                &ldquo;{client.testimonial}&rdquo;
              </blockquote>
              <div className={styles.quoteAuthorRow}>
                <div className={styles.authorAvatarCircle}>
                  <span>{initials}</span>
                </div>
                <div>
                  <span className={styles.authorName}>Executive Leadership</span>
                  <span className={styles.authorRole}>{client.name}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Deliverables Section with Modern Tabs & Media Preview */}
        <section className={styles.workSection}>
          <SectionHeading
            label="TECHNICAL EXECUTION"
            title="Scope of Work & Architectural Deliverables."
            description={`Detailed breakdown of technical solutions, branding systems, and digital infrastructure engineered for ${client.name}.`}
            align="left"
          />

          <ClientWorkTabs workItems={client.workDone} />
        </section>
      </Container>

      {/* Conversion CTA */}
      <ServiceCTASection
        title={`Scale Your Engineering & Digital Architecture with Grace Technologies`}
        description="Schedule a technical roadmap discussion with our lead engineering architects to evaluate your digital platform requirements."
        primaryCtaText="Consult With Our Architects"
        secondaryCtaText="Explore All Projects"
        secondaryCtaHref="/projects"
      />
    </div>
  );
}
