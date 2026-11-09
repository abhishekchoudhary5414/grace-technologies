import type { Metadata } from 'next';
import WebsiteDevelopmentPage, { metadata as serviceMetadata } from '../services/website-development/page';

export const metadata: Metadata = serviceMetadata;

export default function Page() {
  return <WebsiteDevelopmentPage />;
}
