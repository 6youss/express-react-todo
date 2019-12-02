import React from "react";
import { login, getTodos } from "../API";

export default function Login() {
  const [username, setUsername] = React.useState("admin");
  const [password, setPassword] = React.useState("admin");

  function handleSubmit() {
    login(username, password)
      .then(async res => {
        localStorage.setItem("accessToken", res.accessToken);
        console.log(res);
        const todos = await getTodos();
        console.log(todos);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;2019 ZSoft Consulting. All rights reserved.</p>
    </div>
  );
}
