import { ApolloError } from "@apollo/client";
import React, { ReactChild } from "react";

import Skeleton from "./Skeleton";

interface QueryResultProps {
  loading: boolean;
  data: object;
  error?: ApolloError;
  children?: ReactChild;
}

const QueryResult: React.FC<QueryResultProps> = ({
  loading,
  error,
  data,
  children,
}): any => {
  if (loading) return <Skeleton />;

  if (error) return <p>ERROR: {error}</p>;

  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
