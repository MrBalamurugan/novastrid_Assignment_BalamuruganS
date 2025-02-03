import React from 'react'
import TaskItems from './TaskItems'
import { Task } from '../TaskTypes.tsx'

interface Props {
    task: Task[];
    toggleTask: (id:number) => void;
    deleteTask: (id:number) => void;
}


const TaskList: React.FC<Props> = ({task}) => {
 
  return (
    <div>
            <ul>
                {task.map((ta)=>(
                   <TaskItems key={ta.id} task={task}/> 
                ))}
            </ul>
    </div>
  )
}

export default TaskList