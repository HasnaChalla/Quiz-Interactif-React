/** @format */

import logo from "../images/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-6 py-20">
      <img src={logo} alt="React Quiz Logo" className="w-16 h-16" />
      <h1 className="text-4xl tracking-widest font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E781FB] to-[#8E76FA]">
        REACTQUIZ
      </h1>
    </header>
  );
}
