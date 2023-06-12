export default function InputText({
  setNewTask,
  newTask,
}: {
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  newTask: string;
}) {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setNewTask(() => value);
  }
  return (
    <div>
      <label htmlFor="task-input">Ingrese una tarea:&nbsp;</label>
      <input
        id="task-input"
        type="text"
        value={newTask}
        onChange={handleInput}
        autoComplete="false"
        spellCheck="false"
      ></input>
    </div>
  );
}
