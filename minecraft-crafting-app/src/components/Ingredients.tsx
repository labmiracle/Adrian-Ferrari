import _GridCell from "./GridCell/GridCell";
import _withImage from "../hoc/withImage";
import { ingredients } from "../items/items";

export default function Ingredients({ withImage = _withImage, GridCell = _GridCell, _ingredients = ingredients }) {
  const ingredientsArr = _ingredients.map(({ nameID, position }, i) => {
    const CellWithImage = withImage({ GridCell, isDraggable: true, ingredientName: nameID, position });
    return <CellWithImage key={i} />;
  });
  return <>{ingredientsArr}</>;
}
