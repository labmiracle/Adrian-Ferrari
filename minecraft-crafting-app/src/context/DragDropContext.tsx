import { createContext, useEffect, useReducer, useState } from "react";
import { ActionTypes, initializer, reducer } from "./reducer";

type Children = {
  children: React.ReactNode;
};

type Context = {
  table: JSX.Element[];
  setTable: React.Dispatch<ActionTypes>;
  ingredientsOnTable: string[];
};

export const DragDropContext = createContext<Context>({
  table: [<></>],
  setTable: () => void 0,
  ingredientsOnTable: [],
});

export default function DragDropContextProvider({ children }: Children) {
  const [table, setTable] = useReducer(reducer, initializer);
  const [ingredientsOnTable, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    //busca todos los nombres/id de los ingredientes en la crafting table
    const list = document.getElementsByClassName("ingredient-crafting-table");
    if (!list) return;
    const ingredientsNames: string[] = [];
    for (const item of list) {
      if (item.id) {
        ingredientsNames.push(item.id);
      }
    }
    setIngredients(ingredientsNames);
  }, [table]);

  return (
    <DragDropContext.Provider value={{ table, setTable, ingredientsOnTable }}>{children}</DragDropContext.Provider>
  );
}
