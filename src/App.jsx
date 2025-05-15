import { nanoid } from "nanoid/non-secure";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kaamkarna hai", iscompleted: false },
  ]);

  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      iscompleted: false,
    };
    settodos([...todos, newtodo]);
    settitle("");
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
    );
    settodos(updatedTodos);
  };

  // 🗑 Delete todo by ID
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    settodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📝 Todo App</h1>

      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mb-6"
      >
        <input
          type="text"
          value={title}
          placeholder="Enter task"
          onChange={(e) => settitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          ➕ Create Todo
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Todo List</h2>
      <ul className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <span
              className={`text-lg flex-1 ${
                todo.iscompleted
                  ? "line-through text-green-600"
                  : "text-gray-800"
              }`}
            >
              {todo.title}
            </span>

            {/* Mark Done / Undo Button */}
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

            {/* 🗑 Delete Button */}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
