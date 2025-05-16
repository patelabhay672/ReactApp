import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, deleteTodo ,deleteAll }) => {
  return (
    <>
    <button
        onClick={() => deleteAll()}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Delete All
      </button>
    <ul className="w-full max-w-md space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          
        />
      ))}
    </ul>
    </>
  );
};

export default TodoList;
