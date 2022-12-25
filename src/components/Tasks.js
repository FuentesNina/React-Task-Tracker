
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle, hideCompleted, showCompleted}) => {

    return (
    <>
        <button className={`btn ${showCompleted}`} onClick={hideCompleted}>{showCompleted === true ? "Show" : "Hide"} Completed Tasks</button>
        {tasks.map(task => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} showCompleted={showCompleted}/>
        ))}
    </>
  )
}

export default Tasks
