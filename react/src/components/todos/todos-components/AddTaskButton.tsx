export default function AddTaskButton({ addTask }: { addTask: () => void }) {
  return <button onClick={addTask}>Add Task</button>;
}
