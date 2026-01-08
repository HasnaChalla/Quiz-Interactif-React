import { useEffect } from "react";

const QuestionTimer = ({ index, nextQst }) => {
  useEffect(() => {
    const timer = setTimeout(nextQst, 5000);
    return () => clearTimeout(timer);
  }, [index, nextQst]);

  return (
    <div className="w-full h-2 bg-purple-900 rounded mb-4 overflow-hidden">
      <div key={index} className="h-full bg-pink-400 timer-animation" />
    </div>
  );
};

export default QuestionTimer;
