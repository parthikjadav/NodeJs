const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
const soketio = require("socket.io");
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173/",
};

app.use(cors(corsOptions));

let io = soketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket is ready to connect");
  socket.on("chat", (data) => {
    console.log(data);

    io.emit("chat", data);
  });
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
