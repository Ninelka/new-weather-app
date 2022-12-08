import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const client = new ApolloClient({
  // Heroku isn't free anymore
  // uri: "https://ninel-weather-app-server.herokuapp.com/",
  uri: "https://weather-app-server-production.up.railway.app/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
