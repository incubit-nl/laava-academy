export const pillarDetails = [
  {
    title: "AI & Machine Learning",
    content:
      "<p><strong>Ruben's domein.</strong> RAG-pipelines, agent-architecturen, model tuning, NLP, computer vision. Dit is slechts 25% van een productiesysteem.</p><p style='margin-top:0.75rem'><strong>In gesprekken:</strong> Als een prospect zegt \"we willen AI\", vraag dan: \"Wat moet het systeem precies doen, en met welke systemen moet het praten?\" Dan kom je vanzelf bij de andere 3 pilaren.</p>",
  },
  {
    title: "Software Engineering",
    content:
      "<p><strong>De lijm die alles bij elkaar houdt.</strong> Production-grade code, APIs, testing, error handling, security. Zonder dit heb je een notebook, geen productiesysteem.</p><p style='margin-top:0.75rem'><strong>In gesprekken:</strong> \"De meeste partijen leveren een demo. Wij leveren een systeem dat om 3 uur 's nachts nog draait zonder dat iemand ernaar kijkt.\"</p>",
  },
  {
    title: "Integration & Process",
    content:
      "<p><strong>Marcel's superkracht — en Laava's geheime wapen.</strong> ERP-koppelingen, CRM-integratie, SOAP/REST bridges naar legacy systemen, BPMN procesoptimalisatie. Dit is waar 80% van projecten vastloopt bij andere partijen.</p><p style='margin-top:0.75rem'><strong>In gesprekken:</strong> \"AI bouwen is niet het moeilijkste. Het verbinden met jullie SAP, Exact of legacy systeem — daar gaat het mis. En dat is precies wat wij beter doen dan wie dan ook.\"</p>",
  },
  {
    title: "Infra & MLOps",
    content:
      "<p><strong>Alec's domein.</strong> Cloud architectuur (AWS, Azure, GCP), Kubernetes, CI/CD pipelines, monitoring, model versioning.</p><p style='margin-top:0.75rem'><strong>In gesprekken:</strong> \"Wij leveren niet alleen het model. We leveren de hele infrastructuur eromheen: monitoring, alerting, automatic scaling, en model updates. Jullie hoeven er niet naar om te kijken.\"</p>",
  },
];

export const coreBeliefs = [
  {
    title: "Sovereign-first",
    desc: "Klant bezit alle code, data en intelligence. Zero vendor lock-in.",
  },
  {
    title: "Model-agnostisch",
    desc: "GPT, Claude, Llama, Mistral. Beste tool voor de klus, niet waar we een partnership mee hebben.",
  },
  {
    title: "Cloud-agnostisch",
    desc: "Azure, AWS, GCP, on-premise. Wij gaan waar de klant is.",
  },
  {
    title: "Proof over promises",
    desc: "4 weken pilot, geen strategie-traject van 6 maanden.",
  },
  {
    title: "Shadow mode",
    desc: "AI stelt voor, mens keurt goed. Altijd. Vertrouwen wordt verdiend.",
  },
  {
    title: "Geen consultants",
    desc: "Wij zijn engineers die werkende systemen opleveren.",
  },
];

export const technicalPropositions = [
  {
    name: "Sovereign AI",
    tagline: "Your AI. Your Data. Your Rules.",
    desc: "AI-deployments met volledige controle over data, modellen en infra. PII-redactie, air-gapped, on-premise, open-source modellen.",
    buyer: "CISO, CTO, Compliance",
    when: "Prospect noemt: data sovereignty, GDPR, 'onze data mag niet weg', overheid, zorg, defensie, finance.",
  },
  {
    name: "MCP Server Development",
    tagline: "We bouwen de MCP servers die jouw AI aandrijven",
    desc: "Custom Model Context Protocol servers die AI-assistenten veilig laten communiceren met enterprise systemen.",
    buyer: "Head of Engineering, Platform Team",
    when: "Bedrijven die al AI-assistenten gebruiken en ze willen koppelen aan interne systemen.",
  },
  {
    name: "Integration & API Gateways",
    tagline: "Een brein zonder handen kan niet werken",
    desc: "Model-agnostische AI gateways, enterprise API management, en legacy system bridges. Marcel's domein — 25+ jaar integratie-expertise.",
    buyer: "CTO, Integration Architect",
    when: "Gefragmenteerde systemen, legacy infra (SAP, Oracle, SOAP), 'onze AI kan niet bij onze data'.",
  },
  {
    name: "Agnostic Architecture",
    tagline: "Jouw AI draait overal, op elk model",
    desc: "Architectuur die AI-systemen portabel maakt. Model-agnostische abstractie, cloud-agnostische infra, adaptive model routing.",
    buyer: "CTO, Enterprise Architect",
    when: "Vendor lock-in zorgen, lange-termijn AI-strategie, 'wat als GPT-5 uitkomt?'.",
  },
  {
    name: "LangGraph for Agentic AI",
    tagline: "Het framework achter onze productie AI-agents",
    desc: "Stateful multi-step workflows met human-in-the-loop control. Model-agnostisch, full graph visualization, multi-agent orchestratie.",
    buyer: "Head of AI/ML, CTO",
    when: "Technische gesprekken over 'hoe' Laava agents bouwt. Platform teams die frameworks evalueren.",
  },
];

export const pilotBreakdown = [
  {
    week: "Week 1",
    title: "Air-Gap Audit",
    desc: "API-inspectie, metadata audit, BPMN process mapping. Waar zit de data vast?",
  },
  {
    week: "Week 2",
    title: "Architecture Blueprint",
    desc: "Model selectie, guardrails, permissions manifest. Het technische ontwerp.",
  },
  {
    week: "Week 3",
    title: "Build",
    desc: "Vector pipelines, reasoning chains, integration layer. De daadwerkelijke bouw.",
  },
  {
    week: "Week 4",
    title: "Live Fire / Shadow Mode",
    desc: "Echte data, human approval gates, tuning. Geen demo — een werkend systeem.",
  },
];

export const objections = [
  {
    they: '"We gebruiken al ChatGPT/Copilot"',
    we: "Prima voor Q&A. Maar kan het inloggen in jullie SAP, een PO verifiëren en een betaling triggeren? Wij bouwen agents die uitvoeren.",
  },
  {
    they: '"AI hallucineert"',
    we: "Eens — wij behandelen dat als een bug, niet als een feature. RAG grounding, citation enforcement, en code guardrails.",
  },
  {
    they: '"Onze data mag niet weg"',
    we: "Perfect voor ons. On-premise, air-gapped, open-source modellen. Jullie data raakt nooit een derde partij.",
  },
  {
    they: '"Wat als GPT-5 uitkomt?"',
    we: "Model-agnostische architectuur. Eén config-wijziging. De investering zit in het systeem, niet in het model.",
  },
  {
    they: '"We kunnen dit zelf bouwen"',
    we: "Jullie data science team doet predictive AI. Agents zijn systems engineering — compleet andere skillset. Wij brengen een pre-validated stack, dag 1.",
  },
  {
    they: '"Klinkt duur"',
    we: "Gratis 90-minuten scan. Dan een 4-weken vaste-prijs pilot. Geen ROI = stoppen. Zero commitment.",
  },
  {
    they: '"We hebben AI al geprobeerd en het werkte niet"',
    we: "Ze hebben waarschijnlijk een demo gebouwd die brak met echte data. Wij doen Shadow Mode: echte data vanaf dag 1, met human approval ingebouwd.",
  },
];

export const outreachMistakes = [
  {
    title: "Carpet-bombing",
    desc: "30-47 e-mails per bedrijf in plaats van 1-2 decision-makers.",
    rule: "Max 2-3 contacten per bedrijf. Research wie de echte beslisser is.",
    stat: "Trebbe kreeg 47 mails → 1 reply → nothing.",
  },
  {
    title: "Eén template, zero research",
    desc: '226 van 593 mails gebruikten exact dezelfde opener. Nederlandse zakenmensen ruiken mail-merge op een kilometer afstand.',
    rule: "Personaliseer of verstuur niet. Refereer iets specifieks.",
    stat: 'De ene mail die wél werkte: "Ik zag dat jij, net als ons hoofdkantoor, gevestigd bent in Alphen aan den Rijn..."',
  },
  {
    title: "Alleen e-mail, geen multi-channel",
    desc: "593 touches waren allemaal e-mail. Geen LinkedIn, geen telefoon, geen events.",
    rule: "LinkedIn eerst → e-mail tweede → telefoon derde.",
    stat: "Nederland heeft het hoogste LinkedIn-gebruik per capita van Europa.",
  },
  {
    title: "Verkeerde timing",
    desc: "Bijna de helft verstuurd op vrijdag — de slechtst presterende dag (7.3% reply rate).",
    rule: "Verstuur dinsdag t/m donderdag, 9:00-11:00.",
    stat: "Donderdag had 37.8% reply rate vs. vrijdag 7.3%.",
  },
  {
    title: "Follow-ups zonder waarde",
    desc: '"Wilde even checken of je mijn bericht had gezien." Voegt niks toe.',
    rule: "Elke follow-up moet iets nieuws brengen: een case, een inzicht, een event-uitnodiging.",
    stat: "Als je niks nieuws kunt toevoegen, stuur het niet.",
  },
];

export const outreachCadence = [
  { day: "Dag 1", action: "LinkedIn: like of reageer op een post", channel: "LinkedIn" },
  { day: "Dag 3", action: "LinkedIn: connectieverzoek (kort, persoonlijk, geen pitch)", channel: "LinkedIn" },
  { day: "Dag 5", action: "E-mail #1: hook → observatie → proof point → CTA (scan als 'koffie')", channel: "E-mail" },
  { day: "Dag 8", action: "LinkedIn: deel iets relevants (geen pitch, wees behulpzaam)", channel: "LinkedIn" },
  { day: "Dag 12", action: "E-mail #2: andere invalshoek, specifieke case study", channel: "E-mail" },
  { day: "Dag 15", action: "Telefoon: 60 seconden, direct, vraag om meeting", channel: "Telefoon" },
  { day: "Dag 20", action: "E-mail #3: breakup mail, respectvol afsluiten", channel: "E-mail" },
];

export const weeklyTargets = [
  { activity: "Nieuwe LinkedIn connecties", target: "20-30" },
  { activity: "LinkedIn posts", target: "3-5" },
  { activity: "Gepersonaliseerde e-mails", target: "10-15" },
  { activity: "Telefoongesprekken", target: "5-10" },
  { activity: "Partnergesprekken", target: "2-3" },
  { activity: "AI Opportunity Scans geboekt", target: "1-2/week (4-6/maand)" },
];

export const dutchMarketRules = [
  {
    title: "Relatie-eerst, niet transactie-eerst",
    desc: "Het poldermodel draait op consensus. Je eerste gesprek is altijd een kennismaking, geen close. Geduld bouwt vertrouwen.",
  },
  {
    title: '"Koffie drinken" is heilig',
    desc: 'De koffiemeeting is de basis van Nederlandse B2B. Positioneer de scan als: "een kop koffie en samen kijken wat AI voor jullie kan betekenen."',
  },
  {
    title: "Niemand wil verkocht worden",
    desc: '"We helpen je uitzoeken of AI zin heeft" werkt. "Ik wil je onze oplossing laten zien" werkt niet. Frame alles als helpen, niet als verkopen.',
  },
  {
    title: "Schrijf in het Nederlands",
    desc: "Engelse cold mails signaleren 'buitenlandse massamailer'. Alle outreach naar Nederlandse mid-market in het Nederlands.",
  },
  {
    title: "Regionaal denken",
    desc: 'De Vermeulen Groep-win kwam door: "we zijn allebei in Alphen aan den Rijn gevestigd." Gebruik nabijheid en lokale connecties.',
  },
  {
    title: "Max 5 zinnen",
    desc: "Nederlanders waarderen efficiëntie. Eén hook, één observatie, één proof point, één CTA. Klaar.",
  },
];

export const emailTemplate = {
  structure: ["Hook — Refereer iets specifieks over hun bedrijf (van Apollo)", "Pijn — Benoem een specifiek probleem relevant voor hun sector", "Bewijs — Eén zin met een concreet resultaat uit een relevante case", "CTA — Bied de gratis 90-minuten AI Opportunity Scan aan"],
  example: 'Hi [Naam],\n\nIk zag dat [bedrijf] het [afdeling] team uitbreidt — [specifieke observatie].\n\nWe helpen bedrijven als jullie [specifiek proces] te automatiseren met AI agents. Een van onze klanten ging van 12 minuten naar 45 seconden zoektijd.\n\nZou een gratis 90-minuten sessie zinvol zijn? We kijken naar één specifiek knelpunt en geven een eerlijk advies — vrijblijvend.\n\n[Jouw naam]',
};

export const partnerTypes = [
  { type: "Referral Partners", examples: "IT consultancies, ERP/CRM implementers, digital agencies, business consultancies", desc: "Bedienen dezelfde buyers maar concurreren niet met Laava." },
  { type: "Channel Partners", examples: "Innovatiehubs, brancheverenigingen, MKB Werkplaats, regionale ontwikkelingsmaatschappijen", desc: "Kunnen Laava's diensten verkopen/doorverwijzen." },
  { type: "Event Partners", examples: "Co-working spaces, tech meetups, lokale business networks, sector-associaties", desc: "Co-host events voor gedeeld publiek." },
];

export const linkedInContentMix = [
  { day: "Maandag", type: "Case study snippet", example: '"12 min → 45 sec. Zo reduceerden we zoektijd voor een zakelijke dienstverlener."' },
  { day: "Dinsdag", type: "Technisch inzicht", example: "Blog post samenvatten met key takeaway" },
  { day: "Woensdag", type: "Sector perspectief", example: '"3 dingen die bouwbedrijven fout doen met AI"' },
  { day: "Donderdag", type: "Behind the scenes", example: '"Zo ziet een Proof of Pilot eruit, week voor week"' },
  { day: "Vrijdag", type: "Event promo / CTA", example: '"Gratis 90-min AI Opportunity Scan — boek de jouwe"' },
];

export const linkedInProfileTips = {
  bad: "Co-founder at Laava | AI Engineer",
  good: "Building AI agents that actually work in enterprise systems | Co-founder @ Laava | 4 weeks from idea to production",
  rules: [
    "Lead met het resultaat, niet de technologie",
    "Laat zien, niet vertellen — screenshots, diagrammen, metrics",
    "Dutch + English mix — Nederlands voor lokale ondernemers",
    "Engage, niet broadcast — reageer op prospect posts vóór je pitcht",
  ],
};

export const conversionBenchmarks = [
  { stage: "Reply (elke reactie)", rate: "15-25%", monthly: "8-15" },
  { stage: "Positieve reactie", rate: "5-10%", monthly: "3-6" },
  { stage: "Scan geboekt", rate: "3-5%", monthly: "2-4" },
  { stage: "Voorstel verstuurd", rate: "50% van scans", monthly: "1-2" },
];

export const weeklyRhythm = [
  { day: "Maandag", focus: "Planning: pipeline reviewen in CRM, weekdoelen stellen" },
  { day: "Di-Do", focus: "Outreach executie: LinkedIn, bellen, mailen. Partnermeetings. Event prep." },
  { day: "Vrijdag", focus: "Content creatie (LinkedIn posts voor volgende week). Admin/CRM cleanup. Weekrapport aan Alec." },
];

export const propositionCheatSheet = [
  { name: "Proof of Pilot", dealSize: "€€ (vast)", cycle: "2-4 weken", buyer: "CTO, Head of IT, Innovation Manager" },
  { name: "Forward Deployed Engineer", dealSize: "€€€/maand", cycle: "Na pilot", buyer: "VP Engineering, CTO" },
  { name: "AI Cost Optimization", dealSize: "€", cycle: "1-2 weken", buyer: "CTO, CFO, Head of Data" },
  { name: "Sovereign AI", dealSize: "€€€", cycle: "4-8 weken", buyer: "CISO, CTO, Compliance" },
  { name: "MCP Server Development", dealSize: "€€", cycle: "4-6 weken", buyer: "Head of Engineering, Platform Team" },
  { name: "Integration & API Gateways", dealSize: "€€-€€€", cycle: "4-8 weken", buyer: "CTO, Integration Architect" },
  { name: "Agnostic Architecture", dealSize: "€€", cycle: "4-6 weken", buyer: "CTO, Enterprise Architect" },
  { name: "LangGraph for Agentic AI", dealSize: "€€", cycle: "Onderdeel van project", buyer: "Head of AI/ML, CTO" },
];

export const fdeWorkflows = [
  "Support triage en antwoordconcepten",
  "Sales ops: account research en follow-up",
  "Operations: request intake → ticket executie",
  "Document Q&A met governance",
  "Finance: factuurverwerking en matching",
  "Data quality en monitoring assistent",
];

export const fdeDeliverables = [
  "On-site 2-3 dagen/week (flexibel)",
  "Directe Slack/Teams toegang",
  "Secure data access (least-privilege by default)",
  "Integraties in bestaand ecosysteem (CRM, tickets, docs, data)",
  "Evaluatie, monitoring en operational runbooks",
  "Architecture reviews en technisch leiderschap",
];

export const crmRequiredFields = {
  company: ["Name", "Domain Name", "Employees", "Address", "Account Owner", "ICP", "LinkedIn", "X", "ARR"],
  person: ["First Name", "Last Name", "Email", "Phone", "Job Title", "LinkedIn", "Company link", "City"],
  opportunity: ["Name", "Stage", "Amount", "Close Date", "Point of Contact"],
};

export const alecChecks = [
  "Zijn alle actieve prospects in de CRM?",
  "Zijn activiteiten gelogd? (Als een opportunity stages springt zonder notities, dat is een gap)",
  "Zijn velden compleet? (Lege Company records tellen niet)",
  "Is de pipeline realistisch? (50 opportunities die weken in dezelfde stage staan = kerkhof, geen pipeline)",
];

export const crmCleanupChecklist = [
  "Check elke actieve opportunity — klopt de stage nog?",
  "Check op ontbrekende velden",
  "Check stale opportunities (>3 weken in dezelfde stage → verplaats naar Nurture)",
  "Check orphan contacts (contacten zonder bedrijf)",
  "Update pipeline cijfers voor weekrapport",
];

export const abTestingVars = [
  { variable: "Onderwerpregel", a: '"Koffie in [stad]?"', b: '"Vraag over jullie [proces]"' },
  { variable: "Hook type", a: "Lokale nabijheid", b: "Recent bedrijfsnieuws" },
  { variable: "CTA wording", a: '"90 minuten gratis"', b: '"een kop koffie"' },
  { variable: "E-mail lengte", a: "3 zinnen", b: "5 zinnen" },
  { variable: "Verzendtijd", a: "9:00", b: "10:30" },
  { variable: "Verzenddag", a: "Dinsdag", b: "Donderdag" },
  { variable: "Taal", a: "Nederlands", b: "Engels (voor internationale bedrijven)" },
];

export const phoneCallScript = {
  timing: "Di-Do, 9:00-11:00 of 14:00-16:00",
  duration: "60 seconden",
  structure: "Wie je bent + waarom je belt (refereer iets specifieks) + vraag om meeting",
  keyRule: "Lees geen script voor — Nederlanders detecten scripts direct.",
  ifNo: '"Helemaal goed, snap ik. Mocht er in de toekomst iets veranderen, ik stuur je even een LinkedIn-verzoek."',
};

export const competitiveTactics = [
  { from: "Mozaik (Forge)", tactic: "AI Tafel", desc: "Exclusieve kwartaaldiners voor 8-10 CTOs/CIOs. Geen pitch, gefaciliteerde discussie. Budget: €800-1.000/event. Hoogste-waarde prospects." },
  { from: "DataNorth", tactic: "Lead Magnets", desc: "AI Readiness Check quiz, ROI Calculator, 5-question PDF. Publiceer in het Nederlands (rankt beter). Maak van elke prospectvraag een blog post." },
  { from: "Artific", tactic: "Awards", desc: "Map alle Nederlandse AI awards voor 2026. Nomineer overal (nominaties = credibiliteit). Gebruik case studies als award submissions." },
  { from: "AdamI", tactic: "Sector Landing Pages", desc: "Bouw industrie-specifieke landing pages. Prioriteit: Bouw, Vastgoed, Zakelijke dienstverlening, Maritiem, Energie." },
];

export const quarterlyWerkplaats = {
  format: "3 uur, 30-50 mensen, co-hosted met partner",
  agenda: [
    { time: "17:30", activity: "Deuren open, ontvangst" },
    { time: "18:00", activity: "Keynote presentatie" },
    { time: "18:30", activity: "Klant case study" },
    { time: "19:00", activity: "Panel discussie / workshop" },
    { time: "19:30", activity: "Networking, 1-op-1 gesprekken, scans boeken" },
  ],
};

export const werkplaatsAgenda = [
  { time: "12:00", activity: "Lunch, name badges, informeel mingling" },
  { time: "12:15", activity: '"AI in 90 Seconden" — live demo van een echte AI agent' },
  { time: "12:20", activity: '"Wat AI Vandaag Echt Kan" — 20 min praktische talk' },
  { time: "12:40", activity: '"Breng je eigen case" — deelnemers brengen bottleneck, wij schetsen oplossing op whiteboard' },
  { time: "13:10", activity: "Wrap-up, 1-op-1 gesprekken, AI Opportunity Scans boeken" },
  { time: "13:30", activity: "Klaar" },
];

export const werkplaatsDetails = {
  frequency: "Maandelijks (eerste donderdag)",
  audience: "10-20 lokale ondernemers, operations managers, IT leads",
  budget: "~€15/persoon lunch. 20 personen = €300/sessie. 12 sessies/jaar = €3.600.",
  killer: '"Breng je eigen case" — niemand anders doet dit. Iemand loopt binnen met een probleem en loopt weg met een napkin-architectuur.',
  findAttendees: [
    "Ondernemersverenigingen (elke gemeente heeft ze)",
    "KvK events en ledenlijsten",
    "Co-working spaces en innovatiehubs",
    "BNI groepen (20-30 business owners per chapter)",
    "Vorige deelnemers ('breng een collega mee')",
    "LinkedIn Events feature (gratis zichtbaarheid)",
    "Partnerorganisaties co-promotie",
  ],
  followUp: [
    "Binnen 24u: bedank-mail, LinkedIn connecten, foto's posten + tag",
    "Binnen 48u: hot leads persoonlijk benaderen voor scan",
    "Binnen 1 week: blog post met key takeaways (SEO + LinkedIn content)",
    "Alle deelnemers in CRM loggen met source = 'AI Werkplaats [datum]'",
  ],
};

export const pipelineStages = [
  { stage: "1. Identified", desc: "Bedrijf matcht ICP, toegevoegd aan CRM, nog niet benaderd" },
  { stage: "2. Outreach Started", desc: "Eerste touch verstuurd (LinkedIn of e-mail)" },
  { stage: "3. Engaged", desc: "Prospect heeft gereageerd of LinkedIn geaccepteerd" },
  { stage: "4. Scan Booked", desc: "AI Opportunity Scan ingepland — dit is je primaire KPI" },
  { stage: "5. Scan Completed", desc: "Scan gedaan, follow-up loopt" },
  { stage: "6. Proposal Sent", desc: "Proof of Pilot of ander voorstel verstuurd" },
  { stage: "7. Won", desc: "Deal getekend — handoff naar delivery team" },
  { stage: "8. Lost", desc: "Klant zei nee — log de reden, nurture voor 6 maanden" },
  { stage: "9. Nurture", desc: "Niet klaar nu, warm houden voor later" },
];

export const resourceLinks = [
  { name: "CRM (pipeline, leads)", url: "crm.laava.dev" },
  { name: "Website (proposities, cases)", url: "laava.nl" },
  { name: "Client documenten", loc: "SharePoint → 02_Clients/" },
  { name: "Outreach materialen", loc: "SharePoint → 05_Business_Development/Outreach/" },
  { name: "Partnership docs", loc: "SharePoint → 05_Business_Development/Partnerships/" },
  { name: "Presentaties", loc: "SharePoint → 05_Business_Development/Presentations/" },
  { name: "Brand style guide", loc: "SharePoint → 01_Company/Brand/" },
];

export interface QuizQuestion {
  q: string;
  answers: string[];
  correct: number;
  feedback: string;
}

export const questions: QuizQuestion[] = [
  {
    q: "Wat is het nr. 1 doel van elke BD-interactie bij Laava?",
    answers: [
      "Een contract laten tekenen",
      "Een AI Opportunity Scan inplannen",
      "Een presentatie geven over Laava",
      "Een Proof of Pilot verkopen",
    ],
    correct: 1,
    feedback:
      "De gratis AI Opportunity Scan (90 min) is je belangrijkste conversietool. Alles draait om mensen in die scan krijgen — het contract komt daarna vanzelf.",
  },
  {
    q: "Hoeveel pilaren heeft Laava's technische DNA?",
    answers: [
      "2 — AI en Engineering",
      "3 — AI, Cloud en Integration",
      "4 — AI, Engineering, Integration, MLOps",
      "5 — AI, Data, Cloud, Engineering, Sales",
    ],
    correct: 2,
    feedback:
      "De 4 pilaren zijn: AI & ML, Software Engineering, Integration & Process, en Infra & MLOps. Dit is wat Laava uniek maakt — de meeste AI-bedrijven hebben er maar 1 of 2.",
  },
  {
    q: "Hoe lang duurt een Proof of Pilot?",
    answers: ["2 weken", "4 weken", "3 maanden", "Hangt af van het project"],
    correct: 1,
    feedback:
      "4 weken, vaste prijs, werkend systeem. Geen rapport, geen slides — een draaiend systeem dat de klant kan testen.",
  },
  {
    q: "Wat was de grootste fout in Laava's eerste outreach-campagne?",
    answers: [
      "Te weinig e-mails verstuurd",
      "Alleen LinkedIn gebruikt",
      "Bedrijven gebombardeerd met 30-47 e-mails per bedrijf",
      "Te dure propositie",
    ],
    correct: 2,
    feedback:
      "593 e-mails naar 82 bedrijven, sommige kregen 30-47 mails. Resultaat: 0.34% conversie. De les: low volume, high quality. Max 2-3 contacten per bedrijf.",
  },
  {
    q: "Wat is Laava's sterkste wapen tegen AdamI (14 man, meer cases)?",
    answers: [
      "Lagere prijzen",
      "Founders doen het werk zelf, geen juniors, geen overhead",
      "Meer marketing",
      "Grotere klanten",
    ],
    correct: 1,
    feedback:
      "Klein team = geen overhead. Founders bouwen zelf. Bij AdamI krijg je een consultant die rapporteert aan een manager. Bij Laava praat je direct met de engineers.",
  },
  {
    q: "Wat is het ideale outreach-volume per week?",
    answers: [
      "50-100 prospects",
      "10-15 prospects",
      "5 prospects",
      "Zo veel mogelijk",
    ],
    correct: 1,
    feedback:
      "10-15 nieuwe prospects per week, met 15-20 minuten research per prospect. Quality over quantity.",
  },
  {
    q: "Wat betekent 'Sovereign AI' bij Laava?",
    answers: [
      "AI die zelfstandig beslissingen neemt",
      "On-premise, air-gapped, PII-redactie, open-source modellen",
      "AI gebouwd door de Nederlandse overheid",
      "AI met een eigen database",
    ],
    correct: 1,
    feedback:
      "Sovereign AI = de klant houdt volledige controle. On-premise deployment, air-gapped netwerken, PII-redactie, en open-source modellen. Geen enkele concurrent biedt dit.",
  },
  {
    q: "Hoeveel procent van de e-mails uit de eerste campagne kreeg geen enkele reactie?",
    answers: ["50%", "70%", "90.3%", "25%"],
    correct: 2,
    feedback:
      "90.3% volledig genegeerd. Daarom is de nieuwe strategie multi-channel (LinkedIn + e-mail + telefoon) in plaats van alleen e-mail.",
  },
  {
    q: "Welke dag is het slechtste moment om outreach te doen?",
    answers: ["Dinsdag", "Woensdag", "Donderdag", "Maandag en vrijdag"],
    correct: 3,
    feedback:
      "Maandag (inbox vol van weekend) en vrijdag (mensen zijn mentaal al weg). Dinsdag t/m donderdag 9:00-11:00 is de sweet spot.",
  },
  {
    q: "Wat is de kern van de Nederlandse zakelijke cultuur?",
    answers: [
      "Hoe harder je pusht, hoe sneller de deal",
      "Relatie-eerst, consensus-gedreven, geduld bouwt vertrouwen",
      "E-mail is effectiever dan face-to-face",
      "Nederlanders houden van lange presentaties",
    ],
    correct: 1,
    feedback:
      "De Nederlandse zakencultuur is relationship-first. Het poldermodel = consensus-driven. Pushy sales werkt averechts. Geduld, consistentie en oprechte interesse bouwen vertrouwen.",
  },
  {
    q: "Wat doe je als een prospect zegt: 'We gebruiken al ChatGPT/Copilot'?",
    answers: [
      "Zeggen dat ChatGPT slecht is",
      "Uitleggen dat Laava agents bouwt die uitvoeren — inloggen in SAP, PO verifiëren, betaling triggeren",
      "Een korting aanbieden",
      "Het gesprek beëindigen",
    ],
    correct: 1,
    feedback:
      "ChatGPT/Copilot is prima voor Q&A. Maar wij bouwen agents die daadwerkelijk taken uitvoeren in enterprise systemen. Dat is een compleet ander level.",
  },
  {
    q: "Wat is de juiste multi-channel volgorde voor outreach?",
    answers: [
      "E-mail → LinkedIn → Telefoon",
      "Telefoon → E-mail → LinkedIn",
      "LinkedIn → E-mail → Telefoon",
      "Alles tegelijk versturen",
    ],
    correct: 2,
    feedback:
      "LinkedIn eerst (warm worden), dan e-mail (gepersonaliseerd), dan telefoon (voor high-priority). Nederland heeft het hoogste LinkedIn-gebruik per capita van Europa.",
  },
  {
    q: "Hoe werkt het A/B testen van outreach?",
    answers: [
      "Stuur 100 dezelfde mails en kijk wat er gebeurt",
      "Versie A naar 10 prospects, versie B naar 10, vergelijk na 2 weken",
      "Test alleen onderwerpregels, de rest maakt niet uit",
      "A/B testing werkt niet in Nederland",
    ],
    correct: 1,
    feedback:
      "10 prospects per versie uit hetzelfde segment. Na 2 weken vergelijk je reply rates en positieve reacties. De winnaar wordt je nieuwe standaard.",
  },
  {
    q: "Wat checkt Alec wekelijks in de CRM?",
    answers: [
      "Alleen het aantal deals dat is gesloten",
      "Of prospects in CRM staan, activiteiten gelogd zijn, velden compleet zijn, en de pipeline realistisch is",
      "Alleen de omzet forecast",
      "Niets — de CRM is optioneel",
    ],
    correct: 1,
    feedback:
      "Alec checkt 4 dingen: zijn prospects in CRM, zijn activiteiten gelogd, zijn velden compleet, en is de pipeline realistisch? 50 opportunities in dezelfde stage = kerkhof.",
  },
  {
    q: "Wat is de 'AI Werkplaats'?",
    answers: [
      "Een workshop waar we AI tools installeren",
      "Een maandelijkse lunch-sessie voor 10-20 ondernemers met live demo's en 'bring your own case'",
      "Een interne training voor het Laava team",
      "Een online webinar serie",
    ],
    correct: 1,
    feedback:
      "De AI Werkplaats is Laava's belangrijkste event-format. Het 'bring your own case' segment is de killer differentiator — niemand anders doet dit. Budget: ~€300 per sessie.",
  },
  {
    q: "Wat gebeurt er na een succesvolle Proof of Pilot?",
    answers: [
      "De klant moet een 2-jarig contract tekenen",
      "Scale (uitbreiden) of Stop (weglopen met alle code). Zero lock-in.",
      "De klant moet overstappen naar Laava's platform",
      "Verplichte follow-up consultancy",
    ],
    correct: 1,
    feedback:
      "Na de pilot: scale (meer use cases, Forward Deployed Engineer) of stop (klant houdt alle code en docs). Zero lock-in — dat is een enorm verkoopargument.",
  },
];

export const competitors = [
  {
    name: "AdamI",
    location: "Amsterdam — ca. 14 man",
    winLine:
      "Wij leveren werkende systemen in 4 weken, zij leveren consultancy-trajecten van maanden.",
    wins: [
      "4 weken vaste prijs vs. hun langere consultancy-trajecten",
      "Integration expertise (Marcel) — zij missen dit",
      "Sovereign AI / on-premise — zij bieden dit niet",
      "Zero lock-in: alle code is van de klant",
    ],
    losses: [
      "Meer cases en referenties (9 vs. onze 3)",
      "Groter team = meer perceived capaciteit",
      "Meer brand awareness",
    ],
    killer:
      '"Bij ons doen de founders het werk. Bij hen krijg je een junior die leert op jouw project."',
    desc: "AI consultancy + implementation. Closest competitor qua positionering.",
  },
  {
    name: "Artific",
    location: "Enschede — ca. 14 man, 100+ klanten",
    winLine:
      "Zij verkopen een platform (SaaS), wij bouwen op maat. Zero lock-in vs. hun lock-in.",
    wins: [
      "Custom maatwerk vs. hun one-size-fits-all platform",
      "Zero lock-in vs. hun platform lock-in",
      "Sovereign AI mogelijkheid — hun SaaS kan dit niet",
      "Diepere integratie met bestaande systemen",
    ],
    losses: [
      "100+ klanten — massive social proof",
      "AI Company of the Year award",
      "Snellere implementatie voor standaard use cases",
    ],
    killer:
      '"Een platform is handig voor standaard problemen. Maar jullie probleem is niet standaard — anders had je het al opgelost."',
    desc: "AI platform (SaaS). AI Company of the Year 2025. Ander businessmodel.",
  },
  {
    name: "Mozaik",
    location: "Amersfoort — ca. 5-8 man",
    winLine:
      "Wij zijn engineers die bouwen, zij zijn enablers die faciliteren. Wij leveren code, zij leveren decks.",
    wins: [
      "Wij zijn engineers die bouwen, zij faciliteren",
      "Wij leveren code, zij leveren decks",
      "Integration expertise — 25 jaar enterprise ervaring",
      "Vaste-prijs pilot vs. open-ended consulting",
    ],
    losses: [],
    killer:
      '"Enablers leren je vissen. Wij vangen de vis, bakken hem, en serveren hem — in 4 weken."',
    desc: '"AI Enablers" — strategie + build. Direct competitor.',
  },
  {
    name: "DataNorth",
    location: "Groningen — ca. 10-15 man",
    winLine:
      "Zij focussen op MKB en no-code automations. Wij bouwen enterprise-grade productiesystemen.",
    wins: [
      "Enterprise-grade productiesystemen vs. hun no-code automations",
      "Custom agents vs. no-code workflows",
      "Sovereign AI / on-premise mogelijkheden",
      "Diepere technische expertise",
    ],
    losses: [
      "Sterkere SEO en online zichtbaarheid",
      "Workshops en trainingen als lead-gen",
      "Lagere instapdrempel voor MKB",
    ],
    killer:
      '"No-code is prima voor simpele automations. Maar als je iets nodig hebt dat echt met je SAP of legacy systeem praat, heb je engineers nodig, geen drag-and-drop."',
    desc: "AI consultancy, workshops, no-code automations. Sterke SEO. MKB-focus.",
  },
];

export const scenarios = [
  {
    label: "Scenario 1 — LinkedIn Connect",
    persona: "Jan, CTO bij een middelgroot bouwbedrijf (400 man)",
    desc: 'Jan heeft net op LinkedIn gepost over zijn frustratie met het zoeken in bouwregelgeving. Zijn team besteedt uren per dag aan het doorploegen van het Bouwbesluit. Je wilt hem connecten en uiteindelijk naar een AI Opportunity Scan krijgen.',
    tips: [
      "Like en reageer eerst op zijn post — voeg waarde toe, pitch niet",
      "Wacht 2-3 dagen, stuur dan een connectieverzoek zonder pitch",
      '"Hi Jan, zag je post over bouwregelgeving. Herkenbaar probleem — we hebben daar iets voor gebouwd. Leuk om te connecten!"',
      "Na accept: deel een relevant stukje content (bijv. de Bouwbesluit case)",
      'Na 2-3 interacties: "We bieden een gratis AI Opportunity Scan aan (90 min). Geen verplichtingen, wel een concreet actieplan. Interesse?"',
      "Nooit een lap tekst over Laava in het eerste bericht",
    ],
  },
  {
    label: "Scenario 2 — De AI Opportunity Scan",
    persona: "Lisa, Operations Director bij een logistiek bedrijf (800 man)",
    desc: "Lisa heeft ja gezegd op de scan. Ze komt met een concreet probleem: haar team besteedt 20+ uur per week aan het handmatig verwerken van transportdocumenten. Ze wil weten of AI kan helpen.",
    tips: [
      "Laat Marcel of Ruben de technische kant doen — jij faciliteert",
      'Begin met luisteren: "Vertel eens over het proces stap voor stap"',
      "Kwantificeer: \"20 uur x 40 euro/uur x 52 weken = 41.600 euro/jaar aan handwerk\"",
      '"Bij een vergelijkbare klant reduceerden we zoektijd van 12 min naar 45 sec"',
      '"In 4 weken bouwen we een werkend systeem — vaste prijs, geen verrassingen"',
      'Zero lock-in benadrukken: "Alle code is van jullie, draait op jullie infra"',
    ],
  },
  {
    label: "Scenario 3 — Bezwaar Afhandelen",
    persona: "Peter, CFO die mee-evalueert",
    desc: 'Peter zegt: "Jullie zijn met z\'n drieen. Hoe weet ik dat jullie dit aankunnen? AdamI heeft 14 man en meer cases." Hij twijfelt aan de capaciteit.',
    tips: [
      '"Goed punt. Klein team betekent geen overhead. Onze founders doen het werk zelf — geen juniors die leren op jullie project."',
      '"Bij AdamI krijg je een consultant die rapporteert aan een manager die rapporteert aan een partner. Bij ons praat je direct met de engineers."',
      '"Daarom werken we met een vaste-prijs pilot van 4 weken. Als het niet werkt, stoppen we. Jullie risico is minimaal."',
      '"Een project heeft geen 14 man nodig. Het heeft de juiste 3 nodig."',
      '"Meer cases klinkt goed, maar het betekent ook: jij bent klant nummer 101. Bij ons ben je prioriteit."',
    ],
  },
];

export const checklistItems = [
  {
    category: "Administratie",
    items: [
      "Laava e-mail en tools ontvangen",
      "CRM-toegang (Twenty CRM) gecheckt",
      "Apollo.io account opgezet voor lead enrichment",
      "SharePoint-toegang verkregen",
    ],
  },
  {
    category: "Kennis",
    items: [
      "Laava Academy doorlopen",
      "Alle 5 onboarding documenten gelezen",
      "laava.nl doorgelopen — alle 8 proposities bekeken",
      "Competitive Battlecard bestudeerd",
      "2-3 presentaties in Presentations/ folder bekeken",
      "Partnership docs gelezen (vooral MKB Werkplaats channel program)",
    ],
  },
  {
    category: "LinkedIn",
    items: [
      "LinkedIn profiel geüpdatet met Laava",
      "Headline, banner, featured section en about geoptimaliseerd",
      "Eerste 10 target connections geidentificeerd",
      "Marcel, Alec en Ruben gevolgd/geconnect op LinkedIn",
    ],
  },
  {
    category: "Team",
    items: [
      "Kennismaking met Marcel, Alec en Ruben",
      "Weekritme afgesproken (rapportage aan Alec op vrijdag)",
      "Eerste call met klant of prospect bijgewoond (shadow call)",
    ],
  },
  {
    category: "Ecosysteem",
    items: [
      "Lokale ondernemersverenigingen, KvK events en BNI groepen in kaart gebracht",
      "Eerste AI Werkplaats event ingepland (richt op week 4-5)",
    ],
  },
  {
    category: "Pitch",
    items: [
      "Elevator pitch geoefend (30 sec: wie Laava is, wat we doen, waarom anders)",
      "AI Opportunity Scan pitch geoefend (hoe je de scan presenteert aan prospects)",
      "Minstens 2 objection-handling scenario's doorgenomen",
    ],
  },
];
