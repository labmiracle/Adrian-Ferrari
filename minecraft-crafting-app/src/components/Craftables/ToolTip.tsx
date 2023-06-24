import { IngredientsNames, ingredients } from "../../items/items";
import { getImage } from "../helpers/getImage";

type Props = {
  materials: IngredientsNames[];
};

export default function ToolTip({ materials }: Props) {
  return <>{materials.map((ingredient, key) => getImage(ingredient, ingredients, key))}</>;
}
