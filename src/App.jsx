import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Rules } from "./components/Rules";
import { Questions } from "./components/Questions";
import { Score } from "./components/Score";

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);

  const data = [
    {
      number: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      number: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      number: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      number: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      number: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ];
  return (
    <div className="container">
      <Button
        className={`${step === 0 ? "visable" : "hidden"} main-button`}
        label="Start Quiz"
        onClick={() => setStep(1)}
      />
      <Rules step={step} setStep={setStep} setTimer={setTimer} />
      <Questions
        step={step}
        setStep={setStep}
        data={data}
        setScore={setScore}
        timer={timer}
        setTimer={setTimer}
      />
      <Score
        step={step}
        setStep={setStep}
        total={data.length}
        score={score}
        setScore={setScore}
        setTimer={setTimer}
      />
    </div>
  );
}

export default App;
