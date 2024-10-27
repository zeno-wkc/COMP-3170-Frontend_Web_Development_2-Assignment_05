export default function TaskList({tasksData, onDelete, onToggle}) {
  const tasksNum = tasksData.filter(task => !task.completed).length;
  const tasksList = tasksData.map((tasksItem) => (
    <li key={tasksItem.id} className="tasks-item__container">
      <input type="checkbox" checked={tasksItem.completed} className="task-checkbox" onChange={() => onToggle(tasksItem.id)} />
      <p className={`task-topic ${tasksItem.completed ? 'checked' : ''}`}>{tasksItem.task}</p>
      <button onClick={() => onDelete(tasksItem.id)}>Remove</button>
    </li>
  ));

  return (
    <>
      <h2>You have {tasksNum} tasks remaining</h2>
      <ul className="tasks-list_container">
        {tasksList}
      </ul>
    </>
  );
}