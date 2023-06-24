import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ingredients from "../components/Ingredients";
import { ingredients } from "../items/items";

//const ingredientsArr = ingredients.map((item) => ({ nameItem: item.nameID }));

describe("<Ingredients />", () => {
  test.each(ingredients)("$nameID should be visible", ({ nameID }) => {
    const MockedGridCell = jest.fn(({ children }) => {
      return <div>{children}</div>;
    });

    const MockedWithImage = jest.fn(() => () => {
      return (
        <MockedGridCell>
          <img alt={nameID} />
        </MockedGridCell>
      );
    });

    const MockedIngredient = [{ nameID: nameID, position: { x: 0, y: 0 } }];

    render(
      <Ingredients {...{ withImage: MockedWithImage, GridCell: MockedGridCell, _ingredients: MockedIngredient }} />
    );

    const item = screen.getByAltText(`${nameID}`);
    expect(item).toBeInTheDocument;
    expect(item).toBeVisible;
  });
});
