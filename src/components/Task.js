import { FaTimes } from 'react-icons/fa'

const task = ({task, onDelete, onToggle, showCompleted}) => {
  return (
    <div className={`task ${task.completed ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} style={{display: (task.completed === true && showCompleted === true) && 'none'}} >
        <h3>{task.title} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.description}</p>
    </div>
  )
}

export default task
