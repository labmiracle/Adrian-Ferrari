import { ActionTypes } from "../../context/reducer";
import { CraftablesNames, IngredientsNames } from "../../items/items";

function allowDrag<T extends HTMLElement>(event: React.DragEvent<T>, allow: boolean) {
  allow ? event.preventDefault() : null;
}

function onDrop<T extends HTMLElement>(event: React.DragEvent<T>, setTable: (value: ActionTypes) => void) {
  event.preventDefault();
  const ingredientName = event.dataTransfer.getData("ingredientName") as IngredientsNames | CraftablesNames;
  const targetCellId = event.currentTarget.id;

  if (event.currentTarget.classList.contains("dropzone")) {
    setTable({ type: "ADD", id: targetCellId, ingredient: ingredientName });
  }
}

function onDragLeave<T extends HTMLElement>(event: React.DragEvent<T>) {
  event.preventDefault();
  const target = event.target as Element;
  if (target.classList.contains("dropzone")) {
    target.classList.remove("dragover");
  }
}

function onDragEnter<T extends HTMLElement>(event: React.DragEvent<T>) {
  event.preventDefault();
  const target = event.target as Element;
  if (target.classList.contains("dropzone")) {
    target.classList.add("dragover");
  }
}

function onDrag<T extends HTMLElement>(event: React.DragEvent<T>) {
  event.dataTransfer.clearData();
  event.dataTransfer.setData("ingredientName", event.currentTarget.id);
  event.dataTransfer.setDragImage(event.currentTarget as Element, 24, 24);
}

//cuando un ingrediente se mueve de una celda a otra se borra el original para que no haya duplicados
function onDragEnd<T extends HTMLElement>(
  event: React.DragEvent<T>,
  cellId: string | undefined,
  setTable: (value: ActionTypes) => void
) {
  event.preventDefault();
  if (!cellId) return;
  setTable({ type: "REMOVE", id: cellId });
}

export { allowDrag, onDrop, onDragLeave, onDragEnter, onDrag, onDragEnd };
