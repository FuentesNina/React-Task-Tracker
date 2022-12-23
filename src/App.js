import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Do all the Form Checks',
        description: 'Go on Facebook and review the performances from the clients',
        completed: true
    },
    {
        id: 2,
        title: 'Complete portfolio website',
        description: 'Finish styling the projects section as well as the contact me section',
        completed: false
    },
    {
        id: 3,
        title: 'Food Shopping',
        description: 'Purchase all the items to make vegan crepes',
        completed: false
    }
]);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter(task=> task.id !== id))
}

// Toggle Reminder (will become Task done)
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
}

  return (
    <div className="container">
      <Header onShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
