import type { Metadata } from 'next';
import MerchantAccountManagementPage, { metadata as serviceMetadata } from '../services/merchant-account-management/page';

export const metadata: Metadata = serviceMetadata;

export default function Page() {
  return <MerchantAccountManagementPage />;
}
