import { nanoid } from "nanoid/non-secure";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, settodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [{ id: 1, title: "kaamkarna hai", iscompleted: false }];
  });

  const [title, settitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("❌ Please enter a valid task.");
      return;
    }
    const newtodo = {
      id: nanoid(),
      title: title.trim(),
      iscompleted: false,
    };
    settodos([...todos, newtodo]);
    settitle("");
    setError("");
  };

  const toggleCompleted = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📝 Todo App</h1>
      <TodoForm
        title={title}
        settitle={settitle}
        error={error}
        submitHandler={submitHandler}
      />
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Todo List</h2>
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
