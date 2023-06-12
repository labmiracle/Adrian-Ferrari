import { useContext } from "react";
import { TaskContext } from "./TaskContextProvider";
import ListItem from "./ListItem";

export default function List() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length < 1) return <p className="todo-list-notasks">No hay tareas</p>;
  const tasksListElem = tasks.map((task, i) => {
    return <ListItem {...task} key={task.task + i} />;
  });
  return <>{tasksListElem}</>;
}
