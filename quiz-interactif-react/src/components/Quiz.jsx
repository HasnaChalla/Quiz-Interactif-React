import React, { useCallback, useState } from "react";
import Question from "./Question";
import questions from "../questions";
import QuestionTimer from "./QuestionTimer";
import Summary from "./Summary";
import quizCompletedImg from "../images/quiz-logo.png"

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  const saveResp = useCallback((resp) => {
    setUserAnswers((prev) => [...prev, resp]);
  }, []);

  const nextQst = useCallback(() => {
    if (index < questions.length) {
      setIndex((prev) => prev + 1);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex  justify-center bg-gradient-to-br mb-5">
  
  <div >
    
    {index < questions.length && (
      <div className="bg-purple-800/90 p-6  rounded-2xl w-full max-w-xl shadow-xl h-90">
        <QuestionTimer nextQst={nextQst} index={index} />
        <Question question={questions[index]} saveResp={saveResp} />
      </div>
    )}

    {index === questions.length && (
      <div className="bg-gray-100/50 p-8 rounded-2xl max-w-xl mx-auto text-center space-y-6">

  <div className="flex justify-center">
   
    <img
      src={quizCompletedImg} 
      alt="Quiz Completed"
      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
    />
  </div>

  <h2 className="text-3xl font-bold text-gray">Quiz Completed!</h2>

  <div className="flex justify-around text-center">
    <div>
      <h2 className="text-4xl text-gray font-bold">
        {((questions.length - userAnswers.length) * 100 / questions.length).toFixed(0)}%
      </h2>
      <p className="text-sm text-gray">No response</p>
    </div>

    <div>
      <h2 className="text-4xl text-gray font-bold">
        {(userAnswers.filter(q => q.res === "correct").length * 100 / questions.length).toFixed(0)}%
      </h2>
      <p className="text-sm text-gray">Correct</p>
    </div>

    <div>
      <h2 className="text-4xl text-gray font-bold">
        {(userAnswers.filter(q => q.res === "wrong").length * 100 / questions.length).toFixed(0)}%
      </h2>
      <p className="text-sm text-gray">Wrong</p>
    </div>
  </div>
<div className="flex items-center justify-center my-6">
  <div className="w-2/3 h-px bg-black"></div>
</div>
  <Summary userAnswer={userAnswers} />
</div>

    )}

  </div>
</div>

  );
};

export default Quiz;
