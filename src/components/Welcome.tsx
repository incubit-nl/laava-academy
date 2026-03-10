import { coreBeliefs } from "../data/content";

interface Props {
  onNext: () => void;
}

export default function Welcome({ onNext }: Props) {
  return (
    <div className="container hero">
      <p className="label">Onboarding</p>
      <h1>Welkom bij Laava</h1>
      <p className="subtitle">
        Deze interactieve Academy neemt je in ~20 minuten mee door alles wat je
        moet weten: wie we zijn, wat we verkopen, hoe je bezwaren afhandelt, wie
        de concurrentie is, hoe je outreach doet, en hoe je je eerste gesprekken
        voert.
      </p>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-value">3</div>
          <div className="stat-label">Founders</div>
        </div>
        <div className="stat">
          <div className="stat-value">4</div>
          <div className="stat-label">Technische pilaren</div>
        </div>
        <div className="stat">
          <div className="stat-value">8</div>
          <div className="stat-label">Proposities</div>
        </div>
        <div className="stat">
          <div className="stat-value">0</div>
          <div className="stat-label">Vendor lock-in</div>
        </div>
      </div>

      <div
        className="callout mt-3"
        style={{ borderColor: "var(--neutral-300)", textAlign: "left" }}
      >
        <h3>Waar We Nu Staan</h3>
        <p>
          Laava is early-stage. Drie technische founders, sterke capabilities,
          maar nog geen eigen sales engine. Huidige projecten (Hosted Energy,
          Royal IHC) komen via partner Rutger van Hagen (Flowshift). Jouw
          missie:{" "}
          <strong style={{ color: "var(--neutral-900)" }}>
            bouw de BD-engine die Laava van partner-afhankelijk naar
            eigen-pipeline brengt.
          </strong>
        </p>
      </div>

      <div className="mt-3" style={{ maxWidth: 680, margin: "2rem auto 0" }}>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Wat We Geloven
        </h3>
        <div className="grid grid-3" style={{ gap: "0.75rem" }}>
          {coreBeliefs.map((b) => (
            <div
              key={b.title}
              style={{
                padding: "1rem",
                border: "1px solid var(--neutral-200)",
                borderRadius: 10,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  marginBottom: "0.25rem",
                }}
              >
                {b.title}
              </div>
              <div
                className="text-muted"
                style={{ fontSize: "0.8rem", lineHeight: 1.5 }}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-primary" onClick={onNext}>
          Start de Academy
        </button>
      </div>
    </div>
  );
}
