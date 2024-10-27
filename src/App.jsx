import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import TaskList from './components/TaskList';
import { initialTasksdata } from './database/initialTasksdata'; 
import './App.css';

function App() {
  const [tasksData, setTasksData] = useState(initialTasksdata);
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (e) => {setNewTask(e.target.value);};
  
  const handleSave = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskDefault = {id: tasksData.length ? tasksData[tasksData.length - 1].id + 1 : 1, task: newTask, completed: false};
      setTasksData([...tasksData, newTaskDefault]);
      setNewTask('');
    }
  };

  const handleDelete = (taskId) => {
    setTasksData(prevTasksStatus => prevTasksStatus.filter(task => task.id !== taskId));
  };

  const handleToggleCheckbox = (taskId) => {
    setTasksData(prevTasksStatus => prevTasksStatus.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task ));
  };

  return (
    <>
      <header>
        <h1>Daily Planner</h1> 
      </header>
      <form className='form_container' onSubmit={handleSave}>
        <input type="text" className='input_box' placeholder="New task ..." value={newTask} onChange={handleInputChange}/>
        <button type="submit" className='save_btn'>Save</button>
      </form>
      <TaskList tasksData={tasksData} onDelete={handleDelete} onToggle={handleToggleCheckbox} />
    </>
  )
}

export default App;
