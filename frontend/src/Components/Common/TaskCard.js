import React from 'react'
import "./TaskCard.scss";

const TaskCard = (props) => {
    const { id, title, state, updateTaskState } = props;

    const handleDragStart = (e) => {
        e.dataTransfer.setData("text", id);
    }

    return (
        <div className='task-card-wrapper' draggable onDragStart={handleDragStart}>
            <span>
               <strong>{id} {"  "}</strong> 
                {title}
            </span>
            <div className='state-wrapper'>
                <span>state</span>
                <div>
                    <select name="status" id="status" value={state} onChange={(e)=> updateTaskState(e.target.value, id)}>
                        <option value="new">New</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TaskCard