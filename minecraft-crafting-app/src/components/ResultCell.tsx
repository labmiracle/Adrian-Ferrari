import { craftables } from "../items/items";
import { useContext } from "react";
import { DragDropContext } from "../context/DragDropContext";
import GridCell from "./GridCell/GridCell";
import withImage from "../hoc/withImage";

export default function ResultCell({ _DragDropContext = DragDropContext }) {
  const { ingredientsOnTable } = useContext(_DragDropContext);
  const sortedTableIngredients = [...ingredientsOnTable].sort();

  const result = craftables.find((craftable) => {
    return JSON.stringify(sortedTableIngredients) === JSON.stringify(craftable.materials);
  });

  const ingredientName = result?.nameID;
  const position = result?.position;

  if (ingredientName && position) {
    const GridWithImage = withImage({ GridCell, isDraggable: false, ingredientName, position });
    return <GridWithImage />;
  }

  return <GridCell>{}</GridCell>;
}
