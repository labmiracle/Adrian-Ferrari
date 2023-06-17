import { GridCellType } from "../components/GridCell";
import items from "../assets/items.png";

type GridCell = React.FunctionComponent<GridCellType>;
type Position = { x: number; y: number };
type Props = {
  GridCell: GridCell;
  isDraggable: boolean;
  ingredientName: string;
  position: Position;
  dropCellID?: string;
  onDragEnd?: React.DragEventHandler<HTMLImageElement>;
};

export default function withImage({
  GridCell,
  isDraggable,
  ingredientName,
  position: { x, y },
  dropCellID,
  onDragEnd,
}: Props) {
  function drag(event: React.DragEvent<HTMLImageElement>) {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("ingredientName", event.currentTarget.id);
    event.dataTransfer.setDragImage(event.currentTarget as Element, 24, 24);
    if (dropCellID) {
      event.dataTransfer.setData("origenCell", dropCellID);
    }
  }

  const classForCrafting = dropCellID === undefined ? undefined : "ingredient-crafting-table";
  const classForGrabing = isDraggable ? "draggable" : undefined;

  return (
    <GridCell key={Math.random() * 1000}>
      <img
        src={items}
        className={"grid-cell-image" + " " + classForCrafting + " " + classForGrabing}
        id={ingredientName}
        data-origen={dropCellID}
        draggable={isDraggable}
        onDragStart={drag}
        onDragEnd={onDragEnd}
        style={{ objectPosition: `-${x}px -${y}px` }}
      />
    </GridCell>
  );
}
