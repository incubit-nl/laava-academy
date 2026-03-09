import { useState } from "react";
import { questions } from "../data/content";

interface Props {
  onNext: () => void;
  onScoreUpdate: (score: number) => void;
}

export default function Quiz({ onNext, onScoreUpdate }: Props) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const q = questions[current];

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) {
      const newScore = score + 1;
      setScore(newScore);
      onScoreUpdate(newScore);
    }
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      onNext();
    }
  }

  return (
    <div className="section section-light">
      <div className="container">
        <div className="text-center mb-2">
          <p className="label">Kennistest</p>
          <h2>Test Je Kennis</h2>
        </div>

        <div className="quiz-container">
          <div className="quiz-header">
            <span className="text-muted text-sm">
              Vraag {current + 1} / {questions.length}
            </span>
            <span className="quiz-score">Score: {score}</span>
          </div>

          <div className="quiz-question">{q.q}</div>

          <div className="quiz-answers">
            {q.answers.map((a, i) => {
              let cls = "btn-answer";
              if (selected !== null) {
                cls += " disabled";
                if (i === q.correct) cls += " correct";
                if (i === selected && selected !== q.correct) cls += " wrong";
              }
              return (
                <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                  {a}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className={`quiz-feedback ${selected === q.correct ? "correct" : "wrong"}`}>
              <strong>{selected === q.correct ? "Correct." : "Niet helemaal."}</strong>{" "}
              {q.feedback}
            </div>
          )}

          {selected !== null && (
            <div className="mt-2">
              <button className="btn btn-primary" onClick={handleNext}>
                {current < questions.length - 1 ? "Volgende vraag" : "Ga verder"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
