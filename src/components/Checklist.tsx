import { useState } from "react";
import { checklistItems } from "../data/content";

interface Props {
  onNext: () => void;
}

export default function Checklist({ onNext }: Props) {
  const [checked, setChecked] = useState<Set<string>>(new Set(["Laava Academy doorlopen"]));

  function toggle(item: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  }

  return (
    <div className="section">
      <div className="container text-center">
        <p className="label">Dag 1</p>
        <h2>Je Eerste Dag Checklist</h2>
        <p className="subtitle mb-2">Klik om items af te vinken.</p>

        <div className="checklist">
          {checklistItems.map((cat) => (
            <div key={cat.category}>
              <div className="checklist-category">{cat.category}</div>
              {cat.items.map((item) => (
                <div
                  key={item}
                  className={`checklist-item${checked.has(item) ? " checked" : ""}`}
                  onClick={() => toggle(item)}
                >
                  <div className="checklist-check">&#10003;</div>
                  <div className="checklist-text">{item}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Bekijk je Score
          </button>
        </div>
      </div>
    </div>
  );
}
