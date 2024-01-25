import { useEffect, useState } from 'react';
import AddTaskBtn from '../Components/AddTaskBtn';
import '../Style/App.css';
import { GetTasks, UpdateTasks } from '../Service/Tasks';
import AddTaskForm from '../Components/AddTaskForm';
import FullFeaturedCrudGrid from '../Components/FullGrid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [ newTask, setNewTask ] = useState({
    title: '',
    description: ''
  });
  const [Show, setShow] = useState(false);

  useEffect(() => {
   const fetchData = async () => {
          const response = await GetTasks();
          if(!response){
            setTasks([]);
          } 
          else {
            setTasks(response);
          }
    };
    fetchData();
  },[]);

  const updateTaskInDatabase = async (newRow) => {
    await UpdateTasks(newRow);

    const response = await GetTasks();
    
    setTasks(response)
  };
  
  return (
    <div className="App">
      <header>
        <h1>
          Tarefas
        </h1>
      </header>
      <AddTaskBtn Show={Show} SetShow={setShow}/>
      <AddTaskForm newTask={newTask} setNewTask={setNewTask} Show={ Show } SetShow={setShow} setTasks={setTasks}/>
      <FullFeaturedCrudGrid tasks={tasks} UpdateTasks={updateTaskInDatabase} setTasks={setTasks}/>
    </div>
  );
}

export default App;
