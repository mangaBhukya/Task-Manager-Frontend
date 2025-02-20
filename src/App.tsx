import { useState } from 'react';
import TaskForm from './components/Task';
import { Task } from './TaskType';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
    
    console.log('tasks', tasks);
  }
  return (
    <div>
      <TaskForm addTask={addTask}/>
    </div>
  );
}

export default App;
