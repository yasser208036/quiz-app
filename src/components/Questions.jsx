import { useEffect, useState, useRef } from "react";
import { Button } from "./Button";

export const Questions = ({
  step,
  setStep,
  data,
  setScore,
  timer,
  setTimer,
}) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [barWidth, setBarWidth] = useState(0);
  const intervalRef = useRef(null);
  const timerRef = useRef(null);
  const [answer, setAnswer] = useState({
    type: null,
    value: "",
  });
  let rightAnswer = data[questionNumber - 1].answer;

  const checkAnswer = (option) => {
    if (option === rightAnswer) {
      setAnswer({ type: "correct", value: option });
      setScore((prev) => prev + 1);
    } else {
      setAnswer({ type: "wrong", value: option });
    }
    clearInterval(timerRef.current);
    clearInterval(intervalRef.current);
  };

  const handleNextQuestion = () => {
    if (questionNumber < data.length) {
      setQuestionNumber(questionNumber + 1);
      setAnswer({
        type: null,
        value: "",
      });
      setTimer(15);
    } else {
      setStep(step + 1);
      setQuestionNumber(1);
      setAnswer({
        type: null,
        value: "",
      });
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [questionNumber]);

  useEffect(() => {
    setBarWidth(0);
    intervalRef.current = setInterval(() => {
      setBarWidth((prev) => {
        if (prev >= 550) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 15000 / 550);
    return () => clearInterval(intervalRef.current);
  }, [step, questionNumber]);

  return (
    <div className={`${step === 2 ? "visable" : "hidden"} card question`}>
      <header>
        <p>Awesome Quiz Application</p>
        <div className="counter">
          Time Left
          <span>{timer < 10 ? `0${timer}` : timer}</span>
        </div>
        <div style={{ width: `${barWidth}px` }} className="timer-bar"></div>
      </header>
      <main>
        <h2>
          {data[questionNumber - 1].number}. {data[questionNumber - 1].question}
        </h2>
        <ul className={answer.type !== null || timer === 0 ? "disable" : ""}>
          {data[questionNumber - 1].options.map((option) => (
            <li
              className={answer.value === option ? answer.type : ""}
              key={option}
              onClick={() => checkAnswer(option)}
            >
              {option}
              {answer.value === option ? (
                answer.type === "correct" ? (
                  <span>✔</span>
                ) : (
                  <span>❌</span>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>
          {questionNumber} of {data.length} Question
        </p>
        {(timer === 0 || answer.type) && (
          <Button
            className="primary-btn"
            label="Next Question"
            onClick={handleNextQuestion}
          />
        )}
      </footer>
    </div>
  );
};
