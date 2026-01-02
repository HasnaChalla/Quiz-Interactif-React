import { useRef, useState } from "react";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Answers({ answers, correctAnswer, onAnswer }) {
  const shuffled = useRef(shuffle(answers));
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("idle"); 

  function handleClick(answer) {
    if (selected) return;

    setSelected(answer);
    setStatus("selected"); 

    setTimeout(() => {
      if (answer === correctAnswer) {
        setStatus("correct"); 
      } else {
        setStatus("wrong");
      }
    }, 500);

    setTimeout(() => {
      onAnswer(answer);
    }, 1200);
  }

  function getButtonStyle(answer) {
    if (status === "selected" && answer === selected)
      return "bg-orange-400";

    if (status === "correct" && answer === correctAnswer)
      return "bg-green-600";

    if (status === "wrong" && answer === selected)
      return "bg-red-600";

    return "bg-blue-500 hover:bg-blue-600";
  }

  return (
    <ul className="space-y-3">
      {shuffled.current.map(answer => (
        <li key={answer}>
          <button
            onClick={() => handleClick(answer)}
            disabled={selected !== null}
            className={`w-full py-2 rounded transition-colors ${getButtonStyle(answer)}`}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Answers;
