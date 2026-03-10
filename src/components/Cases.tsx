import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

export default function Cases({ onNext }: Props) {
  return (
    <div className="section section-alt">
      <div className="container text-center">
        <p className="label">Bewezen Resultaten</p>
        <h2>Cases voor in je gesprekken</h2>

        <div className="grid grid-3 mt-3" style={{ textAlign: "left" }}>
          <div className="card">
            <span className="card-label card-label-green">Bouw</span>
            <h3>Bouwbesluit Assistent</h3>
            <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.5rem" }}>
              RAG-gebaseerde agent
              <InfoTip term="AI Agent">
                Een autonoom stukje software dat zelfstandig taken uitvoert: het kan
                documenten doorzoeken, informatie combineren, en antwoorden formuleren
                — zonder dat een mens elke stap hoeft aan te sturen.
              </InfoTip>{" "}
              die 1000+ pagina's bouwregelgeving doorzoekt met citation enforcement.
            </p>
            <div className="metric-box">
              <div className="text-muted text-sm">Zoektijd</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginTop: "0.25rem" }}>
                <span style={{ textDecoration: "line-through", color: "var(--neutral-400)" }}>15-20 min</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--success)" }}>30 sec</span>
              </div>
              <div className="text-muted text-sm" style={{ marginTop: "0.25rem" }}>90% vragen direct beantwoord</div>
            </div>
          </div>

          <div className="card">
            <span className="card-label card-label-green">Vastgoed</span>
            <h3>Kopersservice AI</h3>
            <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.5rem" }}>
              E-mail automatisering agent met Outlook integratie. Auto-categoriseer + draft responses.
            </p>
            <div className="metric-box">
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--success)" }}>70% geautomatiseerd</div>
              <div className="text-muted text-sm" style={{ marginTop: "0.25rem" }}>Responstijd: 48 uur → 4 uur. 3x throughput.</div>
            </div>
          </div>

          <div className="card">
            <span className="card-label card-label-green">Kennisbeheer</span>
            <h3>
              SharePoint Knowledge Layer
              <InfoTip term="Knowledge Layer">
                Een intelligente zoeklaag bovenop bestaande documentsystemen.
                In plaats van handmatig door mappen te klikken, stel je een
                vraag in gewone taal en krijg je direct het juiste antwoord
                met bronvermelding.
              </InfoTip>
            </h3>
            <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.5rem" }}>
              Permission-aware semantic search over 50.000+ documenten met SharePoint access controls.
            </p>
            <div className="metric-box">
              <div className="text-muted text-sm">Zoektijd</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginTop: "0.25rem" }}>
                <span style={{ textDecoration: "line-through", color: "var(--neutral-400)" }}>12 min</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--success)" }}>45 sec</span>
              </div>
              <div className="text-muted text-sm" style={{ marginTop: "0.25rem" }}>95% success rate. Zero permission violations.</div>
            </div>
          </div>
        </div>

        <div className="callout mt-3">
          <h3>Sales Tip</h3>
          <p>
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
