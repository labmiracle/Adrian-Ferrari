import { DragDropContext } from "../context/DragDropContext";
import { useContext } from "react";

export default function ResetTable() {
  const { setTable } = useContext(DragDropContext);
  return (
    <>
      <button onClick={() => setTable({ type: "INITIALIZE" })}>
        <span role="img">🚫</span>
        Clear
      </button>
    </>
  );
}
