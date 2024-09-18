import { useContext, useState } from "react";
import "../index.css";
import { QuizContext } from "./App";

export default function Difficulty() {
  const { difficulty, dispatch } = useContext(QuizContext);
  let { selected } = useContext(QuizContext);
  const [difficulty_, setDifficulty] = useState(difficulty || "");

  const handleChange = (event) => {
    const newDifficulty = event.target.value;
    setDifficulty(newDifficulty);
    dispatch({ type: "setDifficulty", payload: newDifficulty });
  };

  return (
    <div className="difficulty-container">
      <label htmlFor="difficulty">Choose Difficulty:</label>
      <select id="difficulty" value={difficulty_} onChange={handleChange}>
        <option value="" disabled>
          Select difficulty
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
