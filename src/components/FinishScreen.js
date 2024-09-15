import { useContext } from "react";
import { QuizContext } from "./App";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } =
    useContext(QuizContext);
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} {Math.ceil(percentage)}%
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
