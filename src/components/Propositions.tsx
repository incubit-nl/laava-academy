import { useState } from "react";
import { technicalPropositions, pilotBreakdown, propositionCheatSheet, fdeWorkflows, fdeDeliverables } from "../data/content";
import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

export default function Propositions({ onNext }: Props) {
  const [showTech, setShowTech] = useState(false);
  const [showPilot, setShowPilot] = useState(false);
  const [showCheat, setShowCheat] = useState(false);
  const [showFDE, setShowFDE] = useState(false);

  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Proposities</p>
        <h2>Wat Verkoop Je?</h2>
        <p className="subtitle">
          3 instappunten om mee te openen, 5 technische proposities die in
          diepere gesprekken komen. Focus op projecten, niet op
          uurtje-factuurtje.
        </p>

        <div className="grid grid-3 mt-3" style={{ textAlign: "left" }}>
          <div className="card card-highlight">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <h3>Proof of Pilot</h3>
              <span
                className="card-label card-label-green"
                style={{ margin: 0 }}
              >
                Vaste prijs
              </span>
            </div>
            <p
              style={{
                color: "var(--primary)",
                fontSize: "0.8rem",
                fontWeight: 600,
                margin: "0.5rem 0",
              }}
            >
              Nr. 1 propositie
            </p>
            <p
              className="text-muted text-sm"
              style={{ lineHeight: 1.6 }}
            >
              Van idee naar werkend systeem in 4 weken. Vaste prijs, geen
              verrassingen. De klant loopt weg met een werkend systeem, niet een
              rapport.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: CTO
              <InfoTip term="CTO">
                Chief Technology Officer — de eindverantwoordelijke voor
                technologie binnen een bedrijf. Beslist over technische
                investeringen en AI-strategie.
              </InfoTip>
              , Head of IT, Innovation Manager
            </p>
          </div>

          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <h3>
                Forward Deployed Engineer
                <InfoTip term="Forward Deployed Engineer">
                  Een senior engineer die fysiek of remote bij de klant werkt,
                  alsof het hun eigen teamlid is. Populair gemaakt door Palantir.
                  Het idee: directe impact, geen afstand tussen bouwer en
                  gebruiker.
                </InfoTip>
              </h3>
              <span
                className="card-label card-label-yellow"
                style={{ margin: 0 }}
              >
                Retainer
              </span>
            </div>
            <p
              className="text-muted text-sm mt-1"
              style={{ lineHeight: 1.6 }}
            >
              Senior engineer embedded bij de klant, 2-3 dagen per week. Voor
              bedrijven die willen opschalen na een succesvolle pilot.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: VP Engineering, CTO
            </p>
          </div>

          <div className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <h3>AI Cost Optimization</h3>
              <span
                className="card-label card-label-green"
                style={{ margin: 0 }}
              >
                Project
              </span>
            </div>
            <p
              className="text-muted text-sm mt-1"
              style={{ lineHeight: 1.6 }}
            >
              AI-kosten 50-80% omlaag. Voorbeeld: verzekeringsbedrijf €8.000 →
              €2.400/mnd (70% reductie). Perfecte opener als de CFO
              <InfoTip term="CFO">
                Chief Financial Officer — de financieel directeur. Belangrijk als
                mede-beslisser bij investeringen in AI. Spreekt de taal van ROI
                en kostenbesparing.
              </InfoTip>{" "}
              meekijkt.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: CTO, CFO, Head of Data
            </p>
          </div>
        </div>

        {/* Proof of Pilot Breakdown */}
        <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowPilot(!showPilot)}
          >
            {showPilot ? "Verberg" : "Bekijk"} Proof of Pilot week-voor-week
            breakdown
          </button>
          {showPilot && (
            <div className="slide-up mt-1">
              <div className="grid grid-4" style={{ gap: "0.75rem", marginTop: "0.75rem" }}>
                {pilotBreakdown.map((p) => (
                  <div
                    key={p.week}
                    style={{
                      padding: "1rem",
                      background: "var(--neutral-50)",
                      borderRadius: 10,
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.week}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                      {p.title}
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="text-muted text-sm"
                style={{ marginTop: "0.75rem", textAlign: "center", lineHeight: 1.6 }}
              >
                <strong>Deliverables:</strong> Werkende agent, architectuur docs,
                Infrastructure as Code, handover sessie, eval pipeline.
              </p>
              <p
                className="text-muted text-sm"
                style={{ marginTop: "0.5rem", textAlign: "center", lineHeight: 1.6 }}
              >
                <strong>Na de pilot:</strong> Scale (meer use cases, Forward
                Deployed Engineer) of Stop (klant houdt alle code en docs). Zero
                lock-in.
              </p>
            </div>
          )}
        </div>

        {/* FDE Workflows */}
        <div className="mt-2" style={{ maxWidth: 720, margin: "1.5rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowFDE(!showFDE)}
          >
            {showFDE ? "Verberg" : "Bekijk"} Forward Deployed Engineer — workflows &amp; deliverables
          </button>
          {showFDE && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>Typische Workflows</h3>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {fdeWorkflows.map((w, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{w}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: "0.95rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Deliverables</h3>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {fdeDeliverables.map((d, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Technical Propositions */}
        <div className="mt-2" style={{ maxWidth: 720, margin: "1.5rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowTech(!showTech)}
          >
            {showTech ? "Verberg" : "Bekijk"} 5 technische proposities (komen in
            diepere gesprekken)
          </button>
          {showTech && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              {technicalPropositions.map((tp) => (
                <div
                  key={tp.name}
                  style={{
                    padding: "1rem",
                    borderBottom: "1px solid var(--neutral-100)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: "0.95rem" }}>{tp.name}</strong>
                    <span className="text-muted" style={{ fontSize: "0.75rem", fontStyle: "italic" }}>
                      {tp.buyer}
                    </span>
                  </div>
                  <p className="text-muted text-sm" style={{ lineHeight: 1.6, margin: "0.25rem 0" }}>
                    {tp.desc}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--success)", lineHeight: 1.5 }}>
                    <strong>Pitch als:</strong> {tp.when}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Proposition Cheat Sheet */}
        <div className="mt-2" style={{ maxWidth: 720, margin: "1.5rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowCheat(!showCheat)}
          >
            {showCheat ? "Verberg" : "Bekijk"} Propositie Cheat Sheet (deal sizes &amp; sales cycles)
          </button>
          {showCheat && (
            <div className="slide-up" style={{ marginTop: "0.75rem" }}>
              <div className="card" style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "0.5rem 0.5rem", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Propositie</th>
                      <th style={{ textAlign: "center", padding: "0.5rem", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Deal Size</th>
                      <th style={{ textAlign: "center", padding: "0.5rem", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Sales Cycle</th>
                      <th style={{ textAlign: "right", padding: "0.5rem 0.5rem", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Buyer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propositionCheatSheet.map((p) => (
                      <tr key={p.name}>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid var(--neutral-100)", fontWeight: 600 }}>{p.name}</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid var(--neutral-100)", textAlign: "center", color: "var(--success)", fontWeight: 700 }}>{p.dealSize}</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid var(--neutral-100)", textAlign: "center", color: "var(--neutral-500)" }}>{p.cycle}</td>
                        <td className="text-muted" style={{ padding: "0.5rem", borderBottom: "1px solid var(--neutral-100)", textAlign: "right", fontSize: "0.8rem" }}>{p.buyer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="callout callout-primary mt-3">
          <h3>De Gratis AI Opportunity Scan</h3>
          <p>
            90 minuten, gratis, geen verplichtingen. De prospect brengt een
            concreet probleem, wij geven een Rood/Groen verdict, een
            napkin-architectuur
            <InfoTip term="Napkin-architectuur">
              Een high-level technisch ontwerp geschetst op "de achterkant van
              een servetje" — geen 50 pagina's documentatie, maar een helder
              diagram dat in 2 minuten uitlegt hoe de oplossing werkt.
            </InfoTip>{" "}
            en ROI-schatting. Key message: "Je hoeft niet te betalen om te
            ontdekken of wij weten wat we doen."{" "}
            <strong style={{ color: "var(--neutral-900)" }}>
              Dit is je nr. 1 doel: mensen in deze scan krijgen.
            </strong>
          </p>
        </div>

        <div className="callout mt-2" style={{ borderColor: "var(--neutral-300)" }}>
          <h3>De Typische Flow</h3>
          <p style={{ fontSize: "0.95rem" }}>
            Gratis AI Opportunity Scan → Proof of Pilot → Scale (Forward Deployed
            Engineer + technische componenten)
          </p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Cases
          </button>
        </div>
      </div>
    </div>
  );
}
