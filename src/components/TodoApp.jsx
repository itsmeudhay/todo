import { useState, useEffect, useMemo } from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import Swal from 'sweetalert2';

const TodoApp = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  useMemo(() => tasks, [tasks])

  const handleAddTask = () => {
    if (newTask === "") {
      return Swal.fire({
        text: 'Please Enter the Task Name!',
        icon: "error"
      });
    }
    setTasks([...tasks, { name: newTask }]);
    setNewTask("");
  };


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container container-fluid text-center mt-5 rounded">
      <Header newTask={newTask} handleAddTask={handleAddTask} setNewTask={setNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} />
    </div>
  );
};

export default TodoApp;
