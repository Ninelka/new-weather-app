import React, { ReactChild } from "react";
import { ApolloError } from "@apollo/client";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError;
  data: object;
  children?: ReactChild;
}

const QueryResult = ({
  loading,
  error,
  data,
  children,
}: QueryResultProps): unknown => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error}</p>;

  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
