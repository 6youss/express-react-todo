import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div class="flex flex-col bg-gray-200 justify-center p-20">
        <form
          id="add_todo"
          class="bg-white shadow-md rounded px-8 py-8 mb-4"
          action="http://localhost:8000/todo/add"
          method="post"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Todo
            </label>
            <textarea
              form="#add_todo"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Todo"
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </form>

        <div class="bg-white shadow-md rounded px-8 py-8 mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="todos">
            Todos
          </label>

          <div class="flex p-6 items-center">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-gray-700 text-sm">Todo text</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;