import React, { useContext , useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { data } from "./App"; 
import Tasks from "./Tasks";
const Todolist = () => {
    const {todos, setTodos} = useContext(data);
    const[input, setInput] = useState("");
    function adding(){
        if(input){
            setTodos([...todos, {task:input}]);
            setInput("");
        }
    }
  return (
    <div>
      <h1 className="text-3xl text-white text-center mt-10">Todo-List</h1>
      <div className="relative w-96">
        <input
        value={input}
          type="text"
          className="w-96 h-10 mt-5 mb-5 mr-5 border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
       onChange={(e)=>setInput(e.target.value)} placeholder=" add new task here...."/>
        <button onClick={adding} className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 border-blue-500 rounded-md p-2 hover:bg-blue-600 transition duration-300 ease-in-out">
          <IoAddSharp />
        </button>
      </div>
      <Tasks />
    </div>
  );
};

export default Todolist;
