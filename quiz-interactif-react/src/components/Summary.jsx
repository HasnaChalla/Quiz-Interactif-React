import React from 'react';
import questions from '../questions';

const Summary = ({ userAnswer }) => {
  return (
    <div>
      {questions.map((qst, i) => {
        const response = userAnswer.find(ans => ans.id === qst.id);

        // Pas de réponse
        if (!response) {
          return (
            <div key={qst.id}>
              <h1>{i + 1}</h1>
              <p>{qst.text}</p>
              <p style={{ color: "white" }}>Skipped</p>
            </div>
          );
        }

        // Réponse correcte ou fausse
        const isCorrect = response.res === "correct";

        return (
          <div key={qst.id}>
            <h1>{i + 1}</h1>
            <p>{qst.text}</p>
            <p style={{ color: isCorrect ? "green" : "red" }}>
              {qst.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
