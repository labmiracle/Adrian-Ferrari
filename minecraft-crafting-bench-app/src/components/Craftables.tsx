import GridCell from "./GridCell";
import withImage from "../hoc/withImage";
import { craftables } from "../items/items";

export default function Craftables() {
  const craftablesArr = craftables.map(({ nameID, position }) => {
    return withImage({ GridCell, draggable: false, nameID, position });
  });
  return <>{craftablesArr}</>;
}
