import { getPosition } from "../../items/items";
import items from "../../assets/items.png";
import { APosition, CraftablesNames, IngredientsNames } from "../../items/items";

export function getImage<T extends IngredientsNames | CraftablesNames>(name: T, array: APosition<T>, key: number) {
  const { x, y } = getPosition(name, array);

  return <img className="craft-img" src={items} style={{ objectPosition: `-${x}px -${y}px` }} key={key} alt={name} />;
}
