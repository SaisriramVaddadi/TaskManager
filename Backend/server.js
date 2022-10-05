var app = require("express");
var http = require("http").createServer(app);
var io = require("socket.io")(http,{
    cors: {
        origin: "http://localhost:3000"
    }
});
const PORT = 8080;
const TEST_OBJ = { message: "Hello world!" }
http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log("connection established");
    socket.emit("connection", null);
} )