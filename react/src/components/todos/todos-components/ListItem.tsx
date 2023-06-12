import { useContext } from "react";
import { TaskContext } from "./TaskContextProvider";
import RemoveTask from "./RemoveTaskButton";

export default function ListItem({ id, task }: { id: number; task: string }) {
  const { setTasks } = useContext(TaskContext);

  return (
    <>
      <p>{id}</p>
      <p>{task}</p>
      <div className="todo-remove-btn">
        <RemoveTask {...{ setTasks, id }} />
      </div>
    </>
  );
}
