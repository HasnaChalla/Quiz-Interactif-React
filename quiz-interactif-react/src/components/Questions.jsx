import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

function Question({ question, onAnswer, onSkip }) {
  return (
    <div className="flex justify-center w-full px-4">
    <section className="bg-purple-800 p-6 rounded-xl w-full max-w-xl">
      <QuestionTimer timeout={5000} onTimeout={onSkip} />

      <h2 className="text-xl font-semibold mb-4">
        {question.text}
      </h2>

      <Answers
        answers={question.answers}
        correctAnswer={question.answers[0]}
        onAnswer={onAnswer}
      />
    </section>
    </div>
  );
}

export default Question;
