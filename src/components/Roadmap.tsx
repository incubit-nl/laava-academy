import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

const timeline = [
  {
    period: "Dag 1-30 — Foundation",
    title: "Leren & Opbouwen",
    desc: (
      <>
        Producten leren, CRM opzetten, LinkedIn profiel optimaliseren, eerste
        connecties leggen, lokaal ecosysteem mappen, eerste AI Werkplaats
        <InfoTip term="AI Werkplaats">
          Maandelijkse lunch-sessie voor 10-20 lokale ondernemers met live demo's
          en een "bring your own case" segment. Laava's belangrijkste event-format
          voor lead generatie.
        </InfoTip>{" "}
        event plannen. Shadow calls met founders.
      </>
    ),
  },
  {
    period: "Dag 31-60 — Traction",
    title: "Eerste Resultaten",
    desc: (
      <>
        Eerste AI Werkplaats event hosten, outreach op volle kracht (10-15
        prospects/week), 3-4 AI Opportunity Scans ingepland. LinkedIn-routine:
        3-5 posts/week, 20-30 connecties/week.
      </>
    ),
  },
  {
    period: "Dag 61-90 — Momentum",
    title: "Opschalen",
    desc: (
      <>
        5-6 scans per maand, minimaal 1 Proof of Pilot voorstel verstuurd.
        Messaging geoptimaliseerd op basis van wat werkt. Partnerrelaties actief.
      </>
    ),
  },
];

export default function Roadmap({ onNext }: Props) {
  return (
    <div className="section section-alt">
      <div className="container text-center">
        <p className="label">Roadmap</p>
        <h2>Het 90-Dagen Plan</h2>
        <p className="subtitle">
          Wat je gaat doen in je eerste drie maanden.
        </p>

        <div className="mt-3">
          <div className="timeline">
            {timeline.map((t) => (
              <div className="timeline-item" key={t.period}>
                <div className="timeline-period">{t.period}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="callout callout-primary mt-3">
          <h3>Jouw nr. 1 KPI
            <InfoTip term="KPI">
              Key Performance Indicator — het belangrijkste getal waarop je
              wordt beoordeeld. Voor jou: het aantal AI Opportunity Scans
              dat je per maand inplant.
            </InfoTip>
          </h3>
          <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--primary)", margin: "0.5rem 0" }}>
            4-6
          </div>
          <p>AI Opportunity Scans per maand (at steady state)</p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Dag 1 Checklist
          </button>
        </div>
      </div>
    </div>
  );
}
