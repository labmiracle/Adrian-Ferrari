import _withImage from "../../hoc/withImage";
import { CraftablesNames } from "../../items/items";
import _GridCell from "../GridCell/GridCell";

type Props = {
  nameID: CraftablesNames;
  position: { x: number; y: number };
  withImage?: typeof _withImage;
  GridCell?: typeof _GridCell;
};

export default function Craftable({ nameID, position, withImage = _withImage, GridCell = _GridCell }: Props) {
  const CellWithImage = withImage({ GridCell, isDraggable: false, ingredientName: nameID, position });
  return <CellWithImage />;
}
