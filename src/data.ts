import {
  Venture,
  ServiceGroup,
  TimelineEvent,
  Article,
  WritingProject,
  Testimonial,
  Principle
} from './types';

export const SITE_URL = "https://www.sanketkul.in/";

export const CONTACT = {
  email: "sanket@smarkitalstech.com",
  linkedin: "https://www.linkedin.com/in/sanketkulshrestha/",
  instagram: "https://www.instagram.com/sanket.as_/",
  whatsapp: "https://wa.me/918118880629",
  base: "Delhi, India",
  availability: "Working with clients across India"
};

export const EXECUTIVES_META = {
  name: "Sanket Kulshrestha",
  positioning: "Founder, Smarkitals Group | Business Strategy & Operations Advisor",
  roles: [
    { title: "Managing Partner", org: "Smarkitals Strategist LLP" },
    { title: "Founder", org: "Smarkitals Technologies India Pvt Ltd" }
  ],
  headlines: {
    primary: "Business First. Controls Second.",
    sub: "Start with what the business is trying to achieve. Then build the processes, reporting and checks that help the team deliver it, sized to the risk and the stage of the business, not copied from a template."
  },
  legacy: {
    established: 1985,
    label: "Advisory roots since 1985",
    history: "My family's advisory work began in 1985 as a personal consulting practice built on long-term client relationships. That history shaped how I see business, but it is separate from my own career, which began in 2020, and from the Smarkitals entities, which were set up more recently."
  },
  biography: [
    "My professional foundation is in internal audit and risk advisory. At Deloitte and at SS Kothari Mehta & Co., I worked on internal audits, internal controls, SOPs, process reviews and governance, which meant spending a lot of time inside businesses understanding how work actually gets done.",
    "Across that work I saw businesses in manufacturing, retail, consumer brands, industrial and technology sectors, as well as founder-led companies. A pattern kept repeating: teams were working hard, but leadership lacked clear numbers, roles were unclear and plans were not turned into day-to-day routines.",
    "Today I lead Smarkitals Strategist LLP as Managing Partner, advising founders, SMEs and growing organisations on strategy, operations, risk and governance. Through Smarkitals Technologies, which I founded, I build business software and workflow automation so that good processes do not depend on spreadsheets and memory.",
    "I have also worked with NGOs for several years on their operations. That experience is now shaping NGOSutra, an NGO operations platform I am building, and my support for the development of Mel Milap Foundation."
  ]
};

export const PRINCIPLES: Principle[] = [
  {
    title: "Execution over ideas",
    description: "A plan only matters once it has owners, timelines and a regular review."
  },
  {
    title: "Controls in proportion",
    description: "Checks should match the size of the risk. Too few cause losses; too many slow the team down."
  },
  {
    title: "Technology that simplifies",
    description: "Software should remove repetitive manual work and make information easier to trust, not add complexity."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2020",
    title: "Started in the family practice",
    description: "Began as an intern in the family consulting practice, with exposure to finance, advisory work, business operations and client management."
  },
  {
    year: "2021–2022",
    title: "Operational responsibilities",
    description: "Took on operational responsibilities and supported business execution work, working closely with business owners and leadership teams."
  },
  {
    year: "2022",
    title: "Moved into consulting and risk advisory",
    description: "Began working in consulting and risk advisory, focused on governance, risk management, process improvement and operational effectiveness."
  },
  {
    year: "2023",
    title: "Smarkitals Strategist LLP incorporated",
    description: "The family incorporated Smarkitals Strategist LLP. I supported its engagements as a consulting associate and independent advisor."
  },
  {
    year: "2023–2025",
    title: "Internal audit and risk advisory",
    description: "Worked in internal audit and risk advisory, including at Deloitte and SS Kothari Mehta & Co., covering internal controls, SOPs, process reviews and governance."
  },
  {
    year: "2025",
    title: "Founded Smarkitals Technologies",
    description: "Founded Smarkitals Technologies India Pvt Ltd to build business software and workflow automation."
  },
  {
    year: "April 2025",
    title: "Acting Managing Partner",
    description: "Became Acting Managing Partner of Smarkitals Strategist LLP."
  },
  {
    year: "April 2026",
    title: "Managing Partner",
    description: "Became Managing Partner of Smarkitals Strategist LLP."
  },
  {
    year: "Present",
    title: "Advisory, products and social impact",
    description: "Advising founders, SMEs and growing organisations; building NGOSutra; and supporting the development of Mel Milap Foundation."
  }
];

export const GROUP_INTRO = "Smarkitals Group is the umbrella brand for my consulting, technology and social-impact work. Each entity below is listed with its legal form, my role and its current status.";

export const VENTURES: Venture[] = [
  {
    id: "smarkitals-strategist",
    name: "Smarkitals Strategist LLP",
    kind: "Entity",
    entityType: "Limited Liability Partnership",
    role: "Managing Partner",
    status: "Operating",
    parent: "Smarkitals Group",
    summary: "A consulting practice that helps founders and leadership teams with business strategy, operations, risk, governance, process improvement and execution support.",
    available: [
      "Business strategy and planning",
      "Operations and process improvement",
      "Risk, internal controls and governance reviews",
      "Execution support and management reporting"
    ]
  },
  {
    id: "smarkitals-technologies",
    name: "Smarkitals Technologies India Pvt Ltd",
    kind: "Entity",
    entityType: "Private Limited Company",
    role: "Founder",
    status: "Operating",
    parent: "Smarkitals Group",
    summary: "Builds technology products, business software and workflow automation for businesses and organisations.",
    available: [
      "Custom business software",
      "Workflow automation",
      "Management dashboards and reporting tools"
    ],
    inDevelopment: ["NGOSutra, an NGO operations platform"],
    verifiedLink: { label: "smarkitalstech.com", href: "https://www.smarkitalstech.com/" }
  },
  {
    id: "ngosutra",
    name: "NGOSutra",
    kind: "Product",
    entityType: "NGO operations platform",
    status: "In development",
    parent: "Smarkitals Technologies India Pvt Ltd",
    summary: "A platform being built to help NGOs run fundraising, donor management and reporting in one place.",
    inDevelopment: [
      "Location-wise fundraising tracking",
      "Donor records",
      "Campaign and project reporting",
      "Payment and ledger tagging",
      "Receipt generation",
      "Donor communication",
      "Role-based permissions"
    ],
    note: "These features are planned or in development. NGOSutra is not yet available for use."
  },
  {
    id: "mel-milap",
    name: "Mel Milap Foundation",
    kind: "Initiative",
    entityType: "Social-impact initiative",
    role: "Supporting its development",
    status: "In development",
    parent: "A Smarkitals Group initiative",
    summary: "A social-impact initiative being developed with an intended focus on food access, education for underserved communities and animal welfare.",
    inDevelopment: [
      "Food access",
      "Education for underserved communities",
      "Animal welfare"
    ],
    note: "The foundation is still being set up. Details of programmes and ways to get involved will be shared here once they are confirmed."
  }
];

export const SERVICES: ServiceGroup[] = [
  {
    id: "founder-advisory",
    title: "Founder and business advisory",
    iconName: "Compass",
    whoItHelps: "Founders and owners of early-stage, family-run and growing businesses.",
    problems: [
      "Too many priorities and no clear order",
      "Decisions made without reliable numbers",
      "Growth plans that do not turn into weekly action",
      "The founder as the bottleneck for most decisions"
    ],
    deliverables: [
      "Business review and priority list",
      "Operating model with roles and decision rights",
      "Execution roadmap with owners and timelines",
      "Cash-flow plan and monthly review routine"
    ]
  },
  {
    id: "operations",
    title: "Operations and business transformation",
    iconName: "Workflow",
    whoItHelps: "SMEs and growing teams whose processes still depend on a few people and informal habits.",
    problems: [
      "Repeated errors and rework",
      "Slow handoffs between teams",
      "Work that stops when one person is away",
      "Little visibility of what is happening day to day"
    ],
    deliverables: [
      "Process reviews and process maps",
      "SOPs written for the people who use them",
      "Management dashboards and KPI definitions",
      "Scoping for workflow automation"
    ]
  },
  {
    id: "risk-controls",
    title: "Risk, internal controls and governance",
    iconName: "ShieldCheck",
    whoItHelps: "Businesses preparing to scale, raise funds or face audits, and owners who want better oversight.",
    problems: [
      "Leakages and weak approval steps",
      "Audit observations that keep coming back",
      "Unclear accountability for key decisions",
      "Controls that are either missing or too heavy"
    ],
    deliverables: [
      "Internal-control assessments",
      "Risk register and risk-control matrix",
      "Approval policies and delegation of authority",
      "Remediation plan and progress tracking"
    ]
  },
  {
    id: "ngo-operations",
    title: "NGO operations and technology systems",
    iconName: "HeartHandshake",
    whoItHelps: "NGOs and social-impact teams that are growing their fundraising and programmes.",
    problems: [
      "Fundraising and donor data spread across spreadsheets",
      "Slow, manual reporting to donors",
      "Funds that are hard to trace to projects",
      "Unclear approvals for receipts and payments"
    ],
    deliverables: [
      "Fundraising and donor-management process design",
      "Fund and project tagging structure",
      "Donor and project reporting templates",
      "System requirements for NGO software"
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Why Governance Must Come Before Growth",
    category: "Strategy",
    summary: "Growing quickly on weak processes usually creates problems later. Basic governance (clear decision rights, simple reporting and a few key checks) is easier to set up early than to fix after something goes wrong."
  },
  {
    id: "art-2",
    title: "Strategic Advisory Beyond Compliance",
    category: "Risk advisory",
    summary: "Risk work is often reduced to checklists. Done well, it also looks at process bottlenecks, leakages and business risks, and gives leadership information they can act on."
  },
  {
    id: "art-3",
    title: "Technology for Traditional Businesses",
    category: "Technology",
    summary: "Traditional businesses do not need to rebuild everything to benefit from technology. Small, well-chosen automation that fits how people already work can remove manual effort and errors."
  }
];

export const WRITING_PROJECTS: WritingProject[] = [
  {
    id: "goodbye-we-missed",
    name: "The Goodbye We Missed",
    format: "Novel",
    description: "An Indian contemporary young-adult novel.",
    status: "Work in progress"
  },
  {
    id: "also-sanket",
    name: "also.sanket",
    format: "Social commentary",
    description: "Social commentary and personal perspectives."
  },
  {
    id: "sanketxstrategy",
    name: "sanketxstrategy",
    format: "Business writing",
    description: "Business and strategy content."
  }
];

/**
 * Only testimonials with a named company and a source are published.
 * Earlier entries were removed because they had neither.
 */
export const TESTIMONIALS: Testimonial[] = [];
