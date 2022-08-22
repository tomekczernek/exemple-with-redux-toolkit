export type Queries = {
  queries: Query[];
  responsedQueryCount: number;
  eachQueryWasClicked: boolean;
};

export type Query = {
  id: ID;
  text: string;
  responses: Response[];
  clicked: boolean;
};

export type Response = {
  id: ID;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
};

type ID = string | number;
