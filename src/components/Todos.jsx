import { gql, useQuery } from "@apollo/client";
import React from "react";

export const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.todos.map(({ id, type }) => {
    return (
      <div key={id}>
        <p>{type}</p>
      </div>
    );
  });
};

export default Todos;
