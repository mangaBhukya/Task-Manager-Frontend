import React, { useState } from "react";

interface TaskFormProps {
    addTask: (newTaskTitle: string, parentId?:number) => void;
    parentId?: number;
}
const TaskForm: React.FC<TaskFormProps> = ({addTask, parentId}) => {
    const [ title, setTitle] = useState("");

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTaskTitle = title;
        addTask(newTaskTitle, parentId);  
        setTitle('');
    }

    return (
        <form onSubmit={handlerSubmit} className="task-form">
            <input
            type = 'text'
            placeholder= {parentId ?'Enter subTask':'Enter task'}
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            />
            
            <button type='submit'>
             {parentId ? 'Add SubTask': 'Add Task'}
            </button>
        </form>

    );

}

export default TaskForm;