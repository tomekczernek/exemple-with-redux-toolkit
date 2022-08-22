import React from "react";

import { useAppDispatch } from "../hooks";
import { select } from "./quizSlice";

import { Query, Response } from "./types";

type Props = {
  response: Response;
  queryId: Query["id"];
  checking: boolean;
  isPassed: boolean | null;
};

const ResponseItem = (props: Props) => {
  const { response, queryId, checking, isPassed } = props;
  const { text, isSelected, isCorrect } = response;

  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (isPassed === null) dispatch(select({ response, queryId }));
  };

  const correctAsnser = checking && isCorrect && isSelected;
  const wrongAnswer = checking && !isCorrect && isSelected;

  return (
    <label
      className={`cursos-pointe ${correctAsnser ? "text-green-600" : ""} ${
        wrongAnswer ? "text-red-600" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        className="mr-4"
        onChange={handleChange}
      ></input>
      {text}
    </label>
  );
};

export default ResponseItem;
