
import React from "react";
import { Task } from "../TaskType";
import DeleteImg from '../assets/delete.png'

interface TaskListProps {
    tasks: Task[];
    deleteTask: (id:number) => void;
}
const TaskList: React.FC<TaskListProps> = ({tasks, deleteTask}) => {
 console.log(tasks, 'tasks');

    return (
            <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id}
                    className={task.completed? "completed":""} >
                     {task.title}
                    <img src={DeleteImg} alt={task.title}  onClick={()=> deleteTask(task.id)}/>
                </li>
            ))}
            </ul>
           
     
    );

}

export default TaskList;