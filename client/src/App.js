import React from "react";
import "./App.css";
import { addTodo, getTodos } from "./api";

function App() {
  React.useEffect(() => {
    getTodos()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  });

  const [text, setText] = React.useState();

  function handleSubmit(event) {
    addTodo(text)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div className="flex flex-col bg-gray-200 justify-center p-20">
        <form className="bg-white shadow-md rounded px-8 py-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Todo</label>
            <textarea
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Todo"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </form>

        <div className="bg-white shadow-md rounded px-8 py-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Todos</label>

          <div className="flex p-6 items-center">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-gray-700 text-sm">Todo text</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
