
import React, { useState } from 'react';

function App() {
  const [Todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInput(e) {
    setInputValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodo([...Todo, inputValue]);
      setInputValue('');
    }
  };

  function handleDelete(index) {
    const newTodo = [...Todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (
    <div class="w-full h-screen flex flex-col bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg shadow-md items-center">
        <h1 class="text-4xl font-bold text-center mt-8 mb-4 text-blue-600">To Do App</h1>
        <form onSubmit={handleSubmit} class="flex items-center">
          <input 
            type='text'
            value={inputValue}
            onChange={handleInput}
            placeholder='Enter a new ToDo'
            class="bg-white text-blue-500 px-4 py-2 rounded-md"
          />
          <button 
            type='submit' 
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">
              Add
          </button>
        </form>
        <ul>
          {Todo.map((Todo, index) => (
            <li key={index}>
              {Todo}
              <button 
                onClick={() => handleDelete(index)}
                class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mt-4">
                  Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
