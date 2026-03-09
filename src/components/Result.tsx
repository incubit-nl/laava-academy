import { useEffect } from "react";
import { questions } from "../data/content";

interface Props {
  score: number;
}

function launchConfetti() {
  const colors = ["#FF565C", "#171717", "#059669", "#6b7280", "#d97706"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "confetti";
    p.style.left = Math.random() * 100 + "vw";
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = Math.random() * 2 + "s";
    p.style.animationDuration = 2 + Math.random() * 2 + "s";
    p.style.width = 5 + Math.random() * 6 + "px";
    p.style.height = 5 + Math.random() * 6 + "px";
    p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}

export default function Result({ score }: Props) {
  const total = questions.length;
  const pct = (score / total) * 100;

  let message: string;
  if (pct >= 90) message = "Uitstekend. Je bent klaar om de markt op te gaan.";
  else if (pct >= 70) message = "Goed gedaan. Nog even de documenten doorlezen en je bent helemaal klaar.";
  else if (pct >= 50) message = "Goede start. Neem de onboarding docs nog een keer door — je komt er snel.";
  else message = "Geen zorgen. Rome is ook niet in een dag gebouwd. Lees de docs en probeer het nog eens.";

  useEffect(() => {
    if (pct >= 90) launchConfetti();
  }, [pct]);

  return (
    <div className="section section-light" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container text-center">
        <p className="label">Resultaat</p>
        <p className="text-muted">Je quiz score</p>
        <div className="result-score">
          {score}/{total}
        </div>
        <p className="subtitle">{message}</p>

        <div className="callout callout-primary mt-3">
          <h3>Klaar Voor Actie</h3>
          <p>
            Je kent nu Laava's DNA, proposities, concurrenten en salesaanpak. De
            echte lessen komen in het veld. Onthoud:{" "}
            <strong style={{ color: "var(--neutral-900)" }}>
              de gratis AI Opportunity Scan is je beste wapen.
            </strong>{" "}
            Elke interactie draait om een vraag: "Hebben jullie 90 minuten voor
            een gratis scan met concrete aanbevelingen?"
          </p>
        </div>

        <div className="mt-3" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-outline" onClick={() => location.reload()}>
            Opnieuw spelen
          </button>
          <a className="btn btn-primary" href="https://laava.nl" target="_blank" rel="noopener noreferrer">
            Bekijk laava.nl
          </a>
        </div>

        <p className="text-muted text-sm mt-3" style={{ opacity: 0.5 }}>
          Gebouwd door het Laava team
        </p>
      </div>
    </div>
  );
}
