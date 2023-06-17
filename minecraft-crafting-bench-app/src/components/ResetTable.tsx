import { DragDropContext } from "../context/DragDropContext";
import { useContext } from "react";

export default function ResetTable() {
  const { resetTable } = useContext(DragDropContext);
  return (
    <>
      <button onClick={resetTable}>
        <span role="img" aria-label="clear">
          🚫
        </span>
        Clear
      </button>
    </>
  );
}
