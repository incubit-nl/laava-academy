import { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Pillars from "./components/Pillars";
import Team from "./components/Team";
import Propositions from "./components/Propositions";
import Cases from "./components/Cases";
import Objections from "./components/Objections";
import Competition from "./components/Competition";
import Outreach from "./components/Outreach";
import Quiz from "./components/Quiz";
import PitchSimulator from "./components/PitchSimulator";
import Roadmap from "./components/Roadmap";
import Checklist from "./components/Checklist";
import Result from "./components/Result";

const TOTAL_SCREENS = 13;

function App() {
  const [screen, setScreen] = useState(0);
  const [score, setScore] = useState(0);

  function goTo(n: number) {
    setScreen(n);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    // Update progress bar
    const pct = (screen / (TOTAL_SCREENS - 1)) * 100;
    const bar = document.getElementById("progress-fill");
    if (bar) bar.style.width = pct + "%";
  }, [screen]);

  const screens = [
    <Welcome onNext={() => goTo(1)} />,
    <Pillars onNext={() => goTo(2)} />,
    <Team onNext={() => goTo(3)} />,
    <Propositions onNext={() => goTo(4)} />,
    <Cases onNext={() => goTo(5)} />,
    <Objections onNext={() => goTo(6)} />,
    <Competition onNext={() => goTo(7)} />,
    <Outreach onNext={() => goTo(8)} />,
    <Quiz onNext={() => goTo(9)} onScoreUpdate={setScore} />,
    <PitchSimulator onNext={() => goTo(10)} />,
    <Roadmap onNext={() => goTo(11)} />,
    <Checklist onNext={() => goTo(12)} />,
    <Result score={score} />,
  ];

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress-fill" id="progress-fill" />
      </div>

      {/* Nav dots */}
      <div className="nav-dots">
        {Array.from({ length: TOTAL_SCREENS }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot${i === screen ? " active" : ""}${i < screen ? " completed" : ""}`}
            onClick={() => {
              if (i <= screen) goTo(i);
            }}
          />
        ))}
      </div>

      {/* Current screen */}
      <div key={screen} className="screen-enter">
        {screens[screen]}
      </div>
    </>
  );
}

export default App;
