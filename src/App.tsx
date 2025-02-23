import React, { useEffect, useState } from 'react';
import TaskForm from './components/Task';
import TaskList from './components/TaskList';
import { Task } from './TaskType';
import './styles/App.scss';
import { createTask, fetchTasks, deleteTask } from './services/api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect (() => {
    loadTasks();
  }, []);

  const  loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

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
      setTasks(addSubtask(tasks));
    }
  };

  const handleDelete = async(id:number) => {
    await deleteTask(id);
    await loadTasks();
  };

  return (
    <div className='app'>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} handleDelete={handleDelete} addTask={addTask}/>
    </div>
  );
}

export default App;