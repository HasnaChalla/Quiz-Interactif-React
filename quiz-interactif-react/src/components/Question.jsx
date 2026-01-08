import React, { useCallback, useMemo } from "react";
import Answers from "./Answers.jsx";

const Question = ({ question, saveResp }) => {

  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const shuffledAnswers = useMemo(() => {
    return shuffle(question.answers);
  }, [question.id]);

  const selectedAnswer = useCallback((answer) => {
    const response = {
      id: question.id,
      res:
        answer === ""
          ? "noResponse"
          : answer === question.answer
          ? "correct"
          : "wrong",
    };

    saveResp(response);
  }, [question, saveResp]);

  return (
    <div >
    
        <p className="text-xl font-semibold mb-6 text-white text-center">
          {question.text}
        </p>

        <Answers
          key={question.id}
          answers={shuffledAnswers}
          selectedAnswer={selectedAnswer}
          correctAnswer={question.answer}
        />
     
    </div>
  );
};

export default Question;
