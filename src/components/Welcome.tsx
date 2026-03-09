interface Props {
  onNext: () => void;
}

export default function Welcome({ onNext }: Props) {
  return (
    <div className="container hero">
      <p className="label">Onboarding</p>
      <h1>Welkom bij Laava</h1>
      <p className="subtitle">
        Deze interactieve Academy neemt je in ~15 minuten mee door alles wat je
        moet weten: wie we zijn, wat we verkopen, wie de concurrentie is, en hoe
        je je eerste gesprekken voert.
      </p>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-value">3</div>
          <div className="stat-label">Founders</div>
        </div>
        <div className="stat">
          <div className="stat-value">4</div>
          <div className="stat-label">Technische pilaren</div>
        </div>
        <div className="stat">
          <div className="stat-value">8</div>
          <div className="stat-label">Proposities</div>
        </div>
        <div className="stat">
          <div className="stat-value">0</div>
          <div className="stat-label">Vendor lock-in</div>
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-primary" onClick={onNext}>
          Start de Academy
        </button>
      </div>
    </div>
  );
}
