import { useState } from "react";
import { Task } from "../TaskType";


interface TaskFormProps {
    addTask: (task: Task) => void;
}
const TaskForm: React.FC<TaskFormProps> = ({addTask}) => {
    const [ title, setTitle] = useState("");

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            completed: false,
        }
        addTask(newTask);
        console.log('newTask', newTask)
        setTitle('');
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input
            type = 'text'
            placeholder= 'Enter task'
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            />
            
            <button type='submit'>
             Add Task
            </button>
        </form>

    );

}

export default TaskForm;

