import { FaTimes } from 'react-icons/fa'

const task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.completed ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.title} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.description}</p>
    </div>
  )
}

export default task
