const ShowTask = ({ tasklist, setTasklist, handleEdit, handleDelete }) => {
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <span className="taskmate-edit" onClick={() => handleEdit(task.id)}>
              Edit
            </span>
            <span
              className="taskmate-delete"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
