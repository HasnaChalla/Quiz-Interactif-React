import { useCallback, useState } from "react";
import Question from "./Questions";
import questions from "../questions";
import Summary from "./Summary";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = useCallback(
    (answer) => {
      const currentQuestion = questions[index];

      setUserAnswers((prev) => [
        ...prev,
        {
          id: currentQuestion.id,
          res:
            answer === currentQuestion.answers[0]
              ? "correct"
              : "wrong",
        },
      ]);

      setIndex((prev) => prev + 1);
    },
    [index]
  );

  const handleSkip = useCallback(() => {
    const currentQuestion = questions[index];

    setUserAnswers((prev) => [
      ...prev,
      {
        id: currentQuestion.id,
        res: "noResponse",
      },
    ]);

    setIndex((prev) => prev + 1);
  }, [index]);

  if (index === questions.length) {
    const correct = userAnswers.filter(a => a.res === "correct").length;
    const wrong = userAnswers.filter(a => a.res === "wrong").length;
    const skipped = userAnswers.filter(a => a.res === "noResponse").length;

    return (
      <div>
        <p>{(skipped * 100 / questions.length).toFixed(0)}%</p>
        <p>{(correct * 100 / questions.length).toFixed(0)}%</p>
        <p>{(wrong * 100 / questions.length).toFixed(0)}%</p>

        <Summary userAnswer={userAnswers} />
      </div>
    );
  }

  return (
    <Question
      question={questions[index]}
      onAnswer={handleAnswer}
      onSkip={handleSkip}
    />
  );
};

export default Quiz;