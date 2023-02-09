import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import AddInput from "./components/AddInput";
import Todos from "./components/Todos";

const client = new ApolloClient({
  uri: "https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>Mutation ToDos</h1>
        <AddInput />
        <Todos />
      </ApolloProvider>
    </>
  );
};

export default App;
