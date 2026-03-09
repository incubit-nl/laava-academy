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
    ],
  },
  {
    category: "Kennis",
    items: [
      "Laava Academy doorlopen",
      "Alle 5 onboarding documenten gelezen",
      "laava.nl doorgelopen — alle 8 proposities bekeken",
      "Competitive Battlecard bestudeerd",
    ],
  },
  {
    category: "LinkedIn",
    items: [
      "LinkedIn profiel geüpdatet met Laava",
      "Eerste 10 target connections geidentificeerd",
      "Marcel, Alec en Ruben gevolgd/geconnect op LinkedIn",
    ],
  },
  {
    category: "Team",
    items: [
      "Kennismaking met Marcel, Alec en Ruben",
      "Weekritme afgesproken (rapportage aan Alec op vrijdag)",
    ],
  },
];
