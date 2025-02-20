
import React from "react";
import { Task } from "../TaskType";
import Diamond from '../assets/delete.png'

interface TaskListProps {
    tasks: Task[];
    deleteTask: (id:number) => void;
}
const TaskList: React.FC<TaskListProps> = ({tasks, deleteTask}) => {
 console.log(tasks, 'tasks');

    return (
            <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}
                    <button onClick={()=> deleteTask(task.id)}>
                        <img src={Diamond} alt={task.title} />
                    </button>
                </li>
            ))}
            </ul>
           
     
    );

}

export default TaskList;