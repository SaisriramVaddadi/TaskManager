import React from 'react'
import "./TaskCard.scss";

const TaskCard = () => {
    return (
        <div className='task-card-wrapper'>
            <span>
               <strong>543211  </strong> 
                TaskManager - This is the first task
            </span>
            <div className='state-wrapper'>
                <span>state</span>
                <div>
                    <select name="status" id="status">
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TaskCard