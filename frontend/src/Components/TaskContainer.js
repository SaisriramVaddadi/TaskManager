import React from 'react';
import "./TaskContainer.scss";
import TaskCard from './Common/TaskCard';
const arrNew = [1,2,];
const arrInP = [1,2,3,4,5];
const arrComp = [1,2,3,4];
const arrClo = [1,2,3,4,5,6,7,8,9,10,11,12];

const TaskContainer = () => {
    return (
        <div style={{marginTop: '70px'}}>
            <div className='table-style table-header'>
                <div className='t-row'>
                    <div className='t-cell'>
                        New
                    </div>
                    <div className='t-cell'>
                        In Progress
                    </div>
                    <div className='t-cell'>
                        Completed
                    </div>
                    <div className='t-cell'>
                        Closed
                    </div>
                </div>
            </div>
            <div style={{paddingTop: '70px'}}>
            <div className="table-style task-data">
                <div className="t-row">
                    <div className = "t-cell card-wrapper" >
                        {arrNew.map(()=> {
                            return <TaskCard/>
                        })}
                    </div>
                    <div className = "t-cell card-wrapper" >
                        {arrInP.map(()=> {
                                return <TaskCard/>
                            })}
                    </div>
                    <div className = "t-cell card-wrapper" >
                        {arrComp.map(()=> {
                                return <TaskCard/>
                        })}
                    </div>
                    <div className = "t-cell card-wrapper" >
                        {arrClo.map(()=> {
                            return <TaskCard/>
                        })}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TaskContainer