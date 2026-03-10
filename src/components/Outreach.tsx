import { useState } from "react";
import {
  outreachMistakes,
  outreachCadence,
  weeklyTargets,
  weeklyRhythm,
  dutchMarketRules,
  emailTemplate,
  partnerTypes,
  linkedInContentMix,
  linkedInProfileTips,
  conversionBenchmarks,
  abTestingVars,
  phoneCallScript,
  competitiveTactics,
} from "../data/content";
import InfoTip from "./InfoTip";

interface Props {
  onNext: () => void;
}

type Tab = "mistakes" | "cadence" | "dutch" | "linkedin" | "partners" | "rhythm" | "testing" | "tactics";

export default function Outreach({ onNext }: Props) {
  const [tab, setTab] = useState<Tab>("mistakes");

  const tabs: { key: Tab; label: string }[] = [
    { key: "mistakes", label: "5 Fouten" },
    { key: "dutch", label: "NL Markt" },
    { key: "cadence", label: "Cadence" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "partners", label: "Partners" },
    { key: "rhythm", label: "Weekritme" },
    { key: "testing", label: "A/B Testing" },
    { key: "tactics", label: "BD Tactics" },
  ];

  return (
    <div className="section section-alt">
      <div className="container text-center">
        <p className="label">Outreach Playbook</p>
        <h2>Hoe Je Prospects Benadert</h2>
        <p className="subtitle">
          Lessen uit 593 e-mails (0.34% conversie), de Nederlandse markt,
          multi-channel cadence, en je weekritme.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            justifyContent: "center",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              className={tab === t.key ? "btn btn-primary" : "btn btn-outline"}
              style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "mistakes" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Eerste campagne: 593 mails → 82 bedrijven → 2 meetings (0.34%).
              Dit zijn de 5 fouten die je niet mag herhalen.
            </p>
            {outreachMistakes.map((m, i) => (
              <div key={i} className="card" style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--error)", lineHeight: 1 }}>
                    {i + 1}
                  </span>
                  <h3 style={{ margin: 0 }}>{m.title}</h3>
                </div>
                <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>{m.desc}</p>
                <div
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.75rem",
                    background: "var(--success-light)",
                    borderRadius: 8,
                    fontSize: "0.85rem",
                    color: "var(--neutral-700)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Regel:</strong> {m.rule}
                </div>
                <p className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.5rem", fontStyle: "italic" }}>
                  {m.stat}
                </p>
              </div>
            ))}
          </div>
        )}

        {tab === "dutch" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Nederland is niet de VS. Wat werkt in Amerikaanse SaaS-playbooks
              vertaalt niet direct. Dit moet je weten.
            </p>
            {dutchMarketRules.map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--neutral-200)",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>{r.title}</strong>
                <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.25rem" }}>{r.desc}</p>
              </div>
            ))}

            <h3 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>E-mail Template (4 zinnen)</h3>
            <div className="card">
              <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {emailTemplate.structure.map((s, i) => (
                  <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{s}</li>
                ))}
              </ol>
              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "var(--neutral-50)",
                  borderRadius: 8,
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-600)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {emailTemplate.example}
              </div>
            </div>
          </div>
        )}

        {tab === "cadence" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Per prospect: 6 touches over 3 kanalen in 3 weken. 15-20 minuten
              research vooraf.
            </p>
            <div className="timeline">
              {outreachCadence.map((c) => (
                <div className="timeline-item" key={c.day}>
                  <div className="timeline-period">{c.day}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                    <span
                      className="card-label"
                      style={{
                        margin: 0,
                        background:
                          c.channel === "LinkedIn" ? "#eff6ff" : c.channel === "E-mail" ? "#fffbeb" : "#f0fdf4",
                        color:
                          c.channel === "LinkedIn" ? "#2563eb" : c.channel === "E-mail" ? "#d97706" : "#059669",
                      }}
                    >
                      {c.channel}
                    </span>
                  </div>
                  <div className="timeline-desc" style={{ marginTop: "0.25rem" }}>{c.action}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "var(--neutral-50)",
                borderRadius: 10,
                textAlign: "center",
                border: "1px solid var(--neutral-200)",
              }}
            >
              <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
                <strong>Na dag 20:</strong> Verplaats naar nurture-lijst. Blijf
                LinkedIn-content liken. Nodig uit voor events. Herbenader na 3-6
                maanden met een nieuwe aanleiding.
              </p>
            </div>

            <h3 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>
              Verwachte Conversie
              <InfoTip term="Conversion Benchmarks">
                Op basis van realistische Nederlandse B2B conversieratio's. Deze
                cijfers zijn startpunten — track je eigen data en optimaliseer.
              </InfoTip>
            </h3>
            <div className="card">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th className="text-sm" style={{ textAlign: "left", padding: "0.5rem 0", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Stage</th>
                    <th className="text-sm" style={{ textAlign: "right", padding: "0.5rem 0", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Conversie</th>
                    <th className="text-sm" style={{ textAlign: "right", padding: "0.5rem 0", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Per maand</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionBenchmarks.map((b) => (
                    <tr key={b.stage}>
                      <td className="text-sm" style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--neutral-100)", color: "var(--neutral-600)" }}>{b.stage}</td>
                      <td style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--neutral-100)", fontWeight: 600, textAlign: "right", fontSize: "0.85rem" }}>{b.rate}</td>
                      <td className="text-muted text-sm" style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--neutral-100)", textAlign: "right" }}>{b.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.75rem", lineHeight: 1.5 }}>
                Gebaseerd op 40-60 prospects/maand in cadence. 2-4 scans/maand is een succes.
              </p>
            </div>
          </div>
        )}

        {tab === "linkedin" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>Profiel Optimalisatie</h3>
            <div className="card" style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div style={{ flex: 1, padding: "0.75rem", background: "var(--error-light)", borderRadius: 8 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--error)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>Fout</div>
                  <span className="text-sm" style={{ color: "var(--neutral-600)" }}>{linkedInProfileTips.bad}</span>
                </div>
                <div style={{ flex: 1, padding: "0.75rem", background: "var(--success-light)", borderRadius: 8 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--success)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>Goed</div>
                  <span className="text-sm" style={{ color: "var(--neutral-600)" }}>{linkedInProfileTips.good}</span>
                </div>
              </div>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {linkedInProfileTips.rules.map((r, i) => (
                  <li key={i} className="text-muted text-sm" style={{ lineHeight: 1.8 }}>{r}</li>
                ))}
              </ul>
            </div>

            <h3 style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>Content Mix (3-5 posts/week)</h3>
            <div className="card">
              {linkedInContentMix.map((c) => (
                <div
                  key={c.day}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--neutral-100)",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontWeight: 700, minWidth: 70, fontSize: "0.85rem", color: "var(--primary)" }}>{c.day}</span>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{c.type}</span>
                    <br />
                    <span className="text-muted" style={{ fontSize: "0.8rem", fontStyle: "italic" }}>{c.example}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="callout"
              style={{ marginTop: "1.5rem", borderColor: "var(--neutral-300)" }}
            >
              <h3>Laava's LinkedIn Differentiators</h3>
              <p style={{ textAlign: "left" }}>
                Post echte build logs (geanonimiseerd). Wees radicaal eerlijk
                ("we zeiden tegen een prospect dat AI niet geschikt was"). Laat
                de integratie-laag zien — niemand praat over SAP-koppelingen.
                Herhaal: "4 weken, vaste prijs." Events = foto's, takeaways,
                tags.
              </p>
            </div>
          </div>
        )}

        {tab === "partners" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Flowshift (Rutger van Hagen) is de huidige partner. Jouw taak:
              uitbreiden naar meerdere kanalen.
            </p>
            {partnerTypes.map((p) => (
              <div key={p.type} className="card" style={{ marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{p.type}</h3>
                <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>{p.desc}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--success)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                  <strong>Voorbeelden:</strong> {p.examples}
                </p>
              </div>
            ))}

            <h3 style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>Partner Outreach Aanpak</h3>
            <div className="card">
              <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {[
                  "Research de organisatie — wie zijn ze, wie bedienen ze?",
                  "Vind de partnerships/BD-verantwoordelijke",
                  "LinkedIn connect + persoonlijk bericht over wederzijdse waarde",
                  "Stel koffie/call voor om samenwerking te verkennen",
                  "Begin klein: co-host één event, doe één referral",
                  "Formaliseer met een simpele partnerovereenkomst als het werkt",
                ].map((step, i) => (
                  <li key={i} className="text-muted text-sm" style={{ lineHeight: 2 }}>{step}</li>
                ))}
              </ol>
            </div>

            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                background: "var(--neutral-50)",
                borderRadius: 10,
                border: "1px solid var(--neutral-200)",
              }}
            >
              <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
                <strong>Bestaand materiaal:</strong> Check SharePoint →
                05_Business_Development/Partnerships/ voor partnership
                proposition deck, MKB Werkplaats channel program, en workshop
                concepten.
              </p>
            </div>
          </div>
        )}

        {tab === "rhythm" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <h3 style={{ marginBottom: "1rem" }}>Weekritme</h3>
            {weeklyRhythm.map((r) => (
              <div
                key={r.day}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--neutral-100)",
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontWeight: 700, minWidth: 60, color: "var(--primary)" }}>{r.day}</span>
                <span className="text-muted text-sm" style={{ lineHeight: 1.6 }}>{r.focus}</span>
              </div>
            ))}

            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Weektargets</h3>
            <div className="card">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {weeklyTargets.map((t) => (
                    <tr key={t.activity}>
                      <td
                        className="text-sm"
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid var(--neutral-100)",
                          color: "var(--neutral-600)",
                        }}
                      >
                        {t.activity}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem 0",
                          borderBottom: "1px solid var(--neutral-100)",
                          fontWeight: 700,
                          textAlign: "right",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="callout callout-primary" style={{ marginTop: "1.5rem" }}>
              <h3>
                Weekrapport aan Alec
                <InfoTip term="Weekrapport">
                  Elke vrijdag een kort bericht: scans geboekt, key gesprekken,
                  blockers, en plan voor volgende week. Kort en krachtig.
                </InfoTip>
              </h3>
              <p>
                Elke vrijdag: scans geboekt, pipeline status, key learnings,
                blockers, plan voor volgende week.
              </p>
            </div>
          </div>
        )}

        {tab === "testing" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Stuur versie A naar 10 prospects, versie B naar 10 uit hetzelfde segment.
              Na 2 weken: vergelijk reply rates. Winnaar wordt de nieuwe standaard.
            </p>

            <div className="card" style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>Variabelen om te testen</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th className="text-sm" style={{ textAlign: "left", padding: "0.5rem 0", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Variable</th>
                    <th className="text-sm" style={{ textAlign: "left", padding: "0.5rem", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Versie A</th>
                    <th className="text-sm" style={{ textAlign: "left", padding: "0.5rem 0", borderBottom: "2px solid var(--neutral-200)", color: "var(--neutral-500)", fontWeight: 600 }}>Versie B</th>
                  </tr>
                </thead>
                <tbody>
                  {abTestingVars.map((t) => (
                    <tr key={t.variable}>
                      <td style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--neutral-100)", fontWeight: 600, fontSize: "0.85rem" }}>{t.variable}</td>
                      <td className="text-muted text-sm" style={{ padding: "0.5rem", borderBottom: "1px solid var(--neutral-100)" }}>{t.a}</td>
                      <td className="text-muted text-sm" style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--neutral-100)" }}>{t.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card">
              <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>Telefoon Script</h3>
              <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
                <strong>Timing:</strong> {phoneCallScript.timing}
              </p>
              <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.25rem" }}>
                <strong>Duur:</strong> {phoneCallScript.duration}
              </p>
              <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.25rem" }}>
                <strong>Structuur:</strong> {phoneCallScript.structure}
              </p>
              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "0.75rem",
                  background: "var(--error-light)",
                  borderRadius: 8,
                }}
              >
                <strong style={{ fontSize: "0.85rem" }}>Key rule:</strong>{" "}
                <span className="text-muted text-sm">{phoneCallScript.keyRule}</span>
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "0.75rem",
                  background: "var(--neutral-50)",
                  borderRadius: 8,
                }}
              >
                <strong style={{ fontSize: "0.85rem" }}>Als ze nee zeggen:</strong>{" "}
                <span className="text-muted text-sm" style={{ fontStyle: "italic" }}>{phoneCallScript.ifNo}</span>
              </div>
            </div>
          </div>
        )}

        {tab === "tactics" && (
          <div className="mt-3" style={{ maxWidth: 720, margin: "2rem auto 0", textAlign: "left" }}>
            <p className="text-muted text-sm" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
              Wat we kunnen leren van concurrenten — adapteer voor Laava.
            </p>
            {competitiveTactics.map((t) => (
              <div key={t.from} className="card" style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ margin: 0, fontSize: "1rem" }}>{t.tactic}</h3>
                  <span className="text-muted" style={{ fontSize: "0.75rem", fontStyle: "italic" }}>
                    Geïnspireerd door {t.from}
                  </span>
                </div>
                <p className="text-muted text-sm" style={{ lineHeight: 1.6, marginTop: "0.5rem" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3">
          <button className="btn btn-primary" onClick={onNext}>
            Start de Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
