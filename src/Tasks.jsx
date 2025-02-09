import React, { useContext, useState } from "react";
import { data } from "./App";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./Task.css";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Tasks = () => {
  const { todos, setTodos } = useContext(data);
  const [isActive, setisActive] = useState(false);

  function handleDeleting(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function handleDeleteAll() {
    setTodos([]);
  }

  return (
    <div className="bg-gray-700 w-96 h-96 mt-10 rounded-lg shadow-lg p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white font-semibold">Tasks</h1>
        <button
          onClick={handleDeleteAll}
          className="bg-red-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-red-700 transition-all"
        >
          <MdOutlineDeleteOutline size={20} className="mr-2" />
          Delete All
        </button>
      </div>
      <ul className="mt-5 max-h-72 overflow-y-auto scrollbar-hidden">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg mb-3 p-3 hover:bg-gray-600 transition-all"
          >
            <div className="flex items-center justify-between">
              <li className="text-white text-lg">{todo.task}</li>
              <div className="flex items-center space-x-2">
                <button onClick={() => setisActive(!isActive)}>
                  {isActive ? (
                    <FiMinus
                      size={18}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    />
                  ) : (
                    <FaPlus
                      size={18}
                      className="text-green-400 hover:text-green-600 transition-colors"
                    />
                  )}
                </button>
                <button
                  onClick={() => handleDeleting(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <MdOutlineDeleteOutline size={20} />
                </button>
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isActive ? "max-h-20 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <p className="text-white text-lg mt-2">This is a task</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
