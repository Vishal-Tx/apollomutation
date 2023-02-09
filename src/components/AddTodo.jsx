import React from "react";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      idg
      type
    }
  }
`;

const AddTodo = () => {
  return <div>AddTodo</div>;
};

export default AddTodo;
