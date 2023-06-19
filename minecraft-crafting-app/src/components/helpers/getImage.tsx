import { getPosition } from "../../items/items";
import items from "../../assets/items.png";
import { APosition, CraftablesTypes, IngredientsTypes } from "../../items/items";

export function getImage<T extends IngredientsTypes | CraftablesTypes>(name: T, array: APosition<T>, key: number) {
  const { x, y } = getPosition(name, array);

  return <img className="craft-img" src={items} style={{ objectPosition: `-${x}px -${y}px` }} key={key} />;
}
