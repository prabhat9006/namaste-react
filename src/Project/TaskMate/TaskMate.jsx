import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import { useState } from "react";
const TaskMate = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [editid, setEditid] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editid) {
      const date = new Date();
      const selectedTask = tasklist.find((task) => task.id === editid);
      const updateTask = tasklist.map((e) =>
        e.id === selectedTask.id
          ? {
              id: e.id,
              name: task,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : { id: e.id, name: e.name, time: e.time }
      );
      setTasklist(updateTask);
      setEditid(0);
      setTask("");
      return;
    }

    if (task) {
      const date = new Date();
      setTasklist([
        ...tasklist,
        {
          id: date.getTime(),
          name: task,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ]);
      setTask("");
    }
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTasklist);
  };

  return (
    <>
      <div className="container">
        <AddTask
          handleSubmit={handleSubmit}
          editid={editid}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};
export default TaskMate;
