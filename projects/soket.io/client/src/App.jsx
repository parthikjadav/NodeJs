import { useRef, useState } from "react";
import "./App.css";
import io from "socket.io-client";
function App() {
  const [text, setText] = useState([]);
  let message = useRef();
  let url = "http://localhost:5000";
  let socket = io(url);
  const hendleMessage = () => {
    let mesg = message.current.value;
    socket.emit("chat", mesg);
  };

  socket.on("chat", (data) => {
    console.log("message received", data);
    setText([...text, data.toString()]);
  });

  return (
    <>
      <input type="text" name="message" ref={message} />
      <button onClick={hendleMessage}>send</button>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
}

export default App;
