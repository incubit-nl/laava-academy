import { useState } from "react";
import { werkplaatsAgenda, werkplaatsDetails, quarterlyWerkplaats } from "../data/content";
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
          Maandelijkse lunch-sessie voor 10-20 lokale ondernemers met live
          demo's en een "bring your own case" segment. Laava's belangrijkste
          event-format voor lead generatie.
        </InfoTip>{" "}
        event plannen. Shadow calls met founders. Start outreach (10-15
        prospects/week).
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
        3-5 posts/week, 20-30 connecties/week. Eerste partnergesprekken (3-5).
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
        Tweede of derde event, mogelijk co-hosted met partner.
      </>
    ),
  },
];

export default function Roadmap({ onNext }: Props) {
  const [showWerkplaats, setShowWerkplaats] = useState(false);

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
          <h3>
            Jouw nr. 1 KPI
            <InfoTip term="KPI">
              Key Performance Indicator — het belangrijkste getal waarop je wordt
              beoordeeld. Voor jou: het aantal AI Opportunity Scans dat je per
              maand inplant.
            </InfoTip>
          </h3>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              color: "var(--primary)",
              margin: "0.5rem 0",
            }}
          >
            4-6
          </div>
          <p>AI Opportunity Scans per maand (at steady state)</p>
        </div>

        <div className="mt-3" style={{ maxWidth: 680, margin: "2rem auto 0" }}>
          <h3 style={{ marginBottom: "1rem" }}>De Sales Funnel</h3>
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "var(--white)",
              borderRadius: 12,
              border: "1px solid var(--neutral-200)",
            }}
          >
            {[
              { text: "LinkedIn / Events / Partners / Outreach / Inbound", width: "100%" },
              { text: "Eerste Gesprek", width: "80%" },
              { text: "AI Opportunity Scan (GRATIS)", width: "60%", highlight: true },
              { text: "Proof of Pilot Voorstel", width: "40%" },
              { text: "Getekende Deal", width: "25%" },
              { text: "Scale / Forward Deployed", width: "15%" },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  width: step.width,
                  margin: "0.35rem auto",
                  padding: "0.5rem",
                  background: step.highlight
                    ? "var(--primary)"
                    : `rgba(255, 86, 92, ${0.08 + i * 0.05})`,
                  color: step.highlight ? "var(--white)" : "var(--neutral-700)",
                  borderRadius: 6,
                  fontSize: "0.8rem",
                  fontWeight: step.highlight ? 700 : 500,
                }}
              >
                {step.text}
              </div>
            ))}
          </div>
          <p
            className="text-muted text-sm"
            style={{ marginTop: "0.75rem", textAlign: "center", lineHeight: 1.6 }}
          >
            Jouw primaire taak: de bovenkant vullen zodat mensen in de AI
            Opportunity Scan terechtkomen. Daar verkoopt de technische expertise
            zichzelf.
          </p>
        </div>

        {/* AI Werkplaats Details */}
        <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowWerkplaats(!showWerkplaats)}
          >
            {showWerkplaats ? "Verberg" : "Bekijk"} AI Werkplaats Event Format
          </button>
          {showWerkplaats && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 style={{ margin: 0 }}>Maandelijkse Lunch-sessie</h3>
                  <span className="text-muted text-sm">{werkplaatsDetails.frequency}</span>
                </div>
                <p className="text-muted text-sm" style={{ marginBottom: "0.75rem" }}>
                  {werkplaatsDetails.audience}
                </p>
                {werkplaatsAgenda.map((a) => (
                  <div
                    key={a.time}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid var(--neutral-100)",
                      alignItems: "baseline",
                    }}
                  >
                    <span style={{ fontWeight: 700, minWidth: 45, fontSize: "0.85rem", color: "var(--primary)" }}>{a.time}</span>
                    <span className="text-muted text-sm" style={{ lineHeight: 1.5 }}>{a.activity}</span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.75rem",
                    background: "var(--success-light)",
                    borderRadius: 8,
                  }}
                >
                  <strong style={{ fontSize: "0.85rem" }}>Killer differentiator:</strong>{" "}
                  <span className="text-muted text-sm">{werkplaatsDetails.killer}</span>
                </div>
                <p className="text-muted text-sm" style={{ marginTop: "0.75rem" }}>
                  <strong>Budget:</strong> {werkplaatsDetails.budget}
                </p>
              </div>

              <div className="card" style={{ marginTop: "1rem" }}>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>Waar vind je deelnemers?</h3>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {werkplaatsDetails.findAttendees.map((f, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ marginTop: "1rem" }}>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>Follow-up Protocol</h3>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {werkplaatsDetails.followUp.map((f, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ marginTop: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 style={{ margin: 0, fontSize: "0.95rem" }}>Kwartaal Editie (Groter)</h3>
                  <span className="text-muted text-sm">{quarterlyWerkplaats.format}</span>
                </div>
                {quarterlyWerkplaats.agenda.map((a) => (
                  <div
                    key={a.time}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "0.4rem 0",
                      borderBottom: "1px solid var(--neutral-100)",
                      alignItems: "baseline",
                    }}
                  >
                    <span style={{ fontWeight: 700, minWidth: 45, fontSize: "0.85rem", color: "var(--primary)" }}>{a.time}</span>
                    <span className="text-muted text-sm" style={{ lineHeight: 1.5 }}>{a.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
