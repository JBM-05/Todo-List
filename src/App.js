import "./App.css";
// import Nav from "./Nav";
import { useState, createContext } from "react";
import Todolist from "./Todolist";

export const data = createContext();
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-sky-400 flex  justify-center">
      <data.Provider value={{ todos, setTodos }}>
        <Todolist />
      
      </data.Provider>
    </div>
  );
}
export default App;
