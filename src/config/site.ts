import { ServiceDetail, IndustryItem, StepItem } from '@/types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortTitle: 'Web Development',
    tagline: 'Digital Experiences. Built to Perform.',
    headline: 'Digital Experiences Designed to Make an Impact.',
    description:
      'Build modern, responsive and scalable websites and web applications that strengthen business presence and create meaningful customer experiences.',
    route: '/services/website-development',
    capabilities: [
      {
        title: 'Business Website Development',
        description: 'Bespoke corporate websites engineered to convey prestige, authority, and industry leadership.',
      },
      {
        title: 'E-commerce Architecture',
        description: 'High-converting, secure online commerce architectures built for frictionless transacting at scale.',
      },
      {
        title: 'Custom Web Applications',
        description: 'Complex SaaS portals, dynamic web apps, and bespoke internal tools engineered with modern frameworks.',
      },
      {
        title: 'Responsive & Accessible Engineering',
        description: 'Fluid responsiveness across all viewport sizes with strict adherence to modern accessibility standards.',
      },
      {
        title: 'Modern CMS Integration',
        description: 'Headless and modular CMS integrations empowering editorial agility without sacrificing technical performance.',
      },
      {
        title: 'Continuous Maintenance & Support',
        description: 'Proactive code audits, vulnerability patching, dependencies updates, and SLA-backed uptime monitoring.',
      },
      {
        title: 'Performance Engineering',
        description: 'Sub-second load times, Core Web Vitals optimization, lightweight bundle sizes, and CDN delivery.',
      },
      {
        title: 'Technical SEO Foundations',
        description: 'Structured metadata, semantic HTML5 hierarchies, clean URL routing, and sitemap automation.',
      },
    ],
    benefits: [
      {
        title: 'Elevated Brand Prestige',
        description: 'Establish undisputed market authority with British corporate aesthetic refinement and flawless user journeys.',
      },
      {
        title: 'Measurable Conversion Lift',
        description: 'Architected with conversion psychology, streamlined CTAs, and frictionless navigational hierarchies.',
      },
      {
        title: 'Future-Proof Scalability',
        description: 'Engineered with clean codebases and modern component systems that adapt effortlessly as your enterprise expands.',
      },
      {
        title: 'Uncompromised Performance',
        description: 'Near-instantaneous rendering and minimal latency that delight both prospective customers and search engines.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        description: 'We audit your objectives, audience profiles, technical requirements, and define the precise digital roadmap.',
      },
      {
        step: '02',
        title: 'UI/UX Prototyping',
        description: 'Designing interactive wireframes and high-fidelity visuals adhering to strict brand design systems.',
      },
      {
        step: '03',
        title: 'Clean-Code Engineering',
        description: 'Full-stack development using Next.js, rigorous TypeScript typing, and modular component separation.',
      },
      {
        step: '04',
        title: 'Testing & Launch',
        description: 'Rigorous cross-browser, cross-device, security, and load testing prior to seamless global deployment.',
      },
    ],
    faqs: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We specialise in Next.js, React, TypeScript, and modern headless CMS platforms. Every codebase is built with strict architectural standards, prioritizing performance, security, and modularity.',
      },
      {
        question: 'Do you build bespoke solutions or use templates?',
        answer: 'Every Grace Technologies website is crafted bespoke from the ground up to match the unique identity, operational needs, and commercial objectives of your business.',
      },
      {
        question: 'Can you integrate third-party APIs and CRM systems?',
        answer: 'Yes. We routinely build robust integrations with leading CRMs, ERPs, payment gateways, marketing platforms, and proprietary enterprise software.',
      },
      {
        question: 'Who owns the intellectual property and code upon completion?',
        answer: 'Upon project settlement, full ownership of the custom code, digital assets, and repository is transferred completely to your business.',
      },
    ],
  },
  {
    id: 'merchant-account-management',
    number: '02',
    title: 'Merchant Account Management',
    shortTitle: 'Merchant Operations',
    tagline: 'Merchant Account Creation & Product Catalog Operations.',
    headline: 'End-to-End Merchant Onboarding, Account Setup & Product Catalog Management.',
    description:
      'We manage the entire lifecycle of merchant store operations — from initial merchant account creation and verification to complete digital product listing, catalog taxonomy, inventory synchronization, and ongoing payment operations.',
    route: '/services/merchant-account-management',
    capabilities: [
      {
        title: 'Merchant Account Creation & Onboarding',
        description: 'Complete setup and verification of merchant portals across leading international acquiring and commerce platforms.',
      },
      {
        title: 'Product Catalog & Listing Architecture',
        description: 'Professional product data ingestion, high-resolution media structuring, SKU classification, and SEO-optimized title formatting.',
      },
      {
        title: 'Documentation & KYC Compliance Advisory',
        description: 'Advising on compliance dossiers, identity verification, anti-fraud guidelines, and banking underwriting requirements.',
      },
      {
        title: 'Ongoing Merchant Store Administration',
        description: 'Daily operational maintenance, dispute mitigation, fee reconciliation, and product catalog promotions management.',
      },
    ],
    benefits: [
      {
        title: 'Frictionless Account Launch',
        description: 'Bypass technical and administrative roadblocks with turnkey merchant account registration and rapid verification.',
      },
      {
        title: 'Optimized Product Discovery',
        description: 'Structured product listings with rich metadata, high search visibility, and conversion-focused product descriptions.',
      },
      {
        title: 'Eliminated Operational Bottlenecks',
        description: 'Free your executive team from daily catalog updates, inventory reconciliations, and underwriting paperwork.',
      },
      {
        title: 'Global Multi-Currency Readiness',
        description: 'Accept payments internationally with configured localized checkout currencies and streamlined settlement paths.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Account Creation & Verification',
        description: 'Submitting corporate registration, underwriting dossiers, and verifying merchant business portals.',
      },
      {
        step: '02',
        title: 'Store & Gateway Configuration',
        description: 'Configuring payment gateways, currencies, shipping policies, and dispute handling workflows.',
      },
      {
        step: '03',
        title: 'Product Ingestion & Catalog Setup',
        description: 'Formatting SKUs, uploading assets, writing optimized descriptions, and configuring inventory sync.',
      },
      {
        step: '04',
        title: 'Live Launch & Daily Management',
        description: 'Monitoring live transactions, updating stock listings, managing catalog additions, and optimizing operations.',
      },
    ],
    faqs: [
      {
        question: 'Do you manage product listings across platforms like Shopify, Amazon, and Stripe?',
        answer: 'Yes. We handle merchant account creation, verification, and product catalog management across Shopify, Stripe, Amazon, WooCommerce, and custom headless enterprise commerce architectures.',
      },
      {
        question: 'Are you a bank or payment processor?',
        answer: 'No. Grace Technologies is a business and technology consultancy providing merchant account setup, product catalog listing management, and operational advisory. We are neither a bank, financial institution, nor payment processor.',
      },
      {
        question: 'How do you handle bulk product imports and SKU updates?',
        answer: 'We deploy automated data transformation pipelines and headless APIs to ingest thousands of SKUs, format specifications, and maintain real-time inventory synchronization.',
      },
      {
        question: 'Do you help with ongoing store operations after account setup?',
        answer: 'Yes. We offer continuous merchant management retainers that cover new product launches, catalog revisions, transaction reconciliations, and ongoing provider liaison.',
      },
    ],
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    shortTitle: 'AI Automation',
    tagline: 'Intelligence That Works for Your Business.',
    headline: 'Turn Repetitive Work Into Intelligent Workflows.',
    description:
      'Automate repetitive operations, connect workflows and introduce practical AI-powered solutions.',
    route: '/services/ai-automation',
    capabilities: [
      {
        title: 'Business Process Automation',
        description: 'End-to-end orchestration of manual business operations into automated, reliable digital pipelines.',
      },
      {
        title: 'AI Customer Support Engines',
        description: 'Custom intelligent conversational agents trained securely on your proprietary enterprise knowledge base.',
      },
      {
        title: 'Workflow Automation',
        description: 'Seamless integration between CRM, ERP, email, and cloud tools to eliminate redundant data entry.',
      },
      {
        title: 'Document & OCR Processing',
        description: 'Automated extraction, classification, and validation of invoices, receipts, contracts, and legal documents.',
      },
      {
        title: 'Data Pipelines & Automation',
        description: 'Clean ingestion, transformation, and automated real-time reporting across heterogeneous enterprise data sources.',
      },
      {
        title: 'Enterprise AI Integrations',
        description: 'Secure API integrations with frontier language models, visual reasoning systems, and machine intelligence models.',
      },
      {
        title: 'Custom AI Solutions',
        description: 'Bespoke algorithmic tools specifically tailored to your industry, compliance bounds, and computational requirements.',
      },
    ],
    benefits: [
      {
        title: 'Dramatic Cost Reduction',
        description: 'Reclaim hundreds of hours monthly by offloading repetitive human workflows to high-precision automated systems.',
      },
      {
        title: 'Zero Human Ingestion Error',
        description: 'Achieve near-perfect accuracy across invoice intake, document verification, and cross-system data synchronisation.',
      },
      {
        title: '24/7 Operational Agility',
        description: 'Intelligent systems work unceasingly around the clock, fielding inquiries and processing data in real time.',
      },
      {
        title: 'Accelerated Team Velocity',
        description: 'Free up high-value personnel to focus on client strategy, creative problem solving, and revenue growth.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Process Mapping',
        description: 'Identifying high-friction repetitive bottlenecks across your existing operational and administrative workflows.',
      },
      {
        step: '02',
        title: 'Architecture & Model Selection',
        description: 'Designing safe data ingestion pipelines and selecting the optimal AI models with strict data privacy boundaries.',
      },
      {
        step: '03',
        title: 'Implementation & Testing',
        description: 'Developing connectors, configuring validation logic, and simulating edge cases in sandbox environments.',
      },
      {
        step: '04',
        title: 'Deployment & Continuous Learning',
        description: 'Deploying into live production, establishing human-in-the-loop oversight, and refining model accuracy over time.',
      },
    ],
    faqs: [
      {
        question: 'Will our proprietary company data be used to train public AI models?',
        answer: 'Never. We deploy enterprise-grade architectures with strict zero-data-retention agreements and isolated private embeddings ensuring your data remains 100% confidential.',
      },
      {
        question: 'Do we need a massive dataset to get started?',
        answer: 'Not at all. Practical AI automation frequently begins with standard operational documents (PDFs, spreadsheets, email templates) and existing software tools.',
      },
      {
        question: 'Can you integrate AI into our existing legacy software?',
        answer: 'Yes. Using modern APIs, webhooks, and secure integration middleware, we bridge modern AI reasoning with existing legacy ERPs and internal databases.',
      },
      {
        question: 'How do you handle edge cases and mistakes?',
        answer: 'We build "human-in-the-loop" thresholds. When confidence scores fall below pre-set parameters, tasks are gracefully routed to human staff with full context.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    tagline: 'Visibility That Creates Opportunity.',
    headline: 'Make Your Business Impossible to Ignore.',
    description:
      'Grow online visibility, reach relevant audiences and build measurable digital marketing strategies.',
    route: '/services/digital-marketing',
    capabilities: [
      {
        title: 'Search Engine Optimisation (SEO)',
        description: 'Technical, on-page, and authority engineering to secure prominent rankings for commercially vital queries.',
      },
      {
        title: 'Local SEO & Geo-Targeting',
        description: 'Dominating localized searches across key UK and international business hubs with strategic citation architecture.',
      },
      {
        title: 'Social Media Strategy',
        description: 'Positioning your corporate leadership through bespoke, high-authority content across LinkedIn and key platforms.',
      },
      {
        title: 'Content Marketing & Editorial',
        description: 'In-depth whitepapers, case studies, and thought leadership articles that establish unmistakable industry authority.',
      },
      {
        title: 'Paid Search & Social Advertising',
        description: 'Precision-targeted PPC and paid social campaigns optimized for high return on ad spend (ROAS) and quality leads.',
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        description: 'Data-driven multivariate testing, funnel analysis, and user journey optimization to maximize lead capture.',
      },
      {
        title: 'Marketing Analytics & Attribution',
        description: 'Clean end-to-end attribution reporting connecting marketing expenditure directly to closed enterprise revenue.',
      },
    ],
    benefits: [
      {
        title: 'Predictable Pipeline Growth',
        description: 'Transform organic search and precision paid channels into dependable sources of qualified inbound opportunities.',
      },
      {
        title: 'Elevated Industry Authority',
        description: 'Be seen as the benchmark standard in your domain through authoritative content and premium brand placement.',
      },
      {
        title: 'Transparent ROI Tracking',
        description: 'Clear reporting dashboards stripped of vanity metrics, focused exclusively on customer acquisition cost and lifetime value.',
      },
      {
        title: 'Multi-Channel Synergy',
        description: 'Cohesive narrative messaging across search, paid media, and social channels amplifying brand trust at every touchpoint.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Market & Competitor Audit',
        description: 'Analyzing search intent, competitive positioning, audience demographics, and unexploited market opportunities.',
      },
      {
        step: '02',
        title: 'Strategic Roadmap Creation',
        description: 'Formulating content blueprints, SEO technical remediation plans, and targeted paid acquisition frameworks.',
      },
      {
        step: '03',
        title: 'Execution & Distribution',
        description: 'Deploying high-impact content, running targeted ad sets, and engineering technical site authority.',
      },
      {
        step: '04',
        title: 'Measurement & Optimisation',
        description: 'Continuous analysis of attribution data, CRO iterations, and systematic scaling of winning channels.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can we expect to see results from SEO?',
        answer: 'While technical fixes and quick-win keyword targets often generate traction within 4 to 8 weeks, significant compound organic growth typically solidifies over a 3 to 6-month timeframe.',
      },
      {
        question: 'Do you manage ad spend directly?',
        answer: 'Yes, we manage performance advertising campaigns across Google Ads, LinkedIn Ads, and Meta, ensuring continuous budget optimization and conversion tracking.',
      },
      {
        question: 'How do you measure marketing success?',
        answer: 'We evaluate success based on qualified leads, cost-per-acquisition (CPA), conversion rates, and pipeline revenue contribution rather than vanity impressions.',
      },
      {
        question: 'Can you work alongside our internal marketing team?',
        answer: 'Absolutely. We frequently collaborate with internal marketing directors, providing specialized technical SEO, CRO audits, and campaign scaling expertise.',
      },
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Professional Services',
    description: 'Bespoke web architectures, automated client onboarding workflows, and authority-building digital strategies for consultancies and legal firms.',
    stats: 'Authority & Scale',
  },
  {
    title: 'Retail and E-commerce',
    description: 'High-speed headless commerce platforms, seamless merchant payment coordination, and multi-channel acquisition campaigns.',
    stats: 'Frictionless Sales',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Secure, privacy-conscious digital interfaces, intelligent scheduling automation, and accessible patient information portals.',
    stats: 'Security & Trust',
  },
  {
    title: 'Financial & Business Services',
    description: 'Institutional-grade interfaces, merchant account operational support, and rigorous data protection compliance.',
    stats: 'Operational Rigor',
  },
  {
    title: 'Education & EdTech',
    description: 'Dynamic learning platforms, administrative workflow automation, and student acquisition marketing funnels.',
    stats: 'Engaging Reach',
  },
  {
    title: 'Small and Medium Enterprises',
    description: 'End-to-end digital transformation enabling ambitious mid-market enterprises to outmanoeuvre larger incumbents.',
    stats: 'High Impact Growth',
  },
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves into your commercial model, operational friction points, and overarching growth ambitions.',
  },
  {
    number: '02',
    title: 'Strategise',
    description: 'We architect the precise technical blueprint, choosing the most effective frameworks, integrations, and milestones.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Our UK and Indian engineering teams build, test, and implement production-grade solutions with rigorous quality assurance.',
  },
  {
    number: '04',
    title: 'Evolve',
    description: 'We provide ongoing technical support, continuous performance monitoring, and iterative enhancements as you scale.',
  },
];
