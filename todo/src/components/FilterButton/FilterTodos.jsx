import React from "react";

const FilterTodos = ({ filterTodo, todoText, setTodoText }) => {
  return (
    <div className="flex justify-center items-center border-0 h-12 w-87 mb-2 rounded-2xl">
      <button
        // onClick={() => filterTodo(todoText, setTodoText)}
        className="text-yellow-200 bg-black/30 backdrop-blur-3xl hover:text-white h-full w-full cursor-pointer p-2 rounded-2xl hover:bg-yellow-600 bg-gradient-to-r from-red-400/70 via-yellow-600 to-green-400/70 transition ease-in-out duration-500 delay-75"
      >
        Filter Todos
      </button>
    </div>
  );
};

export default FilterTodos;
