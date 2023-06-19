import GridCell from "./GridCell";
import withImage from "../hoc/withImage";
import { craftables, ingredients } from "../items/items";
import { getImage } from "./helpers/getImage";
import "./css/craftables.scss";

export default function Craftables() {
  const craftablesArr = craftables.map(({ nameID, position, materials }, i) => {
    const CellWithImage = withImage({ GridCell, isDraggable: false, ingredientName: nameID, position });
    const tooltip = materials.map((ingredient, key) => getImage(ingredient, ingredients, key));
    return (
      <div className="craft-items" key={i}>
        <CellWithImage />
        <div className="tooltip" role="tooltip" aria-label="tooltip">
          {tooltip}
        </div>
      </div>
    );
  });
  return <>{craftablesArr}</>;
}
