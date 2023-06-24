import { craftables } from "../../items/items";
import "./craftables.scss";
import _Craftable from "./Craftable";
import _ToolTip from "./ToolTip";

export default function Craftables({ Craftable = _Craftable, ToolTip = _ToolTip, _craftables = craftables }) {
  const craftablesArr = _craftables.map(({ nameID, position, materials }, i) => {
    return (
      <div className="craft-items" key={i}>
        <Craftable {...{ nameID, position }} />
        <div className="tooltip" role={`${nameID}-tooltip`}>
          <ToolTip {...{ nameID, materials }} />
        </div>
      </div>
    );
  });
  return <>{craftablesArr}</>;
}
