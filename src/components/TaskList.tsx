
import React from "react";
import { Task } from "../TaskType";
import DeleteImg from '../assets/delete.png'
import TaskForm from "./Task";

interface TaskListProps {
    tasks: Task[];
    handleDelete: (id:number) => void;
    addTask: (newTaskTitle: string, parentId?:number) => void;
}
const TaskList: React.FC<TaskListProps> = ({tasks, handleDelete, addTask}) => {
 
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task._id}
                    className={task.completed? "completed":""} >
                    <div className="task-item">
                        <span> {task.title}</span>
                    <img src={DeleteImg} alt={task.title}
                        onClick={()=> {handleDelete(task._id)
                            }}/>
                    </div>
                    <TaskForm addTask={addTask} parentId={task._id}/>
                    {task.subtasks?.length > 0 && (
                        <TaskList tasks={task.subtasks} addTask={addTask} handleDelete={handleDelete}/>
                    )}
                </li>
            ))}
        </ul> 
    );

}

export default TaskList;