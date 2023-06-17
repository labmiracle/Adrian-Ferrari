import { createContext, useEffect, useReducer, useState } from "react";
import GridCell from "../components/GridCell";
import withImage from "../hoc/withImage";
import { getPosition, ingredients } from "../items/items";

type Children = {
  children: React.ReactNode;
};

type Context = {
  table: JSX.Element[];
  ingredientsOnTable: string[];
  drop: (arg: React.DragEvent<HTMLImageElement>) => undefined;
  onDragEnd: (arg: React.DragEvent<HTMLImageElement>) => undefined;
  resetTable: () => undefined;
};

export const DragDropContext = createContext<Context>({
  table: [<></>],
  ingredientsOnTable: [""],
  drop: () => void 0,
  onDragEnd: () => void 0,
  resetTable: () => void 0,
});

type Action =
  | { type: "INITIALIZE" }
  | { type: "GET" }
  | { type: "ADD"; id: string; ingredient: string }
  | { type: "REMOVE"; id: string };

const initializer: JSX.Element[] = [
  ...Array(9)
    .fill(1)
    .map((_, id) => {
      const dropCellID = `cell-${id}`;
      return (
        <GridCell {...{ dropCellID }} key={dropCellID}>
          {}
        </GridCell>
      );
    }),
];

function reducer(state: JSX.Element[], action: Action): JSX.Element[] {
  if (action.type === "INITIALIZE") {
    return initializer;
  }
  if (action.type === "GET") {
    return state;
  }
  if (action.type === "ADD") {
    return state.map((grid, id) => {
      if (`cell-${id}` === action.id) {
        const dropCellID = `cell-${id}`;
        const position = getPosition(action.ingredient, ingredients);
        const isDraggable = true;
        const ingredientName = action.ingredient;
        return withImage({ GridCell, isDraggable, ingredientName, position, dropCellID });
      }
      return grid;
    });
  }
  if (action.type === "REMOVE") {
    return state.map((grid, id) => {
      if (`cell-${id}` === action.id) {
        const dropCellID = `cell-${id}`;
        return (
          <GridCell {...{ dropCellID }} key={dropCellID}>
            {}
          </GridCell>
        );
      }
      return grid;
    });
  }
  throw new Error("no valid action");
}

export default function DragDropContextProvider({ children }: Children) {
  const [ingredientsOnTable, setIngredientsOnTable] = useState<string[]>([]);
  const [table, setTable] = useReducer(reducer, initializer);
  //const [table, setTable] = useState(tableInitial);

  /* function resetTable(): undefined {
    setTable(tableInitial);
  } */

  useEffect(() => {
    //busca todos los nombres/id de las imagenes de ingredientes en la crafting table
    const list = document.getElementsByClassName("ingredient-crafting-table");
    if (!list) return;
    const ingredientsOnCraftingTable: string[] = [];
    for (const item of list) {
      if (item.id) {
        ingredientsOnCraftingTable.push(item.id);
      }
    }
    setIngredientsOnTable(() => [...ingredientsOnCraftingTable]);
  }, [table]);

  //drop funcion
  function drop(event: React.DragEvent<HTMLImageElement>): undefined {
    event.preventDefault();
    //nombre de imagen
    const ingredientName = event.dataTransfer.getData("nameID");
    const targetCellId = event.currentTarget.id;

    if (event.currentTarget.classList.contains("dropzone")) {
      setTable({ type: "ADD", id: targetCellId, ingredient: ingredientName });
      /* setTable((prev) =>
        prev.map((grid, id) => {
          if (`cell-${id}` === targetCellId) {
            const dropCellID = `cell-${id}`;
            const position = getPosition(ingredientName, ingredients);
            const isDraggable = true;
            return withImage({ GridCell, isDraggable, ingredientName, position, dropCellID, onDragEnd });
          }
          return grid;
        })
      ); */
    }
  }

  function onDragEnd(event: React.DragEvent<HTMLImageElement>): undefined {
    event.preventDefault();
    //cuando un ingrediente se mueve de una celda a otra se borra el original para que no haya duplicados
    const origenDropCellID = event.currentTarget.dataset.origen;

    if (origenDropCellID) {
      setTable({ type: "REMOVE", id: origenDropCellID });
      /* setTable((prev) =>
        prev.map((grid, dropCellID) => {
          if (`cell-${dropCellID}` === origenDropCellID) {
            return (
              <GridCell {...{ drop, dropCellID }} key={dropCellID}>
                {}
              </GridCell>
            );
          }
          return grid;
        })
      ); */
    }
  }

  return {
    /* <DragDropContext.Provider value={{ table, ingredientsOnTable, drop, onDragEnd }}>
      {children}
    </DragDropContext.Provider> */
  };
}
