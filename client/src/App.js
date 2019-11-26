import React from "react";
import "./App.css";
import { addTodo, getTodos, editTodo } from "./api";

function App() {
  const [text, setText] = React.useState();
  const [todos, setTodos] = React.useState([]);

  function handleSubmit(event) {
    addTodo(text)
      .then(({ newTodo }) => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleTodoChange(id, done) {
    return () => {
      editTodo(id, { done: !done })
        .then(({ newTodo }) => {
          const updatedTodos = todos.map(todo => (todo.id !== newTodo.id ? todo : newTodo));
          setTodos(updatedTodos);
        })
        .catch(err => console.log(err));
    };
  }

  React.useEffect(() => {
    getTodos()
      .then(({ todos = [] }) => {
        console.log(todos);
        setTodos(todos);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
          {todos.map(({ id, text, done }, index) => (
            <div key={"todo-" + index} className="relative flex p-6 items-center flash-on-enter hover:bg-blue-100">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                onChange={handleTodoChange(id, done)}
                checked={done}
              />
              <span className={"text-gray-700 text-sm" + (done ? " line-through" : "")}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
