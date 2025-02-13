import { Icon } from "@iconify/react";
import { Button } from "./Button";

export const Score = ({ step, setStep, total, score, setScore, setTimer }) => {
  return (
    <div className={`${step === 3 ? "visable" : "hidden"} score card`}>
      <Icon
        style={{ color: "#007bff" }}
        icon="ix:trophy"
        width="70"
        height="70"
      />
      <p>You've completed the Quiz!</p>
      <p>
        Your score is {score} out of {total}
      </p>
      <footer>
        <Button
          className="primary-btn"
          label="Replay Quiz"
          onClick={() => {
            setStep(2);
            setScore(0);
            setTimer(15);
          }}
        />
        <Button
          className="secoundry-btn"
          label="Quit Quiz"
          onClick={() => {
            setStep(0);
            setScore(0);
          }}
        />
      </footer>
    </div>
  );
};
