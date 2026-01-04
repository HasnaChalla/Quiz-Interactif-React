/** @format */

import logo from "../images/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-content gap-4 mb-12">
      <img src={logo} alt="React Quiz Logo" className="w-12 h-12 mt-20" />
      <h1 className="text-3xl tracking-widest font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E781FB] to-[#8E76FA]">
        REACTQUIZ
      </h1>
    </header>
  );
}
