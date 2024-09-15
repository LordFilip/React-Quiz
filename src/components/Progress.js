import { useContext } from "react";
import { QuizContext } from "./App";

export default function Progress({}) {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useContext(QuizContext);

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Questions: <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}
