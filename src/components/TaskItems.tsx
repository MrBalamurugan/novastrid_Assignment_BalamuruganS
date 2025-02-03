import React from 'react'
import { Task } from '../TaskTypes.tsx'
import {useDispatch} from 'react-redux'
import { toggleTask, deleteTask,  } from '../redux/taskSlice.tsx'

interface Props {
    task: Task;
}

const TaskItems = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div>
            <li>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={()=>dispatch(toggleTask(task.id))}
                />
                <span>{task.title}</span>
                <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
            </li>
    </div>
  )
}

export default TaskItems



// import React from 'react'
// import { Task } from '../TaskTypes.tsx'
// import {useDispatch} from 'react-redux'

// interface Props {
//     task: Task;
//     toggleTask: (id: number) => void;
//     deleteTask: (id: number) => void;
// }

// const TaskItems = ({task, toggleTask, deleteTask}) => {
//     const dispatch = useDispatch()
//   return (
//     <div>
//             <li>
//                 <input
//                     type='checkbox'
//                     checked={task.completed}
//                     onChange={()=>dispatch(toggleTask(task.id))}
//                 />
//                 <span>{task.title}</span>
//                 <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
//             </li>
//     </div>
//   )
// }

// export default TaskItems