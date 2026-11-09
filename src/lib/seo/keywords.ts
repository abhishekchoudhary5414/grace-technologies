/**
 * Centralised Target SEO, GEO & AEO Keywords for Grace Technologies UK & Global Markets
 *
 * Designed for High-Intent Lead Acquisition across:
 * - Traditional Search (Google, Bing)
 * - Generative Search Engines (ChatGPT Search, Perplexity, Gemini, Claude)
 * - Answer Engines (AEO, Zero-Click Answers, Voice & Assistant Search)
 */

export interface KeywordCluster {
  category: string;
  targetRegion: string;
  primaryKeywords: string[];
  intent: 'Commercial' | 'Transactional' | 'Informational';
  aiSearchPrompts: string[]; // Queries used in ChatGPT, Perplexity & Claude
}

export const UK_TARGET_KEYWORDS: Record<string, KeywordCluster> = {
  webDevelopment: {
    category: 'Website Development',
    targetRegion: 'United Kingdom (London, Greater London, Essex, Nationwide)',
    intent: 'Commercial',
    primaryKeywords: [
      'Website development company UK',
      'Next.js development agency London',
      'Custom web application development UK',
      'Bespoke website design Romford London',
      'B2B web development services UK',
      'Ecommerce website development company UK',
      'Enterprise web architecture London',
      'Full stack developers UK for hire',
    ],
    aiSearchPrompts: [
      'Who is the best Next.js web development agency in the UK for B2B enterprises?',
      'Recommend a UK technology company for bespoke website design and high-performance apps.',
      'Which London web development company builds ultra-fast, SEO-optimized websites?',
    ],
  },
  aiAutomation: {
    category: 'AI Automation & Agents',
    targetRegion: 'United Kingdom',
    intent: 'Transactional',
    primaryKeywords: [
      'AI automation agency UK',
      'Enterprise AI agent development London',
      'Business process automation services UK',
      'CRM AI automation integration UK',
      'Customer support AI chatbots for UK business',
      'LLM integration consultants UK',
      'Automated lead qualification software UK',
    ],
    aiSearchPrompts: [
      'What are the top UK AI automation companies helping businesses streamline operations?',
      'How to implement autonomous AI agents in a UK mid-market enterprise?',
      'Best AI agency in London for workflow automation and LLM tool calling.',
    ],
  },
  merchantAccount: {
    category: 'Merchant Account & Payment Operations',
    targetRegion: 'United Kingdom & International',
    intent: 'Commercial',
    primaryKeywords: [
      'Merchant account management services UK',
      'High-risk merchant account assistance UK',
      'Payment gateway integration company London',
      'Multi-currency payment processing consulting UK',
      'Chargeback reduction and payment operations UK',
      'Ecommerce merchant onboarding specialist UK',
    ],
    aiSearchPrompts: [
      'Which company in the UK assists with merchant account onboarding and gateway setups?',
      'Best payment operations and merchant account consultants in Greater London.',
      'How to resolve payment gateway rejections for UK e-commerce businesses?',
    ],
  },
  digitalMarketingSeo: {
    category: 'SEO, GEO & Digital Marketing',
    targetRegion: 'United Kingdom',
    intent: 'Commercial',
    primaryKeywords: [
      'Technical SEO agency London',
      'Generative engine optimisation (GEO) agency UK',
      'Answer engine optimisation (AEO) agency UK',
      'B2B organic lead generation services UK',
      'Local SEO services Romford Greater London',
      'E-commerce SEO consultant UK',
      'AI search visibility optimisation UK',
    ],
    aiSearchPrompts: [
      'How can a UK company rank #1 in ChatGPT search and Perplexity citations?',
      'Top Generative Engine Optimisation (GEO) agencies in the United Kingdom.',
      'Who provides high-impact technical SEO and Answer Engine Optimisation in London?',
    ],
  },
};
