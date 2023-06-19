import { DragDropContext } from "../context/DragDropContext";
import { useContext } from "react";
import { allowDrag, onDrop, onDragLeave, onDragEnter } from "./helpers/dragFunctions";
import "./css/gridCell.scss";

export type GridCellType = {
  children: React.ReactNode | undefined;
  dropCellID?: string;
};

export default function GridCell({ children, dropCellID }: GridCellType) {
  const { setTable } = useContext(DragDropContext);

  const isADropCell = !!dropCellID;

  return (
    <div
      className={dropCellID ? "grid-cell dropzone" : "grid-cell"}
      id={isADropCell ? dropCellID : undefined}
      onDragOver={(event) => allowDrag(event, !!dropCellID)}
      onDrop={(event) => onDrop(event, setTable)}
      onDragLeave={onDragLeave}
      onDragEnter={isADropCell ? onDragEnter : undefined}
    >
      {children}
    </div>
  );
}
