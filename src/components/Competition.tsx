import { useState } from "react";
import { competitors } from "../data/content";
import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

export default function Competition({ onNext }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Concurrentie</p>
        <h2>Ken Je Concurrenten</h2>
        <p className="subtitle">
          Klik op een concurrent voor een gedetailleerde vergelijking.
        </p>

        <div className="grid grid-2 mt-3" style={{ textAlign: "left" }}>
          {competitors.map((c, i) => (
            <div
              key={c.name}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>{c.name}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--neutral-400)", marginBottom: "0.75rem" }}>{c.location}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--success)", lineHeight: 1.5 }}>
                {i === 1 ? (
                  <>
                    Zij verkopen een platform (SaaS
                    <InfoTip term="SaaS">
                      Software as a Service — software die je huurt via een abonnement
                      in de cloud, in plaats van zelf te bouwen of te installeren.
                      Voordeel: snel live. Nadeel: je bent afhankelijk van hun platform (lock-in).
                    </InfoTip>
                    ), wij bouwen op maat. Zero lock-in vs. hun lock-in.
                  </>
                ) : (
                  c.winLine
                )}
              </div>
            </div>
          ))}
        </div>

        {active !== null && (
          <div className="slide-up" style={{ maxWidth: 720, margin: "2rem auto 0" }}>
            <div className="card" style={{ textAlign: "left" }}>
              <h3>{competitors[active].name} — {competitors[active].location}</h3>
              <p className="text-muted text-sm mt-1">{competitors[active].desc}</p>

              <div className="mt-2">
                <span className="card-label card-label-green">Waar wij winnen</span>
                <ul className="text-muted text-sm" style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", lineHeight: 1.8 }}>
                  {competitors[active].wins.map((w, i) => (
                    <li key={i}>
                      {w}
                      {w.includes("Sovereign AI") && (
                        <InfoTip term="Sovereign AI">
                          AI die volledig onder controle van de klant draait: op hun eigen
                          servers, in hun eigen netwerk, met open-source modellen. Geen data
                          die naar externe partijen gaat. Essentieel voor sectoren met strenge
                          privacy-eisen (overheid, zorg, defensie, financien).
                        </InfoTip>
                      )}
                      {w.includes("Zero lock-in") && (
                        <InfoTip term="Zero lock-in">
                          De klant is eigenaar van alle code en kan op elk moment overstappen
                          naar een andere partij. Geen afhankelijkheid van Laava's platform of
                          proprietary tools. Dit is zeldzaam in de markt.
                        </InfoTip>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {competitors[active].losses.length > 0 && (
                <div className="mt-1">
                  <span className="card-label card-label-red">Waar zij winnen</span>
                  <ul className="text-muted text-sm" style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", lineHeight: 1.8 }}>
                    {competitors[active].losses.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--neutral-50)", borderRadius: 8 }}>
                <strong style={{ fontSize: "0.8rem" }}>Killer line:</strong>{" "}
                <span className="text-muted text-sm">{competitors[active].killer}</span>
              </div>
            </div>
          </div>
        )}

        <div className="callout mt-3" style={{ borderColor: "var(--error)", borderWidth: "1.5px" }}>
          <h3>Onze Zwaktes — Wees Eerlijk</h3>
          <p>
            We zijn klein (3 man), weinig cases, geen brand awareness, en geen
            bewezen salestrack record. Draai het om: "We zijn lean, geen
            overhead, founders doen het werk zelf. En je bent onze prioriteit,
            niet klant nummer 200."
          </p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>Start de Quiz</button>
        </div>
      </div>
    </div>
  );
}
