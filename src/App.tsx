import React, { useState } from 'react';
import TaskForm from './components/Task';
import TaskList from './components/TaskList';
import { Task } from './TaskType';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
    
    console.log('tasks', tasks);
  };

  const deleteTask = (id:Number) => {
    setTasks(tasks.filter((task)=> task.id !== id));
    console.log("delete", tasks);

  }

  return (
    <div>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
