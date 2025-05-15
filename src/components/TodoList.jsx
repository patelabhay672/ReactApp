import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
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
  );
};

export default TodoList;
