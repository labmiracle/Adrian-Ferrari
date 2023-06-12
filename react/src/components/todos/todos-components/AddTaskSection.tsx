import { useState, useContext } from "react";
import AddTaskButton from "./AddTaskButton";
import InputText from "./InputText";
import { TaskContext } from "./TaskContextProvider";
import "../css/addtasksection.scss";

export default function AddTaskSection() {
  const { setTasks } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask === "") return;
    setTasks((prev) => {
      return [...prev, { id: 0, task: newTask }];
    });
  }

  return (
    <div className="todo-addtask-section">
      <InputText {...{ setNewTask, newTask }} />
      <AddTaskButton {...{ addTask }} />
    </div>
  );
}
