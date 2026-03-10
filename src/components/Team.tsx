interface Props {
  onNext: () => void;
}

const members = [
  {
    label: "Integration & Process",
    name: "Marcel Grauwen",
    desc: "25+ jaar ervaring. Ex-CTO GLO-Integration, ex-Partner Deloitte. Gewerkt met ASML, Air France-KLM. Marcel verbindt AI met legacy systemen — dit is waar 80% van de projecten vastloopt bij andere partijen.",
  },
  {
    label: "AI & Cloud",
    name: "Alec Siemerink",
    desc: "Cloud architectuur, DevOps, GenAI. Ex-Lab Digital (50+ AWS accounts). Bouwt de AI stack en beheert CRM/tooling. Je rapporteert wekelijks aan Alec.",
  },
  {
    label: "AI & ML",
    name: "Ruben Haisma",
    desc: "Applied ML, RAG pipelines, model tuning. Achtergrond in medische beeldvorming, NLP en multi-agent systemen. Ruben bouwt de intelligentie in de systemen.",
  },
];

export default function Team({ onNext }: Props) {
  return (
    <div className="section section-alt">
      <div className="container text-center">
        <p className="label">Het Team</p>
        <h2>3 Founders, Alle Pilaren Gedekt</h2>

        <div className="grid grid-3 mt-3" style={{ textAlign: "left" }}>
          {members.map((m) => (
            <div className="card" key={m.name}>
              <p className="card-label card-label-green">{m.label}</p>
              <h3 style={{ marginTop: "0.75rem" }}>{m.name}</h3>
              <p
                className="text-muted text-sm mt-1"
                style={{ lineHeight: 1.6 }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="callout mt-3">
          <p style={{ fontSize: "1.05rem", fontWeight: 500 }}>
            "De meeste bedrijven kunnen niet alle 4 pilaren in huis halen. Wij
            hebben ze alle 4 in 3 mensen."
          </p>
          <p className="text-muted text-sm mt-1">
            Dit is je kernboodschap in elk gesprek.
          </p>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Proposities
          </button>
        </div>
      </div>
    </div>
  );
}
