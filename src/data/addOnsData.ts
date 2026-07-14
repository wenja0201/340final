/* Add-ons — real copy from the client handover, grouped into categories.
 * Per the layout PDF, the Add-ons block lives on the Social Media Management
 * service page (not the services overview). Shared here so both can import. */

export interface AddOnItem {
  name: string;
  text: string;
}

export interface AddOnCategory {
  category: string;
  items: AddOnItem[];
}

export const ADD_ONS_INTRO = 'Everything below is optional and available as custom add-on services.';
export const ADD_ONS_OUTRO = 'Exact pricing is scoped in your intake call based on platforms, volume, and goals.';

export const ADD_ONS: AddOnCategory[] = [
  {
    category: 'CONTENT & CREATIVE',
    items: [
      { name: 'Copywriting', text: 'Platform-native captions, hooks, and copy written for you.' },
      { name: 'Content creation', text: 'Graphics, carousels, and visuals aligned to your brand.' },
      { name: 'Video editing', text: 'Short-form editing for Reels, TikTok, and Shorts.' },
    ],
  },
  {
    category: 'ENGAGEMENT & GROWTH',
    items: [
      { name: 'Community management', text: 'Extra engagement, the better your content performs. DMs, comments, and daily engagement handled for you.' },
      { name: 'Extra platforms', text: 'Extend management to a second or third platform.' },
      { name: 'Paid social / ads', text: 'Ad setup, copy, and performance management.' },
    ],
  },
  {
    category: 'SUPPORT & REPORTING',
    items: [
      { name: '24/7 emergency support', text: 'On-call response for urgent brand moments or crises.' },
      { name: 'Extra check-ins', text: 'Weekly or bi-weekly calls on top of your monthly base.' },
    ],
  },
  {
    category: 'ONE-TIME SERVICES',
    items: [
      { name: 'One-time strategy', text: 'A one-time social media strategy before starting management.' },
      { name: 'Social media audit', text: 'Full review of your current presence, gaps, and opportunities.' },
      { name: 'Profile optimisation', text: 'Bio, highlights, links, and first-impression polish across platforms.' },
      { name: 'Competitor analysis', text: 'In-depth report on what your competitors are doing.' },
    ],
  },
];

/* Add-ons for the Social Media Strategy service page. */
export const STRATEGY_ADD_ONS_INTRO = 'Everything below is optional and available as custom add-on services.';
export const STRATEGY_ADD_ONS_OUTRO = 'Exact pricing is scoped with you during the intake call.';

export const STRATEGY_ADD_ONS: AddOnCategory[] = [
  {
    category: 'CREATIVE',
    items: [
      { name: 'Extra post prototypes', text: 'Want your strategy to feel more tangible? Get additional post-ready content concepts.' },
      { name: 'SEO keywords & hashtags', text: 'Receive SEO-optimized keywords and hashtags to improve discoverability across social platforms.' },
      { name: 'Prototype captions', text: 'Ready-to-use captions for your content prototypes.' },
    ],
  },
  {
    category: 'STRATEGY',
    items: [
      { name: 'Social media audit', text: 'A full review of your current social presence to identify strengths, gaps, opportunities, and your baseline.' },
      { name: 'Paid ad strategy', text: 'Strategic recommendations for paid social advertising.' },
      { name: 'Community management strategy', text: 'Tactics for growing and engaging your online community.' },
      { name: 'Geotargeting strategy', text: 'Recommendations for reaching local audiences through organic and paid tactics.' },
    ],
  },
  {
    category: 'RESEARCH & INSIGHTS',
    items: [
      { name: 'Competitor analysis', text: "An in-depth review of your competitors' social media presence." },
      { name: 'Inspiration analysis', text: "A breakdown of an inspirational brand's social media strategy and content." },
      { name: 'Additional profile optimization', text: 'Biography and profile optimization for any extra social platform.' },
    ],
  },
];
