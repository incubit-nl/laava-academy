import { useState } from "react";
import { scenarios } from "../data/content";

interface Props {
  onNext: () => void;
}

function Scenario({ s }: { s: (typeof scenarios)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="scenario">
      <div className="scenario-label">{s.label}</div>
      <div className="scenario-persona">{s.persona}</div>
      <div className="scenario-desc">{s.desc}</div>
      <button className="reveal-btn" onClick={() => setOpen(!open)}>
        {open ? "Verberg aanpak" : "Toon aanpak"}
      </button>
      {open && (
        <div className="slide-up">
          <div className="tips-inner">
            <h4>Aanpak</h4>
            <ul>
              {s.tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PitchSimulator({ onNext }: Props) {
  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Pitch Simulator</p>
        <h2>Oefen Je Gesprekken</h2>
        <p className="subtitle mb-2">
          Drie scenario's die je in de eerste weken tegenkomt. Bedenk je aanpak
          en klik dan op "Toon aanpak".
        </p>

        {scenarios.map((s, i) => (
          <Scenario key={i} s={s} />
        ))}

        <div className="mt-2">
          <button className="btn btn-primary" onClick={onNext}>
            90-Dagen Plan
          </button>
        </div>
      </div>
    </div>
  );
}
