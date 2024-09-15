import { useContext } from "react";
import { QuizContext } from "./App";

export default function NextButton() {
  const { dispatch, answer, numQuestions, index } = useContext(QuizContext);
  if (answer === null) {
    return null;
  }
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
