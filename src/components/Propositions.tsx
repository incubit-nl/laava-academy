import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

export default function Propositions({ onNext }: Props) {
  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Proposities</p>
        <h2>Wat Verkoop Je?</h2>
        <p className="subtitle">
          3 instappunten om mee te openen, 5 technische proposities die later
          komen. Focus op projecten, niet op uurtje-factuurtje.
        </p>

        <div className="grid grid-3 mt-3" style={{ textAlign: "left" }}>
          <div className="card card-highlight">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <h3>Proof of Pilot</h3>
              <span className="card-label card-label-green" style={{ margin: 0 }}>Vaste prijs</span>
            </div>
            <p style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, margin: "0.5rem 0" }}>
              Nr. 1 propositie
            </p>
            <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
              Van idee naar werkend systeem in 4 weken. Vaste prijs, geen
              verrassingen. De klant loopt weg met een werkend systeem, niet een
              rapport.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: CTO
              <InfoTip term="CTO">
                Chief Technology Officer — de eindverantwoordelijke voor technologie
                binnen een bedrijf. Beslist over technische investeringen en AI-strategie.
              </InfoTip>
              , Head of IT, Innovation Manager
            </p>
          </div>

          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <h3>
                Forward Deployed Engineer
                <InfoTip term="Forward Deployed Engineer">
                  Een senior engineer die fysiek of remote bij de klant werkt,
                  alsof het hun eigen teamlid is. Populair gemaakt door Palantir.
                  Het idee: directe impact, geen afstand tussen bouwer en gebruiker.
                </InfoTip>
              </h3>
              <span className="card-label card-label-yellow" style={{ margin: 0 }}>Retainer</span>
            </div>
            <p className="text-muted text-sm mt-1" style={{ lineHeight: 1.6 }}>
              Senior engineer embedded bij de klant, 2-3 dagen per week. Voor
              bedrijven die willen opschalen na een succesvolle pilot.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: VP Engineering, CTO
            </p>
          </div>

          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <h3>AI Cost Optimization</h3>
              <span className="card-label card-label-green" style={{ margin: 0 }}>Project</span>
            </div>
            <p className="text-muted text-sm mt-1" style={{ lineHeight: 1.6 }}>
              AI-kosten 50-80% omlaag. Korte audit, snel resultaat. Perfecte
              opener als de CFO
              <InfoTip term="CFO">
                Chief Financial Officer — de financieel directeur. Belangrijk
                als mede-beslisser bij investeringen in AI. Spreekt de taal
                van ROI en kostenbesparing.
              </InfoTip>{" "}
              meekijkt.
            </p>
            <p className="text-muted text-sm mt-1">
              Buyer: CTO, CFO, Head of Data
            </p>
          </div>
        </div>

        <div className="callout callout-primary mt-3">
          <h3>De Gratis AI Opportunity Scan</h3>
          <p>
            90 minuten, gratis, geen verplichtingen. De prospect brengt een
            concreet probleem, wij geven een Rood/Groen verdict, een
            napkin-architectuur
            <InfoTip term="Napkin-architectuur">
              Een high-level technisch ontwerp geschetst op "de achterkant van een
              servetje" — geen 50 pagina's documentatie, maar een helder diagram
              dat in 2 minuten uitlegt hoe de oplossing werkt.
            </InfoTip>{" "}
            en ROI-schatting.{" "}
            <strong style={{ color: "var(--neutral-900)" }}>
              Dit is je nr. 1 doel: mensen in deze scan krijgen.
            </strong>
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
