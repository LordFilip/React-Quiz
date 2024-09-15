import { useContext } from "react";
import { QuizContext } from "./App";

export default function RestartButton() {
  const { dispatch, index, status } = useContext(QuizContext);

  const buttonClass = status === "finished" ? "btn btn-ui" : "btn";

  return (
    <button
      className={buttonClass}
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart
    </button>
  );
}
