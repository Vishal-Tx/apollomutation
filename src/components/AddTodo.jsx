import { gql, useMutation } from "@apollo/client";
import React from "react";
import { GET_TODOS } from "./Todos";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      console.log("data", addTodo);
      const { todos } = cache.readQuery({
        query: GET_TODOS,
      });

      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: [addTodo, ...todos],
        },
      });
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            variables: { type: input.value },
          });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      {error && <h2>error</h2>}
    </div>
  );
};

export default AddTodo;
