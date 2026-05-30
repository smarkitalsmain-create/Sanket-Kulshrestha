import { 
  Venture, 
  ExpertiseItem, 
  TimelineEvent, 
  MetricItem, 
  Article, 
  MediaItem, 
  Testimonial,
  PhilosophyPrinciple 
} from './types';

export const EXECUTIVES_META = {
  name: "Sanket Kulshrestha",
  titles: [
    "Strategic Risk Advisor",
    "Business Execution Consultant",
    "Entrepreneur",
    "Managing Partner",
    "Founder",
    "Operator",
    "Startup Venture Consultant",
    "Business Transformation Advisor"
  ],
  headlines: {
    primary: "Business First. Controls Second.",
    sub: "Helping founders, SMEs, and growing enterprises build stronger, more resilient businesses through strategic risk advisory, operational structure, and long-term business stewardship."
  },
  legacy: {
    established: 1985,
    tagline: "40 Years of Legacy. Built for the Next 40 Years.",
    history: "The advisory roots of the family date back to 1985. This journey started as a personal advisory and consulting practice built on relationships, trust and long-term business involvement. Today, Sanket represents the next generation leading and modernizing that legacy, building businesses that endure."
  },
  biography: [
    "I work at the intersection of strategic risk advisory, business execution and growth.",
    "While my professional roots are in Internal Audit and Risk Advisory, my real work has always been understanding how businesses actually function, where they struggle and how they can operate better.",
    "Over the years I have worked across manufacturing, retail, consumer brands, industrial businesses, technology companies and founder-led organizations.",
    "This exposure led me to one simple conclusion:",
    "Most businesses do not struggle because people are not working hard. They struggle because leadership lacks visibility, teams lack alignment and execution lacks structure.",
    "Today I work with founders and leadership teams to bring clarity into operations, financial decision making and growth strategy.",
    "My focus is helping businesses create systems that scale, teams that stay aligned and strategies that get executed."
  ]
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2020",
    title: "Foundations & Internship",
    description: "Started professional journey as an intern within the family consulting practice. Gained exposure to finance, advisory, business operations and client management."
  },
  {
    year: "2021–2022",
    title: "Operational Responsibilities",
    description: "Began leading operational responsibilities and supporting business execution initiatives. Worked closely with business owners and leadership teams."
  },
  {
    year: "2022",
    title: "Strategic Consulting & Risk Advisory",
    description: "Started journey into Strategic Consulting and Risk Advisory. Focused on governance, risk management, business improvement and operational effectiveness."
  },
  {
    year: "2023",
    title: "Smarkitals Strategist LLP Incorporation",
    description: "Family incorporated Smarkitals Strategist LLP. Supported engagements as a consulting associate and independent advisor."
  },
  {
    year: "2023–2025",
    title: "Global Consulting Standards Alignment",
    description: "Worked across projects and consulting environments aligned with global professional standards including Deloitte, EY and BCG ecosystems. Expanded expertise across Strategy, Governance, Risk, Business Operations, Transformation, Financial Analysis, and Decision Support."
  },
  {
    year: "2025",
    title: "Founded Smarkitals Technologies",
    description: "Founded Smarkitals Technologies India Pvt Ltd. Focused on technology-led business advisory, automation platforms and SaaS products."
  },
  {
    year: "April 2025",
    title: "Acting Managing Partner",
    description: "Acting Managing Partner of Smarkitals Strategist LLP, modernizing consulting methodologies and driving business scaling."
  },
  {
    year: "April 2026",
    title: "Managing Partner",
    description: "Managing Partner of Smarkitals Strategist LLP, leading the enterprise's strategic initiatives and operations."
  },
  {
    year: "Present",
    title: "Startup Venture Consulting & Advisor",
    description: "Practicing as a Startup Venture Consultant and Strategic Advisor for founders, SMEs and growing businesses across India."
  }
];

export const VENTURES: Venture[] = [
  {
    id: "smarkitals-strategist",
    name: "Smarkitals Strategist LLP",
    tagline: "Strategic Consulting & Advisory",
    mission: "To guide rapidly scaling enterprises through structural complexities and install institutional frameworks that foster long-term commercial longevity and growth.",
    purpose: "Bridging the gap between regulatory compliance requirements and agile strategic execution for ambitious mid-market companies.",
    currentFocus: "Broad-spectrum corporate management consulting, standardizing risk advisory systems, and optimizing operational workflows.",
    futureVision: "Establishing Smarkitals Strategist LLP as a premier, trust-first global partnership known for transforming ambitious family businesses into corporate institutions."
  },
  {
    id: "smarkitals-technologies",
    name: "Smarkitals Technologies India Pvt Ltd",
    tagline: "Technology Advisory & Venture Studio",
    mission: "To design, develop, and deploy robust technological systems that synthesize heavy operational workflows into automated executive clarity and systems.",
    purpose: "Developing bespoke internal software frameworks, workflow automation engines, and reliable enterprise resource architectures.",
    currentFocus: "Engineering systemized compliance structures and smart reporting channels for multiple service verticals.",
    futureVision: "Becoming a leading technology incubator, housing a suite of enterprise SaaS applications in workflow automation and business intelligence."
  },
  {
    id: "merceton",
    name: "Merceton",
    tagline: "Commerce Enablement Platform",
    mission: "To arm high-growth digital merchants with frictionless corporate structuring, absolute operational parity, and active supply-chain risk mitigation.",
    purpose: "Simplifying commercial ledger integrity, optimizing financial structures, and mapping financial risk in commerce flows.",
    currentFocus: "Structuring transparent vendor ledgers, capital reserve modeling, and automating operational audits in digital commerce.",
    futureVision: "A comprehensive commerce enablement ecosystem that links working-capital solutions directly to autonomous operational assurance."
  },
  {
    id: "bizpulse",
    name: "BizPulse",
    tagline: "Business Audit Intelligence Platform",
    mission: "To remove administrative latency from high-frequency auditing, implementing predictive, real-time risk checks and workflow metrics.",
    purpose: "Continuous internal controls analysis, automated process auditing, and stress-testing operational structures on the fly.",
    currentFocus: "Deploying automated validation scripts and building systems stress logs for mid-size enterprise clients.",
    futureVision: "An autonomous digital advisory engine that integrates directly with corporate systems, continuously identifying leakages and enforcing corporate governance."
  },
  {
    id: "smarkitals-family-office",
    name: "Smarkitals Family Office",
    tagline: "Wealth Preservation & Strategic Stewardship",
    mission: "Nurturing long-term private capital pools, direct investment portfolios, and strategic business interests across generations.",
    purpose: "Preserving generational wealth, driving business stewardship, and reviewing investment opportunities with high margin of safety.",
    currentFocus: "Direct corporate equity investments, real-estate assets mapping, and managing high-conviction early-stage venture portfolios.",
    futureVision: "An institutional pillar of stewardship, backing visionaries and funding resilient business infrastructures for sustainable multi-decade compounding."
  }
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: "biz-strategy",
    title: "Business Strategy",
    description: "Converting high-level founder visions into structured operations, actionable strategic benchmarks, and resilient business models.",
    iconName: "TrendingUp",
    details: ["Market expansion modeling", "Strategic joint-venture structuring", "Vulnerability mapping", "Value-chain optimization"]
  },
  {
    id: "risk-advisory",
    title: "Strategic Risk Advisory",
    description: "Proactively forecasting and neutralizing financial, technological, and corporate-governance risks across multi-layer organizations.",
    iconName: "AlertTriangle",
    details: ["Enterprise risk mitigation structures", "Regulatory stress testing", "Fraud prevention design", "Systemic control frameworks"]
  },
  {
    id: "process-improvement",
    title: "Process Improvement",
    description: "Pinpointing design flaws in organizational workflows, then restructuring them with standard automated pipelines to eliminate manual waste.",
    iconName: "Zap",
    details: ["BPM (Business Process Mapping)", "Standard Operating Procedure (SOP) design", "Workflow cycle-time reduction", "Bottleneck mitigation"]
  },
  {
    id: "governance",
    title: "Corporate Governance",
    description: "Designing the systems, board dynamics, and clear decision paths that transform individual-led companies into long-term institutions.",
    iconName: "Scale",
    details: ["Board of directors advisory", "Corporate governance blueprints", "Ethical code development", "Shareholder interest synchronization"]
  },
  {
    id: "tech-consulting",
    title: "Business Automation Tech",
    description: "Translating digital complexity into practical enterprise utility, advising on high-return software builds and secure network hierarchies.",
    iconName: "Cpu",
    details: ["Bespoke software architecture auditing", "ERP selection and deployment", "Inherent systems integration planning", "Tech stack modernization strategies"]
  },
  {
    id: "financial-planning",
    title: "Financial Analysis",
    description: "Structuring deep financial reports, cashflow reserve plans, capital budgeting frameworks, and tax-efficient strategies to support scaling.",
    iconName: "Coins",
    details: ["Capital structure auditing", "Cashflow buffer strategies", "Working capital management", "Budget forecasting arrays"]
  },
  {
    id: "startup-advisory",
    title: "Startup Venture Consulting",
    description: "Coaching early-stage founders to construct bulletproof unit economics and governance models that satisfy high-level institutional investors.",
    iconName: "Lightbulb",
    details: ["Unit economics stress testing", "Governance modeling for funding rounds", "Operational bootstrap roadmap planning", "Cap table strategy advisory"]
  },
  {
    id: "biz-setup",
    title: "Business Setup Consulting",
    description: "Directing the end-to-end framework layout, licensing, corporate structures, and initial capitalization of new commercial enterprises.",
    iconName: "Briefcase",
    details: ["Entity structure determination (LLP vs Pvt Ltd)", "Corporate charter development", "Licensing maps", "Initial compliance configuration"]
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description: "Unifying human assets, technological gears, and governance frameworks to produce reliable, high-yield, and repeatable corporate outputs.",
    iconName: "Award",
    details: ["KPI dashboard modeling", "Inter-departmental alignment audits", "Resource utilization index optimization", "Systems redundancy mapping"]
  }
];

export const METRICS: MetricItem[] = [
  { label: "Client Ventures Guided", value: 45, suffix: "+" },
  { label: "Advisory Projects", value: 120, suffix: "+" },
  { label: "Core Industries Served", value: 8, suffix: "+" },
  { label: "Active Ventures Managed", value: 5, suffix: "" },
  { label: "Years of Family Legacy", value: 40, suffix: "" }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Why Governance Must Come Before Growth",
    category: "Corporate Strategy",
    readTime: "6 Min Read",
    date: "April 2026",
    summary: "Scaling an enterprise on a fragile administrative foundation is a recipe for operational failure. Learn why governance models should be established on day one, not when regulatory crises arise."
  },
  {
    id: "art-2",
    title: "Strategic Advisory Beyond Compliance",
    category: "Risk Advisory",
    readTime: "7 Min Read",
    date: "May 2026",
    summary: "Typical advisory focuses purely on template checklists. Modern risk advisory evaluates strategic threats, process bottlenecks, and operational leaks to serve as a genuine business driver."
  },
  {
    id: "art-3",
    title: "Technology for Traditional Businesses",
    category: "Digital Growth",
    readTime: "5 Min Read",
    date: "March 2026",
    summary: "Bespoke digital integrations do not require rewriting comfortable company cultures. Discover how traditional sectors can integrate automation to multiply margins without causing organizational anxiety."
  }
];

export const MEDIA: MediaItem[] = [
  {
    id: "media-1",
    title: "Governance & Scale: Designing Resilient Mid-Market Structures",
    type: "Workshop",
    date: "February 2026",
    description: "Led an intensive executive workshop deep-diving into corporate structural vulnerabilities and outlining process-auditing checklists for growing businesses.",
    imageUrl: "/input_file_1.png",
    objectPosition: "center center",
    objectFit: "cover"
  },
  {
    id: "media-2",
    title: "The Strategic Advisor: Bridging Strategy and Tech Design",
    type: "Conversation",
    date: "April 2026",
    description: "A business conversation about why founders make the ultimate venture builders when balancing strategic growth and operational execution.",
    imageUrl: "/images/strategic-advisor.png",
    objectPosition: "center center",
    objectFit: "contain"
  },
  {
    id: "media-3",
    title: "Strategy, Governance & Execution: A Founder Roundtable",
    type: "Panel",
    date: "May 2026",
    description: "Partnered to address execution challenges, operational risks, and robust capital structure configurations for fast-scaling enterprises.",
    imageUrl: "/input_file_2.png",
    objectPosition: "center 70%",
    objectFit: "contain"
  },
  {
    id: "media-4",
    title: "Enterprise Process Auditing and Workflow Systems",
    type: "Guest Session",
    date: "January 2026",
    description: "Discussed the development of software solutions that audit internal transaction trails and prevent financial and systematic leakages.",
    imageUrl: "/input_file_8.png",
    objectPosition: "center center",
    objectFit: "cover"
  }
];

export const PHILOSOPHY: PhilosophyPrinciple[] = [
  {
    title: "Execution beats ideas.",
    description: "A brilliant vision on paper has zero value without a clean workflow, aligned team incentives, and robust accountability systems."
  },
  {
    title: "Governance enables growth.",
    description: "Safety structures do not slow down a vehicle—they allow it to run at high speeds. Good governance gives founders the confidence to scale quickly."
  },
  {
    title: "Businesses should be built to last.",
    description: "Every process, asset, and code block should be designed with structural continuity, so the company outlasts any single team member."
  },
  {
    title: "Technology should simplify complexity.",
    description: "Never build complicated software to show off. Tech in business serves one singular purpose: to automate manual fatigue and ensure consistency."
  },
  {
    title: "Trust compounds faster than capital.",
    description: "Honest communication and extreme structural integrity form a reputational equity that attracts institutional scale and high-level clients."
  },
  {
    title: "Long-term thinking wins.",
    description: "Bypassing safety rules for near-term revenue leads to structural collapse. Optimize every decision for its risk-reward ratio over a ten-year timeline."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "A rare strategic adviser who understands both business execution and risk advisory. Sanket helped us restructure our operational workflows and brought absolute clarity to our leadership alignment.",
    author: "Pranav Kapur",
    role: "Chief Executive Officer",
    company: ""
  },
  {
    id: "test-2",
    quote: "Sanket's ability to simplify complex business problems and build actionable strategy is remarkable. He worked at the absolute alignment of our operations and helped us design rigorous systems that scale.",
    author: "Sneha Reddy",
    role: "Startup Founder",
    company: ""
  },
  {
    id: "test-3",
    quote: "Instead of standard high-level advisory, Sanket rolls up his sleeves to understand the physical operations and implement structural solutions. Business First, Controls Second represents his work perfectly.",
    author: "Amit Mehra",
    role: "Managing Director",
    company: ""
  },
  {
    id: "test-4",
    quote: "His strategic thinking and problem-solving helped our teams align executing growth targets safely. The governance frameworks he set up allowed us to expand with absolute clarity and control.",
    author: "Vikram Malhotra",
    role: "Chief Financial Officer",
    company: ""
  }
];

export const BRANDS = [
  { name: "Motherson", sub: "Collaborative Projects" },
  { name: "Reliance", sub: "Advisory Projects" },
  { name: "CarDekho", sub: "Strategy Reviews" },
  { name: "boAt", sub: "Operational Advising" },
  { name: "HCL", sub: "Systems Engagement" },
  { name: "Dixon", sub: "Strategic Risk Engagement" },
  { name: "Trident", sub: "Advisory Engagement" },
  { name: "OfBusiness", sub: "Venture Analysis" },
  { name: "Sabyasachi", sub: "Brand Strategy Audit" },
  { name: "Clovia", sub: "Enterprise Controls Study" }
];
