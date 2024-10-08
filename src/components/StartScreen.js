import { useContext, useState } from "react";
import { QuizContext } from "./App";
import Difficulty from "./Difficulty";

export default function StartScreen() {
  const { numQuestions, dispatch } = useContext(QuizContext);
  let { selected } = useContext(QuizContext);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    if (!isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  };

  const handleCLick = () => {
    if (selected) {
      dispatch({ type: "start" });
    }
  };

  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <Difficulty />

      <button className="btn btn-ui" onClick={() => handleCLick()}>
        Let's start
      </button>

      <button className=" btn-ui btn-switch" onClick={toggleTheme}>
        {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
}
