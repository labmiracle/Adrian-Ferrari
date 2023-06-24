import { GridCellType } from "../components/GridCell/GridCell";
import items from "../assets/items.png";
import { DragDropContext } from "../context/DragDropContext";
import { useContext } from "react";
import { onDrag, onDragEnd } from "../components/helpers/dragFunctions";

type GridCell = React.FunctionComponent<GridCellType>;
type Position = { x: number; y: number };
type Props = {
  GridCell: GridCell;
  isDraggable: boolean;
  ingredientName: string;
  position: Position;
  dropCellID?: string;
};

export default function withImage({ GridCell, isDraggable, ingredientName, position: { x, y }, dropCellID }: Props) {
  function GridWithImage() {
    const { setTable } = useContext(DragDropContext);

    const classForCrafting = !dropCellID ? "" : " ingredient-crafting-table";
    const classForGrabing = isDraggable ? " draggable" : "";

    return (
      <GridCell key={`${x}+${y}`}>
        <img
          src={items}
          className={"grid-cell-image" + classForCrafting + classForGrabing}
          id={ingredientName}
          draggable={isDraggable}
          onDragStart={onDrag}
          onDragEnd={(event) => onDragEnd(event, dropCellID, setTable)}
          style={{ objectPosition: `-${x}px -${y}px` }}
          alt={ingredientName}
        />
      </GridCell>
    );
  }
  return GridWithImage;
}
