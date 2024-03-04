import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import GetTodo from "./GetTodo";

const Todo = () => {
  const todoName = useRef();
  const todoDate = useRef();
  const [data, setdata] = useState([]);

  const hendleSubmit = (e) => {
    e.preventDefault();
    let data = {
      todoName: todoName.current.value,
      todoDate: todoDate.current.value,
    };
    axios.post("http://localhost:5000/todo/add", data).then(() => {
      console.log("data send success");
    });
  };

 

  return (
    <div>
      <h1 className="text-5xl text-center my-7">Add Todo</h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Todo Name
          </label>
          <input
            ref={todoName}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="buy Iphone"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Choose Due Date
          </label>
          <input
            ref={todoDate}
            type="date"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          onClick={hendleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Todo;
