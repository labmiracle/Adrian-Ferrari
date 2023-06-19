import GridCell from "./GridCell";
import withImage from "../hoc/withImage";
import { ingredients } from "../items/items";

export default function Ingredients() {
  const ingredientsArr = ingredients.map(({ nameID, position }, i) => {
    const CellWithImage = withImage({ GridCell, isDraggable: true, ingredientName: nameID, position });
    return <CellWithImage key={i} />;
  });
  return <>{ingredientsArr}</>;
}
