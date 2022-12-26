import { FaCheckCircle, FaTimes, FaRegCircle } from 'react-icons/fa'

const task = ({task, onDelete, onToggle, showCompleted}) => {

  const status = (function() {
    if (task.completed === true ) {
      return <FaCheckCircle style={{ color: 'green', cursor: 'pointer'}} onClick={() => onToggle(task.id)} />
    } else {
    return  <FaRegCircle style={{ color: 'black', cursor: 'pointer'}} onClick={() => onToggle(task.id)} />
    }
  })()

  return (
    <div className={`task ${task.completed ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} style={{cursor:'default', display: (task.completed === true && showCompleted === true) && 'none'}} >
        <h3>{task.title} {status}</h3>
        <p>{task.description}</p>
        <button className='btn btn-delete' onClick={() => onDelete(task.id)} >Delete Task</button>
    </div>
  )
}

export default task
