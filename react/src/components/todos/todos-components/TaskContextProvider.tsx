import { createContext, useEffect, useState } from "react";
import { Task } from "./TaskType";

const defaultTask: Task = {
  id: 0,
  task: "Pasear el perro",
};

//Context
export const TaskContext = createContext<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}>({ tasks: [], setTasks: () => [] });

//Context provider wrapper function
export default function TOODContextProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => [defaultTask]);
  const tasksString = JSON.stringify(tasks);

  //cada vez que se añade o remueve un task se reorganizan los index
  useEffect(() => {
    setTasks((prev) => {
      return prev.map((task, i) => ({ ...task, id: i }));
    });
  }, [tasksString]);

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>;
}
