
import React, {useState} from "react";
import { Task } from "../TaskType";
import DeleteImg from '../assets/delete.png'
import TaskForm from "./Task";
import PlusImg from '../assets/plus.png'

interface TaskListProps {
    tasks: Task[];
    handleDelete: (id:number) => void;
    addTask: (newTaskTitle: string, parentId?:number) => void;
    handleToggleTask: (id: number, completed: boolean) => void;
    openSubtaskInputs: number | null; 
    setOpenSubtaskInputs: Function;
    level?: number;
}
const TaskList: React.FC<TaskListProps> = ({tasks, handleDelete, addTask, handleToggleTask, openSubtaskInputs, setOpenSubtaskInputs, level=0}) => {
 
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task._id}
                    className={task.completed? "completed":""} >
                    <div className="task-item">
                        <span onClick={() => handleToggleTask(task._id, task.completed)}>{task.title}</span>
                        {!task.completed  &&  level < 1 && (<img src={PlusImg} alt={task.title} className="plus-icon"
                            onClick={() => setOpenSubtaskInputs(task._id === openSubtaskInputs ? null : task._id)}/> )}

                        <img src={DeleteImg} alt={task.title} className="delete-icon"
                            onClick={()=> {handleDelete(task._id)}}/>

                        
                             
                    </div>
                    {openSubtaskInputs === task._id && !task.completed && (
                    <TaskForm addTask={addTask} parentId={task._id} />)}
                    {!task.completed && task.subtasks?.length > 0 && (
                        <TaskList tasks={task.subtasks} addTask={addTask} handleDelete={handleDelete} handleToggleTask={handleToggleTask}
                        openSubtaskInputs={openSubtaskInputs} setOpenSubtaskInputs={setOpenSubtaskInputs} level={level + 1}/>
                    )}
                </li>
            ))}
        </ul> 
    );

}

export default TaskList;