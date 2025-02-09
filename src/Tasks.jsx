import React, { useContext } from 'react'
import { data } from './App'
import { MdOutlineDeleteOutline } from "react-icons/md";
import './Task.css';

const Tasks = () => {
    const { todos, setTodos } = useContext(data);

    function handleDeleting(index) {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    // Function to handle "Delete all" action
    function handleDeleteAll() {
        setTodos([]);
    }

    return (
        <div className='bg-gray-700 w-96 h-96 mt-10 rounded-lg shadow-lg p-5'>
            <div className="flex items-center justify-between">
                <h1 className='text-3xl text-white font-semibold'>Tasks</h1>
                <button 
                    onClick={handleDeleteAll} 
                    className='bg-red-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-red-700 transition-all'>
                    <MdOutlineDeleteOutline size={20} className="mr-2" />
                    Delete All
                </button>
            </div>
            <ul className='mt-5 max-h-72 overflow-y-auto scrollbar-hidden'>
                {todos.map((todo, index) => (
                    <div key={index} className='flex items-center justify-between bg-gray-800 rounded-lg mb-3 p-3 hover:bg-gray-600 transition-all'>
                        <li className='text-white text-lg'>{todo.task}</li>
                        <button 
                            onClick={() => handleDeleting(index)} 
                            className='text-red-500 hover:text-red-700 transition-colors'>
                            <MdOutlineDeleteOutline size={20} />
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;
