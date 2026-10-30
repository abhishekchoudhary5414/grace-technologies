import React, { Suspense } from 'react';
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
    title: `${client.name} - ${client.project} | Grace Technologies`,
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

  return (
    <div className={styles.page}>
      <div className={styles.heroDecor} />

      <Breadcrumb
        items={[
          { label: 'Clients', href: '/client' },
          { label: client.name },
        ]}
        backHref="/client"
        backLabel="Back to Clients"
      />

      <Container size="wide">
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
            <Link href="/client" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', textDecoration: 'none' }}>
              <ArrowBackIcon fontSize="small" /> Back to All Clients
            </Link>
          </div>
        </header>

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

        <section className={styles.workSection}>
          <SectionHeading
            label="PROJECT DELIVERABLES"
            title="Scope of Work & Technical Execution."
            description={`Comprehensive breakdown of solutions, digital assets, and brand infrastructure engineered for ${client.name}.`}
            align="left"
          />

          <ClientWorkTabs workItems={client.workDone} />
        </section>
      </Container>

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
