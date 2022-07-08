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

  if (error) {
    return <p className="text-solid-3">ERROR: {error.message}</p>;
  }

  if (!data) {
    return <p></p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
