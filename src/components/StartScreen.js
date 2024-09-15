import { useContext } from "react";
import { QuizContext } from "./App";
import Difficulty from "./Difficulty";

export default function StartScreen() {
  const { numQuestions, dispatch } = useContext(QuizContext);

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <Difficulty />
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
