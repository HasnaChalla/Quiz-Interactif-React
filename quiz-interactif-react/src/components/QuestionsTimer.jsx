import { useEffect } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  return <hr className="timer-bar" />;
}

export default QuestionTimer;