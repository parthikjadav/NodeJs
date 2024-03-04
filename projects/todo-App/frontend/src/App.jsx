import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import GetTodo from "./components/GetTodo";

const App = () => {

  const [data, setdata] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/todo/get").then((res) => {
        let data = res.data.todo;
        setdata(data);
      });
    }, []);

  return (
    <div>
      <Todo/>
      <GetTodo data={data} />
    </div>
  );
};

export default App;
