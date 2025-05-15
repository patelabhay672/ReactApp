import React from "react";

const TodoForm = ({ title, settitle, error, submitHandler }) => {
  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mb-6"
    >
      <input
        type="text"
        value={title}
        placeholder="Enter task"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && (
        <p className="text-red-500 text-sm mb-2 font-medium">{error}</p>
      )}
      <button
        type="submit"
        disabled={!title.trim()}
        className={`w-full py-2 rounded-md transition font-medium ${
          !title.trim()
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        ➕ Create Todo
      </button>
    </form>
  );
};

export default TodoForm;
