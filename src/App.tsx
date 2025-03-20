import React, { useEffect, useState } from 'react';
import TaskForm from './components/Task';
import TaskList from './components/TaskList';
import { Task } from './TaskType';
import './styles/App.scss';
import { createTask, fetchTasks, deleteTask, toggleTask } from './services/api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openSubtaskInputs, setOpenSubtaskInputs] = useState<number | null>(null); 
 
  useEffect (() => {
    loadTasks();
  }, []);

  const  loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };
  console.log('task--------', tasks)


  const addTask = async(newTaskTitle:string, parentId?:number | undefined) => {
    const newTask = await createTask(newTaskTitle, parentId);
    
    if(!parentId) setTasks([...tasks, newTask]);
    else {
      const addSubtask = (taskList:Task[]): Task[] => {
        return taskList.map((t)=>
          t._id === parentId ? {
            ...t, subtasks:[...t.subtasks, newTask]}:
            {...t, subtasks: addSubtask(t.subtasks)}
        );
      };
      setOpenSubtaskInputs(null);
      setTasks(addSubtask(tasks));
    }
  };

  const handleDelete = async(id:number) => {
    await deleteTask(id);
    await loadTasks();
  };


  const handleToggleTask = async (id: number, completed: boolean) => {
    await toggleTask(id, !completed);
    loadTasks();
  };

  return (
    <div className='app'>
      <TaskForm addTask={addTask}/>
      <TaskList 
        tasks={tasks}
        handleDelete={handleDelete} 
        handleToggleTask={handleToggleTask} 
        addTask={addTask}
        openSubtaskInputs={openSubtaskInputs} 
        setOpenSubtaskInputs={setOpenSubtaskInputs}
        />
    </div>
  );
}

export default App;