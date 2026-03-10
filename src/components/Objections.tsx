import { objections } from "../data/content";

interface Props {
  onNext: () => void;
}

export default function Objections({ onNext }: Props) {
  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Bezwaren</p>
        <h2>Zij Zeggen / Wij Zeggen</h2>
        <p className="subtitle">
          De 7 meest voorkomende bezwaren die je gaat horen — en hoe je ze
          afhandelt.
        </p>

        <div className="mt-3" style={{ maxWidth: 780, margin: "2rem auto 0" }}>
          {objections.map((o, i) => (
            <div
              key={i}
              className="grid grid-2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--error-light)",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-700)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--error)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Zij zeggen
                </div>
                {o.they}
              </div>
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--success-light)",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-700)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--success)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Wij zeggen
                </div>
                {o.we}
              </div>
            </div>
          ))}
        </div>

        <div className="callout mt-3">
          <h3>Sales Tip</h3>
          <p>
            Luister eerst, erken het bezwaar, en antwoord dan met bewijs. Nooit
            defensief worden — de klant heeft gelijk dat ze vragen stellen.
          </p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Concurrentie
          </button>
        </div>
      </div>
    </div>
  );
}
