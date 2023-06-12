import { useContext } from "react";
import { TaskContext } from "./TaskContextProvider";
import ListItem from "./ListItem";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const tasksListElem = tasks.map((task, i) => {
    return <ListItem {...task} key={task.task + i} />;
  });
  return <>{tasksListElem}</>;
}
