import { useState } from "react";

const Answers = ({ answers, selectedAnswer, correctAnswer }) => {
  const [etat, setEtat] = useState(""); // "selected" après un clic
  const [answer, setAnswer] = useState(null); // réponse choisie

  const handleClick = (ans) => {
    console.log(correctAnswer)
    if (etat === "selected") return;
    setAnswer(ans);
    setEtat("selected");
    selectedAnswer(ans); // remonte la réponse choisie au parent
  };

  const getClass = (ans) => {
    
    if (etat !== "selected") 
      return "bg-blue-500 hover:bg-orange-500";

    if (ans !== answer) 
      return "bg-blue-500 opacity-70";

    return ans === correctAnswer
      ? "bg-green-600"
      : "bg-red-600";
  };

  return (
    <ul className="space-y-4">
      {answers.map((ans) => (
        <li key={ans}>
          <button
            onClick={() => handleClick(ans)}
            disabled={etat === "selected"} // désactive après clic
            className={`w-full py-3 rounded-xl text-white font-medium transition-all duration-300 ${getClass(ans)}`}
          >
            {ans}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Answers;
