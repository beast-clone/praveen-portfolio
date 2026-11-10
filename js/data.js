/* All page text lives here. Edit this file, not the HTML. */
window.ME = {
  name: 'Praveen L',
  first: 'Praveen',
  role: 'AI & Automation Specialist',
  email: 'prvnl254@gmail.com',
  email2: 'pravn.naryan@gmail.com',
  phone: '+91 88928 69798',
  tel: '+918892869798',
  linkedin: 'https://www.linkedin.com/in/praveen-l-9613a0116',
  linkedinLabel: 'linkedin.com/in/praveen-l-9613a0116',
};

window.PROJECTS = [
  {
    id: 'lead-engine', name: 'Lead Engine', label: 'n8n · Airtable · WhatsApp', img: 'assets/projects/lead-engine.jpg',
    video: 'assets/videos/lead-engine.mp4', poster: 'assets/videos/lead-engine.jpg',
    title: 'Every lead, to the right counsellor, in two minutes.',
    intro: 'One pipeline that catches leads from Meta ads, website forms, calls, Instagram DMs and six walk-in desks, then hands each one to a counsellor automatically.',
    meta: [['My role', 'Designed and built it'], ['Timeline', '2025 to now, live'], ['Stack', 'n8n, Airtable, Meta Lead Ads'], ['Used by', 'Sales team, daily']],
    problem: 'Leads came in from 20+ campaigns, forms, calls, DMs and walk-in desks. Counsellors picked them up by hand, so some leads waited hours and some counsellors got far more than others.',
    built: [
      'One webhook for every Meta lead form. A new form gets its own tab and columns automatically, so a new campaign needs no setup.',
      'A round-robin that runs every 2 minutes, rotates per course interest, skips anyone switched off and respects daily caps.',
      'A WhatsApp to the lead with the counsellor\'s name and number, and a Telegram alert to the counsellor with a one-tap Call button.',
      'A nightly summary at 11:59 PM for each counsellor and the manager.',
    ],
    results: [['2 min', 'from new lead to counsellor'], ['20+', 'lead sources in one pipeline'], ['0', 'manual copy-paste']],
    role: 'I mapped the process with the sales team, designed the flow and built it in n8n. Claude helped write the Code nodes. Who is in the rotation is a checkbox the manager controls, not code.',
    live: null,
    gallery: ['assets/projects/hero-pipeline.jpg'],
  },
  {
    id: 'ebook-autopilot', name: 'eBook Autopilot', label: 'Razorpay · n8n · Drive', img: 'assets/projects/ebook-autopilot.jpg',
    title: 'Nine eBooks that sell and deliver themselves.',
    intro: 'Doctors buy country pathway guides at any hour. The flow verifies the payment, shares the guide, emails and WhatsApps the buyer and alerts the team, with no one touching it.',
    meta: [['My role', 'Planned and built it'], ['Timeline', '2026, live'], ['Stack', 'Razorpay, n8n, Google Drive'], ['Runs', '24/7, no human step']],
    problem: 'Guides sold at all hours, but delivery was manual. Buyers waited for someone to share the file, and failed payments were simply lost.',
    built: [
      'A Razorpay webhook that verifies every payment signature before anything else happens.',
      'Instant view-only Google Drive access, with download, print and copy blocked.',
      'A welcome email, a "your guide is ready" WhatsApp template and a Telegram alert to the team.',
      'Failed payments trigger a retry link on WhatsApp and email automatically.',
    ],
    results: [['9', 'country eBooks on autopilot'], ['107', 'Australia + NZ sales in Oct 2026'], ['24/7', 'delivery, no human step']],
    role: 'I planned the flow, set up 7 Razorpay payment pages and 21 approved WhatsApp templates, then built and tested the workflows in n8n.',
    live: 'https://goocampusevents.com/amc-pathway/',
    gallery: ['assets/shots/amc-pathway.jpg', 'assets/pages/nz-pathway.jpg'],
  },
  {
    id: 'marketing-os', name: 'Marketing OS', label: 'Web app · Claude (MCP)', img: 'assets/projects/marketing-os.jpg',
    video: 'assets/videos/marketing-os-walkthrough.mp4', poster: 'assets/videos/marketing-os-walkthrough.jpg', vdur: '82s walkthrough', href: 'marketing-os.html',
    title: 'The app my marketing team runs its day in.',
    intro: 'Five brands and too many tools. I wrote the specs and directed Claude Code to build one app for analytics, the content pipeline, scheduling and competitor tracking.',
    meta: [['My role', 'Product owner, specs, QA'], ['Timeline', 'June 2026 to now'], ['Stack', 'Claude Code, Next.js, Supabase'], ['Used by', 'Whole marketing team']],
    problem: 'Five brands, a team of writers, designers and editors, and data spread across Meta, YouTube, LinkedIn and Airtable. People switched tools all day and work fell through the cracks.',
    built: [
      'Analytics for 5 Instagram accounts, Meta Ads, YouTube and LinkedIn, with AI-written reports on every tab.',
      'A content pipeline from idea to approval, with rules that send design tasks to the designer and video to the editors.',
      'A scheduler that publishes reels, carousels and stories to Instagram, Facebook and LinkedIn on the minute.',
      'A competitor radar and per-person access control on every page.',
    ],
    results: [['5', 'people use it every day'], ['7', 'separate tools replaced'], ['50', 'marketing playbooks built in']],
    role: 'I spotted the problem, wrote the specs, tested every feature against live data and approved every release. Claude Code wrote most of the code.',
    live: null,
    gallery: [],
  },
  {
    id: 'landing-pages', name: 'Landing Pages', label: 'Design · Tailwind · Tracking', img: 'assets/projects/landing-pages.jpg',
    video: 'assets/videos/landing-pages.mp4', poster: 'assets/videos/landing-pages.jpg',
    title: 'Landing pages for eight countries.',
    intro: 'Country pathway pages, course pages, eBook sales pages and community sign-ups. Each one has lead forms or payments wired to automation, and the main ones carry GA4 and Meta Pixel tracking.',
    meta: [['My role', 'Art direction, build, launch'], ['Timeline', '2025 to 2026'], ['Stack', 'HTML, Tailwind'], ['Shipped', '25+ pages']],
    problem: 'Every country programme needed its own page that converts, and every lead had to reach the CRM without anyone copying it across.',
    built: [
      'Designed and shipped 25+ pages in HTML and Tailwind, mobile-first.',
      'Online checkout on paid pages, and lead forms that send every lead straight to the CRM.',
      'GA4 and Meta Pixel on the main goocampusevents.com pages, plus Microsoft Clarity on key pages.',
      'Social-preview tags and structured data on the newer pages.',
    ],
    results: [['25+', 'pages designed and shipped'], ['8+', 'countries and programmes'], ['15', 'live today']],
    role: 'I did the art direction, page structure and copy layout, then tested and deployed each page. Claude wrote most of the HTML from my direction.',
    live: 'https://goocampusevents.com/medical-pg-options/',
    gallery: ['assets/shots/medical-pg.jpg', 'assets/shots/germany-pg.jpg', 'assets/shots/gulf-pgcp.jpg', 'assets/shots/als-course.jpg'],
  },
];

window.STATS = [
  ['200+', 'n8n workflows built', 0.9],
  ['98', 'running every day', 0.75],
  ['25+', 'landing pages shipped', 0.6],
  ['107', 'eBook sales, hands-free', 0.7],
];

window.SKILLS = [
  { t: 'Workflow automation', c: '#EA4B71', ic: 'ph-flow-arrow', d: 'n8n workflows with webhooks, APIs, retries and error alerts.' },
  { t: 'WhatsApp & CRM flows', c: '#25D366', dark: true, ic: 'ph-whatsapp-logo', d: 'Lead routing, templates and follow-ups in Airtable and WhatsApp.' },
  { t: 'AI-powered internal tools', c: '#D97757', ic: 'ph-robot', d: 'Apps and dashboards my team runs its day in, built with AI.' },
  { t: 'Landing pages', c: '#0EA5E9', ic: 'ph-browser', d: 'Pages with payments, lead forms and tracking wired in.' },
];

window.TOOLS = ['n8n', 'Airtable', 'Supabase', 'Razorpay', 'Meta Graph API', 'WhatsApp API', 'Claude Code', 'Next.js', 'GA4', 'Figma', 'Telegram bots'];

window.STEPS = [
  ['Spec it', 'Before building anything, I sit with the people who will use it and write down who does what, and what must never happen.', 'ph-note-pencil'],
  ['Build it', 'n8n workflows, integrations and pages, connected through APIs and webhooks. I build the workflows myself and direct Claude Code for app code.', 'ph-flow-arrow'],
  ['Test it', 'Against live data, not demos. Every flow gets error alerts, and the important ones get a daily health check.', 'ph-check-square-offset'],
  ['Hand it over', 'A plain-English guide, a short walkthrough, and switches the team can flip without me, like who is in the lead rotation.', 'ph-users-three'],
];

window.CAREER = [
  { n: '01', co: 'Freelance', role: 'Graphic Designer', where: 'Remote', yrs: '2018 — 2020', d: 'Posters, logos and social creatives for small businesses.', c: '#E5484D', ic: 'ph-pen-nib' },
  { n: '02', co: 'Wall of Tunes', role: 'Graphic Designer', where: 'India', yrs: '2021 — 2022', d: 'Social media and event creatives for a music brand.', c: '#3B5BDB', ic: 'ph-music-notes' },
  { n: '03', co: 'Aam Aadmi Party', role: 'Manager, campaigns', where: 'India', yrs: '2022 — 2023', d: 'Campaign creatives, and coordinating designers and writers across teams.', c: '#8427DE', ic: 'ph-megaphone' },
  { n: '04', co: 'GooCampus', role: 'Senior Graphic Designer', where: 'Bengaluru', yrs: '2024 — Present', d: 'Started in design. Now I build the automations, internal tools and landing pages for five brands.', c: '#039754', ic: 'ph-lightning', now: true },
];

window.EDU = [
  ['BCA, Computer Science', 'Bangalore University', '2014 — 2017', 'ph-graduation-cap'],
  ['Claude Code 101', 'Anthropic', '2026', 'ph-seal-check'],
  ['Claude 101', 'Anthropic', '2026', 'ph-seal-check'],
];

window.SKILL_LIST = [
  ['Workflow Automation (n8n)', 'ph-flow-arrow'],
  ['WhatsApp & CRM Flows', 'ph-whatsapp-logo'],
  ['AI Agents & Chatbots', 'ph-robot'],
  ['AI-powered Internal Tools', 'ph-squares-four'],
  ['Landing Pages', 'ph-browser'],
  ['Meta Ads Tracking', 'ph-crosshair'],
  ['UX / UI Design', 'ph-layout'],
];

window.STACK = [
  ['n8n', 'n8n'], ['claude', 'Claude Code'], ['airtable', 'Airtable'], ['supabase', 'Supabase'],
  ['meta', 'Meta APIs'], ['whatsapp', 'WhatsApp API'], ['razorpay', 'Razorpay'], ['figma', 'Figma'],
];

window.FAQ = [
  ['What do you enjoy building most?', 'Systems that take manual work off marketing and sales teams: lead routing, WhatsApp follow-ups, internal dashboards and pages that convert.'],
  ['Do you write the code yourself?', 'I build n8n workflows myself. For apps and pages I write the spec and direct Claude Code to write most of the code, then I test it against live data and own the result.'],
  ['Which tools do you know best?', 'n8n, Airtable, Supabase, the Meta Graph and Marketing APIs, WhatsApp Cloud API, Razorpay, Google Workspace and Claude. I pick up new tools like HubSpot or Zoho quickly.'],
  ['Can you show the systems working?', 'Yes. I can walk you through the workflows, the internal app and the live pages on a call.'],
  ['How do you keep automations from breaking?', 'Every workflow reports failures to a shared error flow, critical ones have a daily health check, and I write plain-English guides so the team knows what each one does.'],
];

/* Shorter automations shown in the video player list next to the Lead Engine highlight. */
window.AUTOMATIONS = [
  { id: 'ebook-autopilot', name: 'eBook Autopilot', dur: '0:22', label: 'Razorpay · n8n · Drive', title: 'Nine eBooks that sell and deliver themselves.',
    line: 'Payment → guide on WhatsApp in seconds, 24/7.',
    intro: 'Doctors buy country pathway guides at any hour. The flow verifies the Razorpay payment, shares a view-only guide, emails and WhatsApps the buyer and alerts the team, with no one touching it.',
    stats: [['9', 'country eBooks on autopilot'], ['107', 'Australia + NZ sales in Oct 2026'], ['24/7', 'delivery, no human step']],
    video: 'assets/videos/ebook-autopilot.mp4', poster: 'assets/videos/ebook-autopilot.jpg' },
  { name: 'AI Counsellor', dur: '0:22', label: 'Instagram · RAG · n8n', title: 'Every Instagram comment becomes a lead.',
    line: 'Comment → auto-reply → AI answers the DM → lead saved.',
    intro: 'A comment like "Fees?" gets an automatic reply and a DM. The AI answers from a knowledge base of real answers, asks for a number, and the lead lands in the sheet on its own.',
    stats: [['24/7', 'answers DMs'], ['RAG', 'knowledge base of real answers'], ['0', 'manual copy-paste']],
    video: 'assets/videos/ai-counsellor.mp4', poster: 'assets/videos/ai-counsellor.jpg' },
  { name: 'WhatsApp Scheduler', dur: '0:22', label: 'WhatsApp · Scheduling', title: 'Schedule WhatsApp from any number. No monthly fee.',
    line: 'Replaced a $50/month tool. Any number of WhatsApp numbers.',
    intro: 'We paid about $50 a month for a tool just to schedule WhatsApp messages. I replaced it with our own: link as many WhatsApp numbers as we need, then schedule messages, polls and status posts to groups and contacts from one dashboard.',
    stats: [['$50/mo', 'paid tool replaced'], ['No limit', 'on linked WhatsApp numbers'], ['1', 'dashboard to schedule every send']],
    video: 'assets/videos/whatsapp-server.mp4', poster: 'assets/videos/whatsapp-server.jpg' },
  { name: 'Call Summary', dur: '0:22', label: 'Whisper · AI · Airtable', title: 'Every sales call, summarised automatically.',
    line: 'Recording → transcript → AI summary, 33× cheaper.',
    intro: 'Every 10 minutes, new call recordings are transcribed and summarised into key points and next steps in Airtable. Moving transcription to Whisper via OpenRouter made it about 33× cheaper.',
    stats: [['33×', 'cheaper transcription'], ['₹0.50', 'per 30-minute call'], ['10 min', 'from call to summary']],
    video: 'assets/videos/call-summary.mp4', poster: 'assets/videos/call-summary.jpg' },
];

/* Live landing pages shown in the Landing Pages player (first item = the intro video). */
window.LANDINGS = [
  { name: 'Medical PG Options', page: 'assets/pages/medical-pg.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/medical-pg-options/', line: 'Career strategy session for doctors.', intro: 'A paid 1:1 career strategy session page for doctors weighing PG options abroad, with online booking.', tags: ['Paid booking', 'GA4 + Pixel'] },
  { name: 'AMC Pathway eBook', page: 'assets/pages/amc-pathway.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/amc-pathway/', line: 'Australia eBook sales page.', intro: 'Sales page for the Australia AMC Pathway eBook. Payment triggers the eBook Autopilot delivery flow.', tags: ['Auto delivery', 'GA4 + Pixel'] },
  { name: 'NZ Pathway eBook', page: 'assets/pages/nz-pathway.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/nz-pathway/', line: 'New Zealand eBook sales page.', intro: 'Sales page for the New Zealand pathway handbook, wired to the same automatic delivery.', tags: ['Auto delivery', 'GA4 + Pixel'] },
  { name: 'Germany PG', page: 'assets/pages/germany-pg.jpg', host: 'GitHub Pages', url: 'https://beast-clone.github.io/germany-pg-landing/', line: 'Step-by-step pathway to Germany.', intro: 'The full journey for doctors moving to Germany, from language training to the licence, laid out step by step.', tags: ['HTML + Tailwind'] },
  { name: 'Gulf PGCP', page: 'assets/pages/gulf-pgcp.jpg', host: 'GitHub Pages', url: 'https://beast-clone.github.io/gulf-pgcp-landing/', line: 'DHA / DOH / SCFHS licensing.', intro: 'Licensing pathway for the Gulf (DHA, DOH, SCFHS) with a services and fee table.', tags: ['HTML + Tailwind'] },
  { name: 'ALS Course', page: 'assets/pages/als-course.jpg', host: 'GitHub Pages', url: 'https://beast-clone.github.io/als-course-landing/', line: 'Advanced Life Support course.', intro: 'Course page for an Advanced Life Support certification.', tags: ['HTML + Tailwind'] },
  { name: 'AMC MCQ Coaching', page: 'assets/pages/amc-mcq.jpg', host: 'GitHub Pages', url: 'https://beast-clone.github.io/goocampus-australia-rebrand/index-v3.html', line: 'Australia AMC MCQ course.', intro: 'Coaching course page for the Australian AMC MCQ exam.', tags: ['HTML + Tailwind'] },
  { name: 'AMC Clinical Prep', page: 'assets/pages/amc-clinical.jpg', host: 'GitHub Pages', url: 'https://beast-clone.github.io/goocampus-australia-rebrand/amc-clinical.html', line: 'AMC clinical exam prep.', intro: 'Preparation course page for the AMC clinical exam.', tags: ['HTML + Tailwind'] },
  { name: 'MBBS Abroad Community', page: 'assets/pages/mbbs-community.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/mbbs-abroad-community/', line: 'WhatsApp community sign-up.', intro: 'Sign-up page for the MBBS Abroad WhatsApp community.', tags: ['GA4 + Pixel'] },
  { name: 'NEET PG Community', page: 'assets/pages/neet-pg-community.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/neet-pg-community/', line: 'WhatsApp community sign-up.', intro: 'Sign-up page for the NEET PG WhatsApp community.', tags: ['GA4 + Pixel'] },
  { name: 'Apollo Fellowship', page: 'assets/pages/apollo.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/apollo-fellowship-programme/', line: 'Fellowship programme + registration.', intro: 'Programme page with a registration form that feeds a Google Sheet.', tags: ['Lead form', 'GA4 + Pixel'] },
  { name: 'GC Consulting', page: 'assets/pages/gc-consulting.jpg', host: 'goocampusevents.com', url: 'https://goocampusevents.com/gc-consulting/', line: '1:1 career strategy session.', intro: 'Booking page for a 1:1 career strategy session.', tags: ['GA4 + Pixel', 'Clarity'] },
];
