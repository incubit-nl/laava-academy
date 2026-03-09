interface Props {
  onNext: () => void;
}

export default function Cases({ onNext }: Props) {
  return (
    <div className="section section-dark">
      <div className="container text-center">
        <p className="label">Bewezen Resultaten</p>
        <h2>Cases voor in je gesprekken</h2>

        <div className="grid grid-3 mt-3" style={{ textAlign: "left" }}>
          <div className="card">
            <span className="card-label card-label-green">Bouw</span>
            <h3 style={{ marginTop: "0.75rem" }}>Bouwbesluit Assistent</h3>
            <p style={{ color: "var(--neutral-400)", fontSize: "0.9rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
              Agent die bouwregelgeving doorzoekt en interpreteert.
            </p>
            <div className="metric-box">
              <div style={{ fontSize: "0.8rem", color: "var(--neutral-400)" }}>Zoektijd</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginTop: "0.25rem" }}>
                <span style={{ textDecoration: "line-through", color: "var(--neutral-500)" }}>15-20 min</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--success)" }}>30 sec</span>
              </div>
            </div>
          </div>

          <div className="card">
            <span className="card-label card-label-green">Vastgoed</span>
            <h3 style={{ marginTop: "0.75rem" }}>Kopersservice AI</h3>
            <p style={{ color: "var(--neutral-400)", fontSize: "0.9rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
              Automatische e-mailafhandeling voor kopersservice bij vastgoedontwikkelaars.
            </p>
            <div className="metric-box">
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--success)" }}>70% geautomatiseerd</div>
              <div style={{ fontSize: "0.8rem", color: "var(--neutral-400)", marginTop: "0.25rem" }}>Responstijd: 48 uur naar 4 uur</div>
            </div>
          </div>

          <div className="card">
            <span className="card-label card-label-green">Kennisbeheer</span>
            <h3 style={{ marginTop: "0.75rem" }}>SharePoint Knowledge Layer</h3>
            <p style={{ color: "var(--neutral-400)", fontSize: "0.9rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
              Intelligente laag bovenop SharePoint die documenten vindbaar maakt.
            </p>
            <div className="metric-box">
              <div style={{ fontSize: "0.8rem", color: "var(--neutral-400)" }}>Zoektijd</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginTop: "0.25rem" }}>
                <span style={{ textDecoration: "line-through", color: "var(--neutral-500)" }}>12 min</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--success)" }}>45 sec</span>
              </div>
            </div>
          </div>
        </div>

        <div className="callout mt-3" style={{ borderColor: "var(--neutral-700)" }}>
          <h3 style={{ color: "var(--white)" }}>Sales Tip</h3>
          <p style={{ color: "var(--neutral-400)" }}>
            Gebruik altijd concrete cijfers. "Van 15 minuten naar 30 seconden"
            landt vele malen harder dan "we maken processen efficienter."
          </p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>Concurrentie</button>
        </div>
      </div>
    </div>
  );
}
