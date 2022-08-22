import React, { useState } from "react";

import { useAppSelector } from "../hooks";
import QueryItem from "./QueryItem";

import { Query } from "./types";

export default function Quiz() {
  const { queries, responsedQueryCount, eachQueryWasClicked } = useAppSelector(
    (state) => state.quiz
  );

  const [isPassed, setIsPassed] = useState<boolean | null>(null);
  const [checking, setChecking] = useState<boolean>(false);

  const handleCheck = () => {
    const correctResults = queries.reduce(
      (p, c) =>
        (c.responses.find((f) => f.isCorrect && f.isSelected) ? 1 : 0) + p,
      0
    );

    setChecking(true);
    setIsPassed(queries.length === correctResults);
  };

  const ResultMessage = () => {
    if (isPassed === null) return isPassed;
    if (isPassed) return <p className="my-2 self-center">Good job!</p>;
    return <p className="my-2 self-center">Try again</p>;
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 px-4">
      {queries.map((query: Query) => (
        <QueryItem
          key={query.id}
          query={query}
          checking={checking}
          isPassed={isPassed}
        />
      ))}
      <p className="my-2 self-center">
        {" "}
        {responsedQueryCount} / {queries.length}
      </p>
      <ResultMessage />
      <button
        disabled={!eachQueryWasClicked}
        className={`rounded-md my-2 px-4 py-1 self-center text-gray-300 ${
          eachQueryWasClicked ? "bg-blue-600 " : "bg-gray-400 "
        }`}
        onClick={handleCheck}
      >
        Check answers
      </button>
    </div>
  );
}
