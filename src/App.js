import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
//Using Firebase to store tasks
import { database } from './firebaseConfig'
import { collection, addDoc,
  serverTimestamp, onSnapshot,
  doc, deleteDoc, query,
  orderBy, updateDoc, getDoc } from 'firebase/firestore'


function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  const [hideComplete, setHideComplete] = useState(true)

  const collectionRef = collection(database, 'taskList');

  const orderedListRef = query(collectionRef, orderBy('updatedAt'));

  useEffect(() => {
    onSnapshot(orderedListRef, (snapshot) => {
              let taskList = [];
              snapshot.docs.forEach((doc) => {
                taskList.push({...doc.data(), id: doc.id})
              })
              setTasks(taskList)
    })
  }, [])




  //Add Task
  const addTask = (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    addDoc(collectionRef, {...task, updatedAt: serverTimestamp()});
  }

  // Delete Task
  const deleteTask = (id) => {
    // setTasks(tasks.filter(task => task.id !== id))
    const docRef = doc(database, 'taskList', id);
    deleteDoc(docRef);
  }

  // Toggle Reminder (will become Task done)
  const toggleReminder = (id) => {
    // setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    const docRef = doc(database, 'taskList', id);
    getDoc(docRef)
      .then((doc) => {
        const completed = doc.data().completed;
        updateDoc(docRef,{completed: !completed})
      })

  }

  //Show/Hide the completed Tasks
  const showCompleted = () => {
    setHideComplete(!hideComplete);
  }

  return (
    <Router>
          <Routes>
            <Route path="/react-task-tracker/" element={
              <div className="container">
                <Header onShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} hideCompleted={showCompleted} showCompleted={hideComplete} /> : 'No Tasks to Show'}
                <Footer />
              </div>
            } />
            <Route path="/react-task-tracker/about" element={
              <div className="container">
                <Header onShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
                <About />
                <Footer />
              </div>
            } />
          </Routes>
    </Router>

  );
}

export default App;




//   const [tasks, setTasks] = useState([
//     {
//         id: 1,
//         title: 'Do all the Form Checks',
//         description: 'Go on Facebook and review the performances from the clients',
//         completed: true
//     },
//     {
//         id: 2,
//         title: 'Complete portfolio website',
//         description: 'Finish styling the projects section as well as the contact me section',
//         completed: false
//     },
//     {
//         id: 3,
//         title: 'Food Shopping',
//         description: 'Purchase all the items to make vegan crepes',
//         completed: false
//     }
// ]);
