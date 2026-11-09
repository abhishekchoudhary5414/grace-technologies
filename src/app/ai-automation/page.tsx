import type { Metadata } from 'next';
import AiAutomationPage, { metadata as serviceMetadata } from '../services/ai-automation/page';

export const metadata: Metadata = serviceMetadata;

export default function Page() {
  return <AiAutomationPage />;
}
