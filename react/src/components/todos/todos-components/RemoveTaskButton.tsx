import { Task } from "./TaskType";

export default function RemoveTask({
  setTasks,
  id,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  id: number;
}) {
  function remove() {
    setTasks((prev) => {
      return prev.filter((elem) => elem.id !== id);
    });
  }
  return <button onClick={remove}>Remove</button>;
}
