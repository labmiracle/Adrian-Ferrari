import { craftables } from "../items/items";
import { useContext } from "react";
import { DragDropContext } from "../context/DragDropContext";
import GridCell from "./GridCell";
import withImage from "../hoc/withImage";

export default function ResultCell() {
  const { ingredientsOnTable } = useContext(DragDropContext);
  const sortedTableIngredients = [...ingredientsOnTable].sort();

  const result = craftables.find((craftable) => {
    const sortedCraftIngredients = [...craftable.ingredients].sort();
    return JSON.stringify(sortedTableIngredients) === JSON.stringify(sortedCraftIngredients);
  });

  const nameID = result?.nameID;
  const position = result?.position;

  if (nameID && position) {
    return <>{withImage({ GridCell, draggable: false, nameID, position })}</>;
  }

  return <GridCell>{}</GridCell>;
}
