import GridCell from "./GridCell";
import withImage from "../hoc/withImage";
import { ingredients } from "../items/items";

export default function Ingredients() {
  const ingredientsArr = ingredients.map(({ nameID, position }) => {
    return withImage({ GridCell, draggable: true, nameID, position });
  });
  return <>{ingredientsArr}</>;
}
