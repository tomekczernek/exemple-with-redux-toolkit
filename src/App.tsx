import React from "react";
import Quiz from "./quiz/Quiz";

function App() {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-300 text-gray-700">
      <div className="flex flex-col items-center pt-24">
        <h1 className="pb-12 text-3xl">Quiz with Redux Toolkit</h1>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
