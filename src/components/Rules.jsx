import { Button } from "./Button";

export const Rules = ({ step, setStep, setTimer }) => {
  return (
    <div className={`${step === 1 ? "visable" : "hidden"} card`}>
      <header className="header">Some Rules of this Quiz</header>
      <main>
        <ol>
          <li>
            You will have only <span>15 seconds</span> per each question.
          </li>
          <li>Once you select your answer, it can't be undone.</li>
          <li>You can't select any option once time goes off</li>
          <li>You can't exit from the Quiz while you're playing</li>
          <li>You'll get points on the basis of your correct answers</li>
        </ol>
      </main>
      <footer>
        <Button
          className="secoundry-btn"
          label="Exit Quiz"
          onClick={() => setStep(0)}
        />
        <Button
          className="primary-btn"
          label="Continue"
          onClick={() => {
            setStep(2);
            setTimer(15);
          }}
        />
      </footer>
    </div>
  );
};
