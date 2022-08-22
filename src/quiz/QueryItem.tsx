import React from "react";
import ResponseItem from "./ResponseItem";

import { Query, Response } from "./types";

type Props = {
  query: Query;
  checking: boolean;
  isPassed: boolean | null;
};

const QueryItem = (props: Props) => {
  const { query, checking, isPassed } = props;
  const { text, responses } = query;

  return (
    <div className="py-4">
      <h2 className="pb-4">{text}</h2>
      <div className="flex flex-col ml-4">
        {responses.map((response: Response) => (
          <ResponseItem
            key={response.id}
            response={response}
            queryId={query.id}
            checking={checking}
            isPassed={isPassed}
          />
        ))}
      </div>
    </div>
  );
};

export default QueryItem;
