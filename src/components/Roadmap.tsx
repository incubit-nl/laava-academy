interface Props {
  onNext: () => void;
}

const timeline = [
  {
    period: "Dag 1-30 — Foundation",
    title: "Leren & Opbouwen",
    desc: "Producten leren, CRM opzetten, LinkedIn profiel optimaliseren, eerste connecties leggen, lokaal ecosysteem mappen, eerste AI Werkplaats event plannen. Shadow calls met founders.",
  },
  {
    period: "Dag 31-60 — Traction",
    title: "Eerste Resultaten",
    desc: "Eerste AI Werkplaats event hosten, outreach op volle kracht (10-15 prospects/week), 3-4 AI Opportunity Scans ingepland. LinkedIn-routine: 3-5 posts/week, 20-30 connecties/week.",
  },
  {
    period: "Dag 61-90 — Momentum",
    title: "Opschalen",
    desc: "5-6 scans per maand, minimaal 1 Proof of Pilot voorstel verstuurd. Messaging geoptimaliseerd op basis van wat werkt. Partnerrelaties actief.",
  },
];

export default function Roadmap({ onNext }: Props) {
  return (
    <div className="section section-dark">
      <div className="container text-center">
        <p className="label">Roadmap</p>
        <h2>Het 90-Dagen Plan</h2>
        <p className="subtitle" style={{ color: "var(--neutral-400)" }}>
          Wat je gaat doen in je eerste drie maanden.
        </p>

        <div className="mt-3" style={{ textAlign: "left" }}>
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

        <div className="callout mt-3" style={{ borderColor: "var(--neutral-700)" }}>
          <h3 style={{ color: "var(--white)" }}>Jouw nr. 1 KPI</h3>
          <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--primary)", margin: "0.5rem 0" }}>
            4-6
          </div>
          <p style={{ color: "var(--neutral-400)" }}>
            AI Opportunity Scans per maand (at steady state)
          </p>
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
