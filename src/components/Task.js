import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../redux/Actions';
import EditTask from './EditTask';

const Task = ({tasks}) => {
 const dispatch = useDispatch();
    return (
        <div className="todo-container">
            <h3 id={tasks.isDone?   "" : "done"}>{tasks.action}</h3>
            <button className="todo-button" onClick={()=> dispatch(completeTask(tasks.id))} >
             {" "}   {tasks.isDone ?"undo" : "complete"} {" "}
            </button>
            <EditTask oldTask={tasks} />
            <button className="todo-button" onClick={()=>dispatch(deleteTask(tasks.id))} >Delete</button>
        </div>
    )
}

export default Task;
