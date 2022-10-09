import React, { useEffect, useState, useContext, createContext } from "react";
import Dashboard from "./Components/Dashboard";
import io from "socket.io-client";
const SERVER = "http://127.0.0.1:8080"
import "./App.scss";

export const TasksContext = createContext();
const socket = io.connect(SERVER);
const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    socket.on("tasks", (data) => {
      setTasks([...data])
    })
    return () => {
      socket.disconnect();
    }
  }, [socket])

  const handleAddTask = () =>{
    console.log("Hello world");
  }
  const updateTaskState = (e, id) =>{
    console.log("Hello world", e.target.value, id);
    socket.emit("updateState", e.target.value, id);
  }
  
  
  return (
    <div className="app">
    <TasksContext.Provider value={{tasks, handleAddTask, updateTaskState}}>
      <Dashboard/>
    </TasksContext.Provider>
    </div>
  );
};

export default App;