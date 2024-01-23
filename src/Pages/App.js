import { useEffect, useState } from 'react';
import AddTaskBtn from '../Components/AddTaskBtn';
import Table from '../Components/Table';
import '../Style/App.css';
import { GetTasks, UpdateTasks } from '../Service/Tasks';
import AddTaskForm from '../Components/AddTaskForm';

function App() {
  // const tasks = [
  //   { isCompleted: true, title: 'Workout', description: 'Going to the gym buddy' },
  //   { isCompleted: false, title: 'Payment', description: 'Pay your bills buddy' },
  //   // Add more tasks as needed
  // ];

  const [tasks, setTasks] = useState([]);
  const [ newTask, setNewTask ] = useState({
    title: '',
    description: ''
  });
  const [Show, setShow] = useState(false);

  useEffect(() => {
   const fetchData = async () => {
          const response = await GetTasks();
          console.log(response);
          setTasks(response);
    };
    fetchData();
  },[]);

  const updateTaskInDatabase = async (updatedTask, params) => {
    console.log(updatedTask, "+ ", params);
    const { value } = params;
    // Call your UpdateTasks function or the relevant service function
    await UpdateTasks(updatedTask, value);
    // Now update the state to trigger a re-render
    const updatedTasks = tasks.map((task) =>
    task.taskId === updatedTask.row.taskId ? updatedTask.row : task
  );
  setTasks(updatedTasks);
  };
  
  return (
    <div className="App">
      <header>
        <h1>
          Tarefas
        </h1>
      </header>
      <AddTaskBtn Show={Show} SetShow={setShow}/>
      <AddTaskForm newTask={newTask} setNewTask={setNewTask} Show={ Show } SetShow={setShow}/>
      <Table tasks={tasks} updateTask={updateTaskInDatabase}/>
    </div>
  );
}

export default App;
