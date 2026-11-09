import type { Metadata } from 'next';
import DigitalMarketingPage, { metadata as serviceMetadata } from '../services/digital-marketing/page';

export const metadata: Metadata = serviceMetadata;

export default function Page() {
  return <DigitalMarketingPage />;
}
