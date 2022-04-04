import React from "react";
import Todo from "./Todo";

const TodosList = ({ todos, setTodos }) => {
  return (
    <div className="my-list">
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} setTodos={setTodos}v todos={todos} />
      ))}
    </div>
  );
};

export default TodosList;
