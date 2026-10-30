import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import clientsConfig from '@/config/clients.json';
import { ClientItem } from '@/components/sections/ClientSection/ClientCard';
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
    title: `${client.name} - ${client.project} | Grace Technologies`,
    description: client.testimonial,
  };
}

export default async function ClientDetailPage({ params }: Props) {
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

  return (
    <div className={styles.page}>
      <div className={styles.heroDecor} />

      <Container size="wide">
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className={styles.breadcrumbLink}>
            Projects
          </Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{client.name}</span>
        </nav>

        {/* Hero Header */}
        <header className={styles.clientHero}>
          <div className={styles.heroLeft}>
            <div className={styles.tagRow}>
              <span className={styles.badge}>{client.category}</span>
              <span className={styles.locationTag}>{client.location}</span>
            </div>
            <h1 className={styles.clientTitle}>{client.name}</h1>
            <p className={styles.projectSubtitle}>{client.project}</p>
            <p className={styles.clientSummary}>{client.summary}</p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroLogoBox}>
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={100}
                  height={100}
                  className={styles.heroLogoImg}
                />
              ) : (
                <div className={styles.heroLogoPlaceholder}>{initials}</div>
              )}
            </div>
            <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>
              <ArrowBackIcon fontSize="small" /> Back to All Projects
            </Link>
          </div>
        </header>

        {/* Client Testimonial / Feedback */}
        {client.testimonial && (
          <section className={styles.testimonialSection} aria-label="Client Feedback">
            <div className={styles.quoteHeader}>
              <FormatQuoteIcon sx={{ color: 'var(--color-accent)', fontSize: '1.75rem', transform: 'rotate(180deg)' }} />
              <span className={styles.quoteLabel}>Executive Endorsement</span>
            </div>
            <blockquote className={styles.quoteText}>
              &ldquo;{client.testimonial}&rdquo;
            </blockquote>
            <p className={styles.quoteAuthor}>— Leadership Team, {client.name}</p>
          </section>
        )}

        {/* Scope of Work & Deliverables */}
        <section className={styles.workSection}>
          <SectionHeading
            label="PROJECT DELIVERABLES"
            title="Scope of Work & Technical Execution."
            description={`Comprehensive breakdown of solutions, digital assets, and brand infrastructure engineered for ${client.name}.`}
            align="left"
          />

          <div className={styles.workGrid}>
            {client.workDone.map((work, index) => (
              <article key={index} className={styles.workItemCard}>
                <span className={styles.workTypeBadge}>{work.type}</span>
                <h2 className={styles.workTitle}>{work.title}</h2>
                <p className={styles.workDesc}>{work.description}</p>

                {/* Live External Website Link */}
                {work.url && (
                  <div className={styles.workActionRow}>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveWebsiteBtn}
                    >
                      <span>Visit Live Website</span>
                      <LaunchIcon fontSize="small" />
                    </a>
                  </div>
                )}

                {/* Embedded Presentation Profile (Canva or interactive document) */}
                {work.presentationUrl && (
                  <div className={styles.presentationEmbedWrapper}>
                    <iframe
                      loading="lazy"
                      src={work.presentationUrl}
                      title={`${work.title} Presentation`}
                      className={styles.presentationIframe}
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Logo Artwork Showcase */}
                {work.images && work.images.length > 0 && work.type === 'logo' && (
                  <div className={styles.logoDisplayBox}>
                    <Image
                      src={work.images[0]}
                      alt={`${client.name} Brand Mark`}
                      width={100}
                      height={100}
                      className={styles.logoDisplayImg}
                    />
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.35rem' }}>
                        Official Brand Identity Asset
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                        Vectorized master symbol, corporate stationery palette, and digital brand governance guide.
                      </p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </Container>

      {/* Conversion Consultation CTA */}
      <ServiceCTASection
        title={`Ready to Deliver Similar Results for Your Business?`}
        description="Speak directly with our UK–India delivery architects to evaluate your technical scope, branding identity, and timeline."
        primaryCtaText="Consult With Our Architects"
        secondaryCtaText="Explore All Projects"
        secondaryCtaHref="/projects"
      />
    </div>
  );
}
