import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Task } from '../TaskTypes.tsx'

interface Props {
    addTask: (title:string) => void;
}

const Taskimput = ({addTask}) => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e: any) =>{
        e.preventDefalut()
        if(title.trim()){
            const newTask: Task = { id: Date.now(), title, completed: false}
            dispatch(addTask(newTask))
            setTitle("")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='add a task'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <button type='submit'>Add Item</button>
        </form>
    </div>
  )
}

export default Taskimput