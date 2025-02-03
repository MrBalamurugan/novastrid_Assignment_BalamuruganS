import React from 'react'
import { Task } from '../TaskTypes.tsx'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface TaskState {
    task: Task[]
}

const initialValue: TaskState ={
    task: []
}

const API = 'https://jsonplaceholder.typicode.com/posts'

export const fetchTask = createAsyncThunk('', async () =>{
     const response = await axios.get(API);
     return response.data.map((ta:any) => ({
        id:ta.id,
        title: ta.title,
        completed: ta.completed
     }))
 })
   

//   axios.get(API).then((response) => {
//     setTask(response.data.map((ta) => ({
//       id:ta.id,
//       title: ta.title,
//       completed: ta.completed
//     })))
//   })


const taskSlice = createSlice({
    name: 'task',
    initialValue,
    reducers:{

        addTask: (state, action: PayloadAction<Task>) =>{
            state.task.push(action.payload)
        },
    
        toggleTask: (state, action: PayloadAction<number>) =>{
            const task = state.task.find((t) => t.id === action.payload)
            if (task) task.completed = !task.completed;
        },
        
        deleteTask: (state, action: PayloadAction<number>) =>{
            state.task = state.task.filter((t)=> t.id !== action.payload)
        }
    }

})

export const {addTask, toggleTask,deleteTask} = taskSlice.actions;
export default taskSlice.actions;











// const[task, setTask] = useState()
// const API ='';

// useEffect(()=>{
//   axios.get(API).then((response) => {
//     setTask(response.data.map((ta) => ({
//       id:ta.id,
//       title: ta.title,
//       completed: ta.completed
//     })))
//   })
// })

// const addTask = (title)=>{
//     const newTask = {id: Date.now(), title, completed: false}
//     setTask([...task, newTask])
// }

// const toggleTask = (id) =>{
//     setTask(task.map(ta =>
//       ta.id === id ? {...ta, completed: !ta.completed } : ta
//     ))
// }

// const deleteTask = (id) =>{
//       setTask(task.filter(ta => ta.id !== id))
// }

// return (
//   <div>
//       <h1>Task Manager</h1>
//       <Taskimput addTask={addTask}/>
//       <TaskList task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
//   </div>
// );
// }