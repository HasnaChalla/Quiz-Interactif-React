import { useState } from "react";

const tab = [
  { index: 1, question: "question", answer: "vrai", status: "correct" },
  { index: 2, question: "question", answer: "vrai", status: "correct" },
];
export default function Sammury() {
  return (
    <>
      <title>QUIZ COMPLETED!</title>
      <h1 className="SKIPPEDPER">{4*100/7}SKIPPED</h1>
      <h1 className="ANSWEREDCORRECTLY">{1*100/7}ANSWERED CORRECTLY</h1>
      <h1 className="ANSWEREDINCORRECTLY">{2*100/7}ANSWERED INCORRECTLY</h1>
      <hr class="h-px my-8 bg-neutral-quaternary border-0" />
      {tab.map((elt) => (
        <div className="result">
            <h1>{elt.index}</h1>
            <h2>{elt.question}</h2>
            <h2>{elt.answer}</h2>
        </div>
      ))}
    </>
  );
}
