
import React from "react";
import { Task } from "../TaskType";

interface TaskListProps {
    tasks: Task[];
}
const TaskList: React.FC<TaskListProps> = ({tasks}) => {
 console.log(tasks, 'tasks');

    return (
            <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
            </ul>
           
     
    );

}

export default TaskList;