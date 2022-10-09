var app = require("express");
var http = require("http").createServer(app);
var io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const PORT = 8080;
let tasks = [
  {
    id: 0004,
    title: "Task Manager - Add Sign In Page",
    state: "new",
  },
  {
    id: 0003,
    title: "Task Manager - Build Layout",
    state: "inProgress",
  },
  {
    id: 0002,
    title: "Task Manager - Do Basic Setup",
    state: "completed",
  },
  {
    id: 0001,
    title: "Task Manager - Create Github repo and setup",
    state: "closed",
  },
];

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("connection established", socket.id);
  socket.emit("tasks", tasks);
 //This updates the state of a specific task
  socket.on("updateState", (state, id) => {
    console.log("received event and id", state, id);
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks[index] = { ...task, state };
      } 
    });
    io.sockets.emit("tasks", tasks);
  });


  //This adds a new task to the existing tasks
  socket.on("addTask", (task) => {
    console.log("received task", task);
    tasks.push(task);
    socket.emit("tasks", tasks);
  });

  socket.on("disconnect",()=> console.log("💥 Disconnected",socket.id));
});
