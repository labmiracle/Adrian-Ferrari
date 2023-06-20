import GridCell from "../components/GridCell";
import withImage from "../hoc/withImage";
import { CraftablesTypes, IngredientsTypes, getPosition, ingredients } from "../items/items";

export type ActionTypes =
  | { type: "INITIALIZE" }
  | { type: "ADD"; id: string; ingredient: IngredientsTypes | CraftablesTypes }
  | { type: "REMOVE"; id: string };

export const initializer: () => JSX.Element[] = () =>
  [...Array(9)].fill(1).map((_, id) => {
    const dropCellID = `cell-${id}`;
    return (
      <GridCell {...{ dropCellID }} key={dropCellID}>
        {}
      </GridCell>
    );
  });

export function reducer(state: JSX.Element[], action: ActionTypes): JSX.Element[] {
  if (action.type === "INITIALIZE") {
    return initializer();
  }
  if (action.type === "ADD") {
    return state.map((grid, id) => {
      if (`cell-${id}` === action.id) {
        const dropCellID = `cell-${id}`;
        const position = getPosition(action.ingredient, ingredients);
        const isDraggable = true;
        const ingredientName = action.ingredient;
        const GridCellWithImage = withImage({ GridCell, isDraggable, ingredientName, position, dropCellID });
        return <GridCellWithImage key={dropCellID} />;
      }
      return grid;
    });
  }
  if (action.type === "REMOVE") {
    return state.map((grid, id) => {
      if (`cell-${id}` === action.id) {
        const dropCellID = `cell-${id}`;
        return (
          <GridCell {...{ dropCellID }} key={dropCellID}>
            {}
          </GridCell>
        );
      }
      return grid;
    });
  }
  throw new Error("no valid action");
}
