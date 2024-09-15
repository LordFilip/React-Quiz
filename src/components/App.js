import React, { useEffect, useReducer, createContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { type } from "@testing-library/user-event/dist/type";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import {
  reducer,
  initialState,
  SECS_PER_QUESTION,
} from "../functionality/reducer";
import RestartButton from "./RestartButton";

export const QuizContext = createContext();

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        numQuestions,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        maxPossiblePoints,
        reducer,
        dispatch,
      }}
    >
      <div className="app">
        <Header />
        <Main className="main">
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />

                <NextButton></NextButton>
              </Footer>
              <div className="proba">
                <RestartButton />
              </div>
            </>
          )}
          {status === "finished" && <FinishScreen />}
        </Main>
      </div>
    </QuizContext.Provider>
  );
}

export default App;
