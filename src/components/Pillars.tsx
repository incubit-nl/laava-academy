import { useState } from "react";
import { pillarDetails } from "../data/content";

const pillars = [
  { num: "01", title: "AI & Machine Learning", desc: "RAG, agents, model tuning, NLP" },
  { num: "02", title: "Software Engineering", desc: "Production code, APIs, testing" },
  { num: "03", title: "Integration & Process", desc: "ERP, CRM, legacy, BPMN" },
  { num: "04", title: "Infra & MLOps", desc: "Cloud, Kubernetes, CI/CD" },
];

interface Props {
  onNext: () => void;
}

export default function Pillars({ onNext }: Props) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Laava DNA</p>
        <h2>De 4 Pilaren</h2>
        <p className="subtitle">
          De meeste AI-bedrijven bestaan uit data scientists. Een productie
          systeem is slechts 25% AI — de rest is engineering. Wij dekken alle
          vier de pilaren met drie mensen. Klik op een pilaar voor meer context.
        </p>

        <div className="grid grid-4 mt-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`card pillar-card${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="pillar-number">{p.num}</div>
              <h3>{p.title}</h3>
              <p className="text-muted text-sm mt-1">{p.desc}</p>
            </div>
          ))}
        </div>

        {active !== null && (
          <div className="slide-up mt-2">
            <div
              className="card"
              style={{ textAlign: "left", maxWidth: 680, margin: "1.5rem auto 0" }}
            >
              <h3 style={{ marginBottom: "0.75rem" }}>
                {pillarDetails[active].title}
              </h3>
              <div
                className="text-muted text-sm"
                style={{ lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: pillarDetails[active].content }}
              />
            </div>
          </div>
        )}

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Het Team
          </button>
        </div>
      </div>
    </div>
  );
}
