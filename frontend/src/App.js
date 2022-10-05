import React from "react";
import Dashboard from "./Components/Dashboard";
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080"
import "./App.scss";

const App = () => {
  let socket = socketClient (SERVER);
  socket.on("connection", () => {
    console.log("Connected with backend!! 🚀");
  });
  return (
    <div className="app">
      <Dashboard/>
    </div>
  );
};

export default App;