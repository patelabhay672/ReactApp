import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo ,deleteAll }) => {
  return (
    <>
    
    <li
      className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
    >
      <span
        className={`text-lg flex-1 ${
          todo.iscompleted ? "line-through text-green-600" : "text-gray-800"
        }`}
      >
        {todo.title}
      </span>

      <button
        onClick={() => toggleCompleted(todo.id)}
        className={`px-3 py-1 text-sm rounded-md font-medium mr-2 ${
          todo.iscompleted
            ? "bg-yellow-400 text-white hover:bg-yellow-500"
            : "bg-green-500 text-white hover:bg-green-600"
        } transition`}
      >
        {todo.iscompleted ? "Undo" : "Mark Done"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
    </>
  );
};

export default TodoItem;
