import React from "react";

const Todo = ({ todo, index, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleDone=()=>{
      setTodos(
          todos.map(item=>{
              if(item.id === todo.id){
                  return {
                      ...item ,
                      isDone : !todo.isDone
                  }
              }
              return item
          })
      )
  }
  return (
    <div className="my-todo">
      <h4 className={todo.isDone ? "completed" : "none"} >
        {index + 1}/- {todo.text}{" "}
      </h4>
      <div className="my-btn">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default Todo;
