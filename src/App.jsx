import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const client = new ApolloClient({
  uri: "https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>Mutation ToDos</h1>
        <AddTodo />
        <Todos />
      </ApolloProvider>
    </>
  );
};

export default App;
