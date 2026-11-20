import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { UkFlag, IndiaFlag } from '@/components/common/Flags/CountryFlags';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import officesData from '@/config/offices.json';
import styles from './contact.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Grace Technologies | Discuss Your Project',
  description:
    'Discuss your goals with Grace Technologies in the UK: website development, mobile app development, software engineering, merchant account management, AI automation and digital marketing for your business.',
  canonicalPath: '/contact',
  keywords: [
    'Contact technology company UK',
    'Grace Technologies contact',
    'Website development consultation',
    'App development consultation',
    'Software engineering enquiry',
    'AI automation enquiry',
    'Digital solutions consultation UK',
  ],
});

export default function ContactPage() {
  const { uk, india } = officesData.offices;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Contact Us', url: `${SEO_CONFIG.siteUrl}/contact` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Contact Us' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <section className={styles.section}>
        <Container size="wide">
          <div className={styles.layout}>
            {/* Left Column: Context, Trust, Offices with Flags */}
            <div className={styles.infoCol}>




              {/* UK Office Card with Flag */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <div className={styles.flagWrap} title="United Kingdom Flag">
                    <UkFlag width={34} height={21} className={styles.flagSvg} />
                  </div>
                  <div className={styles.officeTitleBlock}>
                    <div className={styles.officeTitleRow}>
                      <h3 className={styles.officeName}>{uk.country}</h3>
                      <span className={styles.officeTag}>{uk.tag}</span>
                    </div>
                    <span className={styles.officeRole}>{uk.company} • {uk.role}</span>
                  </div>
                </div>

                <div className={styles.officeDetails}>
                  <p className={styles.addressLine}>
                    <LocationOnOutlinedIcon className={styles.detailIcon} />
                    <span>{uk.addressLines.join(', ')}</span>
                  </p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon className={styles.detailIcon} />
                    <a href={`mailto:${uk.email}`}>{uk.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon className={styles.detailIcon} />
                    <a href={`tel:${uk.phone.replace(/\s+/g, '')}`}>{uk.phone}</a>
                  </p>
                  <p className={styles.timezoneLine}>
                    <AccessTimeOutlinedIcon className={styles.detailIcon} />
                    <span>Timezone: {uk.timezone}</span>
                  </p>
                </div>
              </div>

              {/* India Office Card with Flag */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <div className={styles.flagWrap} title="India Flag">
                    <IndiaFlag width={34} height={21} className={styles.flagSvg} />
                  </div>
                  <div className={styles.officeTitleBlock}>
                    <div className={styles.officeTitleRow}>
                      <h3 className={styles.officeName}>{india.country}</h3>
                      <span className={styles.officeTag}>{india.tag}</span>
                    </div>
                    <span className={styles.officeRole}>{india.company} • {india.role}</span>
                  </div>
                </div>

                <div className={styles.officeDetails}>
                  <p className={styles.addressLine}>
                    <LocationOnOutlinedIcon className={styles.detailIcon} />
                    <span>{india.addressLines.join(', ')}</span>
                  </p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon className={styles.detailIcon} />
                    <a href={`mailto:${india.email}`}>{india.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon className={styles.detailIcon} />
                    <a href={`tel:${india.phone.replace(/[^0-9+]/g, '')}`}>{india.phone}</a>
                  </p>
                  <p className={styles.timezoneLine}>
                    <AccessTimeOutlinedIcon className={styles.detailIcon} />
                    <span>Timezone: {india.timezone}</span>
                  </p>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                  <SecurityOutlinedIcon className={styles.trustIcon} />
                  <span>Strict NDA, IP protection, and commercial confidentiality assured.</span>
                </div>
                <div className={styles.trustItem}>
                  <EmailOutlinedIcon className={styles.trustIcon} />
                  <span>Direct technical assessment from senior leads within 24 business hours.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
