/**
 * Central Service Configuration for Grace Technologies
 * Defines primary & supporting services for global and dynamic location SEO
 */

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortName: string;
  primaryKeyword: string;
  description: string;
  keywords: string[];
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  enabled: boolean;
}

export const SERVICES_CONFIG: Record<string, ServiceConfig> = {
  'website-development': {
    slug: 'website-development',
    name: 'Website Development',
    shortName: 'Website Development',
    primaryKeyword: 'Website Development Company',
    description:
      'Custom website development, high-performance Next.js web applications, scalable e-commerce platforms, and technical Core Web Vitals optimization.',
    keywords: [
      'Website Development Company',
      'Website Development Services',
      'Custom Website Development',
      'Business Website Design',
      'E-commerce Development',
      'Web Application Development',
      'Next.js Development Agency',
    ],
    capabilities: [
      {
        title: 'Custom Website Development',
        description: 'Bespoke web architectures tailored specifically to your company’s brand, workflow, and conversion goals.',
      },
      {
        title: 'Business Websites & Portals',
        description: 'Professional enterprise websites engineered for credibility, high-intent lead capture, and search authority.',
      },
      {
        title: 'E-commerce Development',
        description: 'High-converting online store architectures with frictionless checkout flows and multi-currency integration.',
      },
      {
        title: 'Next.js & Web Applications',
        description: 'Ultra-fast React 19 and Next.js 16 full-stack web applications delivering sub-second page performance.',
      },
      {
        title: 'Responsive & Mobile-First UX',
        description: 'Pixel-perfect responsive design ensuring seamless experience across smartphones, tablets, and desktops.',
      },
      {
        title: 'Website Maintenance & Support',
        description: 'Continuous security patching, performance monitoring, technical SEO governance, and version upgrades.',
      },
    ],
    process: [
      { step: '01', title: 'Discovery & Architecture', description: 'Reviewing your commercial objectives, technical scope, and competitive search landscape.' },
      { step: '02', title: 'UX/UI Engineering', description: 'Designing intuitive, high-converting interfaces aligned with British aesthetic standards.' },
      { step: '03', title: 'Full-Stack Development', description: 'Building with Next.js, clean TypeScript, structured schemas, and strict Core Web Vitals.' },
      { step: '04', title: 'Testing & Launch', description: 'Cross-browser validation, responsive testing, edge performance tuning, and safe deployment.' },
    ],
    enabled: true,
  },

  'ai-automation': {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    primaryKeyword: 'AI Automation Services',
    description:
      'Autonomous AI agent workflows, business process automation, custom CRM/ERP integrations, and LLM-powered enterprise tooling.',
    keywords: [
      'AI Automation Services',
      'AI Automation Agency',
      'Business Process Automation',
      'AI Chatbot Development',
      'AI Integration',
      'Workflow Automation',
      'Autonomous AI Agents',
    ],
    capabilities: [
      {
        title: 'AI-Powered Workflows',
        description: 'Eliminate repetitive manual tasks by automating cross-departmental operations and data synchronization.',
      },
      {
        title: 'Business Process Automation',
        description: 'Streamline client onboarding, invoice processing, and reporting with reliable, auditable automations.',
      },
      {
        title: 'Intelligent AI Chatbots & Agents',
        description: '24/7 conversational customer qualification agents integrated with your knowledge base and CRM.',
      },
      {
        title: 'Document & Data Processing',
        description: 'Automated extraction, classification, and summarization of complex business documents and PDFs.',
      },
      {
        title: 'Software & API Integrations',
        description: 'Seamlessly connect your legacy databases, HubSpot, Salesforce, Stripe, and modern cloud platforms.',
      },
      {
        title: 'Predictive Business Analytics',
        description: 'Leverage predictive machine learning models to forecast demand, lead velocity, and operational bottlenecks.',
      },
    ],
    process: [
      { step: '01', title: 'Process Audit', description: 'Identifying manual friction points, repetitive labor, and highest-ROI automation opportunities.' },
      { step: '02', title: 'Architecture & Modeling', description: 'Designing secure LLM pipelines, deterministic fallback rules, and data access boundaries.' },
      { step: '03', title: 'API Integration & Sandbox', description: 'Connecting software tools with zero business disruption and strict validation tests.' },
      { step: '04', title: 'Deployment & Monitoring', description: 'Live operational roll-out with human-in-the-loop oversight and performance logging.' },
    ],
    enabled: true,
  },

  'merchant-account-management': {
    slug: 'merchant-account-management',
    name: 'Merchant Account Management',
    shortName: 'Merchant Accounts',
    primaryKeyword: 'Merchant Account Management',
    description:
      'Professional payment operations, merchant account onboarding assistance, multi-currency gateway integration, and chargeback mitigation.',
    keywords: [
      'Merchant Account Management',
      'Merchant Onboarding',
      'Merchant Account Support',
      'Payment Operations Management',
      'Payment Gateway Integration',
      'High-Risk Merchant Consulting',
    ],
    capabilities: [
      {
        title: 'Merchant Onboarding Assistance',
        description: 'Guidance through acquiring bank underwriting, KYC documentation, and compliance readiness.',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Technical setup of Stripe, PayPal, Worldpay, Adyen, and custom payment gateways on your web platform.',
      },
      {
        title: 'Multi-Currency Operations',
        description: 'Configure localized payment methods (GBP, EUR, USD, etc.) with dynamic currency conversion and low fees.',
      },
      {
        title: 'Chargeback & Dispute Defense',
        description: 'Proactive protocols, 3D Secure 2.3 authentication, and anti-fraud filters to protect merchant standing.',
      },
      {
        title: 'Documentation & Compliance',
        description: 'Assisting growing enterprises in preparing financial statements, volume projections, and card scheme guidelines.',
      },
      {
        title: 'Fee Optimization & Settlement',
        description: 'Reviewing interchange fees, settlement timelines, and processing limits to maximize cash flow efficiency.',
      },
    ],
    process: [
      { step: '01', title: 'Business Evaluation', description: 'Analyzing your trading model, transaction volumes, risk profile, and target currencies.' },
      { step: '02', title: 'Acquiring Strategy', description: 'Selecting the most suitable payment gateway and acquiring partners for your industry.' },
      { step: '03', title: 'Technical Integration', description: 'Implementing robust, PCI-DSS compliant checkout APIs and webhooks on your site.' },
      { step: '04', title: 'Ongoing Payment Ops', description: 'Continuous dispute monitoring, fee health audits, and settlement pipeline management.' },
    ],
    enabled: true,
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Digital Marketing & SEO',
    shortName: 'Digital Marketing',
    primaryKeyword: 'Digital Marketing Services',
    description:
      'High-intent search engine optimisation (SEO), Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), and paid client acquisition.',
    keywords: [
      'Digital Marketing Services',
      'SEO Services',
      'Local SEO',
      'Technical SEO',
      'GEO',
      'AEO',
      'Digital Growth Strategy',
      'Generative Engine Optimisation',
    ],
    capabilities: [
      {
        title: 'Technical & Organic SEO',
        description: 'Code-level performance tuning, structured data injection, and semantic indexing to secure page-one rankings.',
      },
      {
        title: 'Generative Engine Optimisation (GEO)',
        description: 'Positioning your business to be cited and recommended by AI engines like ChatGPT Search, Perplexity, and Gemini.',
      },
      {
        title: 'Answer Engine Optimisation (AEO)',
        description: 'Formatting authoritative answers for Google Featured Snippets, voice search, and AI assistant summarization.',
      },
      {
        title: 'Hyper-Local SEO & Map Visibility',
        description: 'Local citation building, GBP management, and localized landing pages that capture nearby business buyers.',
      },
      {
        title: 'Content Strategy & Topical Authority',
        description: 'Publishing comprehensive technical and commercial playbooks that establish undeniable domain leadership.',
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        description: 'Transforming inbound organic visitors into phone, WhatsApp, and form enquiries through frictionless UX.',
      },
    ],
    process: [
      { step: '01', title: 'Technical Audit & Keywords', description: 'In-depth assessment of your crawlability, Core Web Vitals, and commercial intent terms.' },
      { step: '02', title: 'Architecture & Schema Grounding', description: 'Implementing JSON-LD entity graphs, breadcrumbs, and GEO-optimized page layouts.' },
      { step: '03', title: 'Topical Content Expansion', description: 'Publishing targeted authority guides, FAQs, and location-grounded service assets.' },
      { step: '04', title: 'Conversion Tracking & Iteration', description: 'Measuring lead generation, enquiry attribution, and compounding rankings month-over-month.' },
    ],
    enabled: true,
  },
};

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return SERVICES_CONFIG[slug] || null;
};

export const getAllServiceConfigs = (): ServiceConfig[] => {
  return Object.values(SERVICES_CONFIG).filter((s) => s.enabled);
};
