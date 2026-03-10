import { useState } from "react";
import { pillarDetails } from "../data/content";
import InfoTip from "./InfoTip";

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
              <p className="text-muted text-sm mt-1">
                {i === 0 && (
                  <>
                    RAG
                    <InfoTip term="RAG">
                      Retrieval-Augmented Generation. Een techniek waarbij een AI-model
                      eerst relevante documenten opzoekt en die meeneemt in zijn antwoord.
                      Zo kan het bedrijfsspecifieke kennis gebruiken zonder het model te hertrainen.
                    </InfoTip>
                    , agents, model tuning, NLP
                    <InfoTip term="NLP">
                      Natural Language Processing — het vermogen van AI om menselijke taal te
                      begrijpen en te genereren. Denk aan chatbots, documentanalyse, en e-mailverwerking.
                    </InfoTip>
                  </>
                )}
                {i === 1 && (
                  <>
                    Production code, APIs
                    <InfoTip term="API">
                      Application Programming Interface — de manier waarop systemen met
                      elkaar communiceren. Zoals een stekker en stopcontact, maar dan voor software.
                    </InfoTip>
                    , testing
                  </>
                )}
                {i === 2 && (
                  <>
                    ERP
                    <InfoTip term="ERP">
                      Enterprise Resource Planning — software die bedrijfsprocessen beheert
                      (financien, voorraad, HR). Voorbeelden: SAP, Exact, Microsoft Dynamics.
                    </InfoTip>
                    , CRM
                    <InfoTip term="CRM">
                      Customer Relationship Management — software om klantrelaties te beheren.
                      Voorbeelden: Salesforce, HubSpot, Twenty.
                    </InfoTip>
                    , legacy, BPMN
                    <InfoTip term="BPMN">
                      Business Process Model and Notation — een standaard om bedrijfsprocessen
                      visueel te tekenen, zodat iedereen (technisch en niet-technisch) ze begrijpt.
                    </InfoTip>
                  </>
                )}
                {i === 3 && (
                  <>
                    Cloud, Kubernetes
                    <InfoTip term="Kubernetes">
                      Een systeem dat software automatisch beheert op servers: het schaalt op
                      bij drukte, herstart bij crashes, en verdeelt de belasting. Denk aan een
                      verkeersregelaar voor je applicaties.
                    </InfoTip>
                    , CI/CD
                    <InfoTip term="CI/CD">
                      Continuous Integration / Continuous Deployment — een geautomatiseerd
                      proces dat code test en naar productie brengt. Zorgt ervoor dat updates
                      snel en veilig live gaan.
                    </InfoTip>
                  </>
                )}
              </p>
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
