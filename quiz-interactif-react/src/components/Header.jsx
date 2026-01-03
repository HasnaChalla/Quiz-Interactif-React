/** @format */

import logo from "../images/quiz-logo.png";

export default function Header() {
  return (
    <header class="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-blue-900 text-white shadow-lg relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-700 rounded-full opacity-30 -mb-32 -ml-32"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-30 -mb-32 -mr-32"></div>
      <div class="flex items-center justify-center w-12 h-12">
        <img src={logo} alt="ReactQuiz Logo" class="w-24 h-24 object-contain" />{" "}
      </div>
      <div class="text-center">
        <h1 class="text-3xl font-bold">React Quiz Master</h1>
      </div>
    </header>
  );
}
