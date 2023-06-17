import { DragDropContext } from "../context/DragDropContext";
import { useContext } from "react";

export default function CraftingGrid() {
  const { table } = useContext(DragDropContext);

  return <>{table}</>;
}
