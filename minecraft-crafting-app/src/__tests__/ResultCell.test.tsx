import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultCell from "../components/ResultCell";
import { craftables } from "../items/items";
import { DragDropContext } from "../context/DragDropContext";

test.each(craftables)("$materials result in $nameID", ({ nameID, materials }) => {
  render(
    <DragDropContext.Provider value={{ table: [<></>], setTable: () => void 0, ingredientsOnTable: materials }}>
      <ResultCell {...{ _DragDropContext: DragDropContext }} />
    </DragDropContext.Provider>
  );
  const result = screen.getByAltText(nameID);
  expect(result).toBeInTheDocument;
});
