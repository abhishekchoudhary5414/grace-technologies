// Helper function to trigger the Enquiry Modal from anywhere in client code
export function openEnquiryModal(serviceType?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-enquiry-modal', {
        detail: { serviceType },
      })
    );
  }
}

