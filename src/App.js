import React, {useEffect, useState} from 'react'
import './App.css';
import Taskimput from './components/Taskimput';
import TaskList from './components/TaskList';
import {useDispatch, useSelector} from 'react-redux'
import { fetchTask } from './redux/taskSlice';

function App() {

  // const[task, setTask] = useState()
  // const API ='';
  const task = useSelector((state) => state.task.task)

  const dispatch = useDispatch();

  useEffect (()=>{
    dispatchEvent(fetchTask)
  }, [dispatch])

  return (
    <div>
        <h1>Task Manager</h1>
        <Taskimput/>
        <TaskList task={task}/>
    </div>
  );
}

export default App;



// import React, {useState} from 'react'
// import './App.css';
// import Taskimput from './components/Taskimput';
// import TaskList from './components/TaskList';
// import {useDispatch} from 'react-redux'

// function App() {

//   const[task, setTask] = useState()
//   const API ='';

//   useEffect(()=>{
//     axios.get(API).then((response) => {
//       setTask(response.data.map((ta) => ({
//         id:ta.id,
//         title: ta.title,
//         completed: ta.completed
//       })))
//     })
//   })

//   // const dispatch = useDispatch();

//   // useEffect (()=>{
//   //   dispatchEvent(fetchTask)
//   // }, [dispatch])

//   const addTask = (title)=>{
//       const newTask = {id: Date.now(), title, completed: false}
//       setTask([...task, newTask])
//   }

//   const toggleTask = (id) =>{
//       setTask(task.map(ta =>
//         ta.id === id ? {...ta, completed: !ta.completed } : ta
//       ))
//   }
  
//   const deleteTask = (id) =>{
//         setTask(task.filter(ta => ta.id !== id))
//   }

//   return (
//     <div>
//         <h1>Task Manager</h1>
//         <Taskimput addTask={addTask}/>
//         <TaskList task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
//     </div>
//   );
// }

// export default App;