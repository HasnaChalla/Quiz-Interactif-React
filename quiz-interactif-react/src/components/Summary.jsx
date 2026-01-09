/** @format */

import React from "react";
import questions from "../questions";

const Summary = ({ userAnswer }) => {
  return (
    <div className="space-y-6">
      {questions.map((qst, i) => {
        const response = userAnswer.find((ans) => ans.id === qst.id);
        const isCorrect = response?.res === "correct";

        return (
          <div key={qst.id} className="text-center space-y-2">
            {/* Numéro centré dans disque noir */}
            <div className="flex justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-bold">
                {i + 1}
              </div>
            </div>

            {/* Question */}
            <p className="font-semibold">{qst.text}</p>

            {/* Réponse */}
            {!response && <p className="text-white">Skipped</p>}

            {response && (
              <p className={isCorrect ? "text-green-500" : "text-red-500"}>
                {qst.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
