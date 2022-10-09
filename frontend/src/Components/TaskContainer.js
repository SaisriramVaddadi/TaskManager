import React, { useContext } from "react";
import "./TaskContainer.scss";
import TaskCard from "./Common/TaskCard";
import { TasksContext } from "../App";

const TaskContainer = () => {
  const { tasks, handleAddTask, updateTaskState } = useContext(TasksContext);

    return (
      <div style={{ marginTop: "70px" }}>
        <div className="table-style table-header">
          <div className="t-row">
            <div className="t-cell">New</div>
            <div className="t-cell">In Progress</div>
            <div className="t-cell">Completed</div>
            <div className="t-cell">Closed</div>
          </div>
        </div>
        <div style={{ paddingTop: "70px" }}>
          <div className="table-style task-data">
            <div className="t-row">
              <div className="t-cell card-wrapper">
                {tasks.map((task, key) => {
                  if (task.state === "new") {
                    return <TaskCard {...task} updateTaskState={updateTaskState} key={key}/>;
                  }
                })}
              </div>
              <div className="t-cell card-wrapper">
                {tasks.map((task, key) => {
                  if (task.state === "inProgress") {
                    return <TaskCard {...task} updateTaskState={updateTaskState} key={key}/>;
                  }
                })}
              </div>
              <div className="t-cell card-wrapper">
                {tasks.map((task, key) => {
                  if (task.state === "completed") {
                    return <TaskCard {...task} updateTaskState={updateTaskState} key={key}/>;
                  }
                })}
              </div>
              <div className="t-cell card-wrapper">
                {tasks.map((task, key) => {
                  if (task.state === "closed") {
                    return <TaskCard {...task} updateTaskState={updateTaskState} key={key}/>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskContainer;
