import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remaining, setRemaining] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(prev => prev - 100);
    }, 100);

    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  return (
    <progress
      value={remaining}
      max={timeout}
      className="w-full h-2 mb-4"
    />
  );
}

export default QuestionTimer;
