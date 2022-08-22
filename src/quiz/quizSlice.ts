import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { Queries, Query, Response } from "./types";

const initialState: Queries = {
  queries: [
    {
      id: v4(),
      text: "Master question one?",
      responses: [
        {
          id: v4(),
          text: "Bad answer number one",
          isCorrect: false,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Bad answer number two",
          isCorrect: false,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Good answer number three",
          isCorrect: true,
          isSelected: false,
        },
      ],
      clicked: false,
    },
    {
      id: v4(),
      text: "Master question two?",
      responses: [
        {
          id: v4(),
          text: "Bad answer number one",
          isCorrect: false,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Good answer number two",
          isCorrect: true,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Bad answer number three",
          isCorrect: false,
          isSelected: false,
        },
      ],
      clicked: false,
    },
    {
      id: v4(),
      text: "Master question three?",
      responses: [
        {
          id: v4(),
          text: "Good answer number one",
          isCorrect: true,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Bad answer number two",
          isCorrect: false,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Bad answer number three",
          isCorrect: false,
          isSelected: false,
        },
      ],
      clicked: false,
    },
    {
      id: v4(),
      text: "Master question four?",
      responses: [
        {
          id: v4(),
          text: "Bad answer number one",
          isCorrect: false,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Good answer number two",
          isCorrect: true,
          isSelected: false,
        },
        {
          id: v4(),
          text: "Bad answer number three",
          isCorrect: false,
          isSelected: false,
        },
      ],
      clicked: false,
    },
  ],
  eachQueryWasClicked: false,
  responsedQueryCount: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    select: (
      state,
      action: PayloadAction<{ response: Response; queryId: Query["id"] }>
    ) => {
      const query = state.queries.find((f) => f.id === action.payload.queryId);

      if (query) {
        query.responses.forEach((r) =>
          r.id === action.payload.response.id
            ? (r.isSelected = !r.isSelected)
            : (r.isSelected = false)
        );

        query.clicked = query.responses.find((f) => f.isSelected)
          ? true
          : false;
      }

      state.eachQueryWasClicked = state.queries.every((s) => s.clicked);

      state.responsedQueryCount = state.queries.filter((s) => s.clicked).length;
    },
  },
});

export const { select } = quizSlice.actions;
export const selectQueries = (state: RootState) => state.quiz.queries;
export default quizSlice.reducer;
