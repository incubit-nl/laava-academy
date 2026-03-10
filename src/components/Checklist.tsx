import { useState } from "react";
import { checklistItems, pipelineStages, resourceLinks, alecChecks, crmRequiredFields, crmCleanupChecklist } from "../data/content";
import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

const tipMap: Record<string, { term: string; text: string }> = {
  "CRM-toegang (Twenty CRM) gecheckt": {
    term: "Twenty CRM",
    text: "Het CRM-systeem dat Laava gebruikt. Open-source alternatief voor Salesforce. Hier log je al je prospects, gesprekken en pipeline-voortgang.",
  },
  "Apollo.io account opgezet voor lead enrichment": {
    term: "Apollo.io",
    text: "Een tool die bedrijfs- en contactinformatie verzamelt: functietitels, e-mailadressen, bedrijfsgrootte, technologie-stack. Bespaart je uren aan handmatig research.",
  },
};

export default function Checklist({ onNext }: Props) {
  const [checked, setChecked] = useState<Set<string>>(
    new Set(["Laava Academy doorlopen"])
  );
  const [showPipeline, setShowPipeline] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showCrmFields, setShowCrmFields] = useState(false);
  const [showAlec, setShowAlec] = useState(false);

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
                  <div className="checklist-text">
                    {item}
                    {tipMap[item] && (
                      <InfoTip term={tipMap[item].term}>
                        {tipMap[item].text}
                      </InfoTip>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pipeline Stages */}
        <div style={{ maxWidth: 600, margin: "2rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowPipeline(!showPipeline)}
          >
            {showPipeline ? "Verberg" : "Bekijk"} CRM Pipeline Stages
          </button>
          {showPipeline && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                <p className="text-muted text-sm" style={{ marginBottom: "0.75rem", lineHeight: 1.6 }}>
                  Gebruik deze stages in Twenty CRM. Elke opportunity zit altijd
                  in precies één stage.
                </p>
                {pipelineStages.map((p) => (
                  <div
                    key={p.stage}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid var(--neutral-100)",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        minWidth: 140,
                        color: "var(--neutral-800)",
                      }}
                    >
                      {p.stage}
                    </span>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", lineHeight: 1.5 }}
                    >
                      {p.desc}
                    </span>
                  </div>
                ))}
                <p
                  className="text-muted text-sm"
                  style={{
                    marginTop: "0.75rem",
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  Gouden regel: als het niet in de CRM staat, is het niet
                  gebeurd.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CRM Required Fields */}
        <div style={{ maxWidth: 600, margin: "1rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowCrmFields(!showCrmFields)}
          >
            {showCrmFields ? "Verberg" : "Bekijk"} CRM Verplichte Velden
          </button>
          {showCrmFields && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                {(["company", "person", "opportunity"] as const).map((type) => (
                  <div key={type} style={{ marginBottom: "0.75rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "capitalize", color: "var(--primary)", marginBottom: "0.25rem" }}>
                      {type === "company" ? "Company" : type === "person" ? "Person" : "Opportunity"}
                    </div>
                    <div className="text-muted text-sm" style={{ lineHeight: 1.8 }}>
                      {crmRequiredFields[type].join(" · ")}
                    </div>
                  </div>
                ))}
                <p className="text-muted text-sm" style={{ marginTop: "0.5rem", fontStyle: "italic" }}>
                  Lege records tellen niet. Als het veld leeg is, vul het aan.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* What Alec Checks */}
        <div style={{ maxWidth: 600, margin: "1rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowAlec(!showAlec)}
          >
            {showAlec ? "Verberg" : "Bekijk"} Wat Alec Controleert
          </button>
          {showAlec && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                <p className="text-muted text-sm" style={{ marginBottom: "0.75rem" }}>
                  Alec checkt de CRM wekelijks op deze punten:
                </p>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {alecChecks.map((c, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{c}</li>
                  ))}
                </ul>
                <h3 style={{ fontSize: "0.9rem", marginTop: "1rem", marginBottom: "0.5rem" }}>
                  Vrijdag CRM Cleanup (15 min)
                </h3>
                <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {crmCleanupChecklist.map((c, i) => (
                    <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{c}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Resources */}
        <div style={{ maxWidth: 600, margin: "1rem auto 0" }}>
          <button
            className="reveal-btn"
            style={{ width: "100%" }}
            onClick={() => setShowResources(!showResources)}
          >
            {showResources ? "Verberg" : "Bekijk"} Waar vind je wat
          </button>
          {showResources && (
            <div className="slide-up" style={{ textAlign: "left", marginTop: "0.75rem" }}>
              <div className="card">
                {resourceLinks.map((r) => (
                  <div
                    key={r.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid var(--neutral-100)",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{ fontWeight: 600, fontSize: "0.85rem" }}
                    >
                      {r.name}
                    </span>
                    <span
                      className="text-muted"
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "monospace",
                      }}
                    >
                      {r.url || r.loc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
