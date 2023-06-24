import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { craftables, CraftablesType } from "../items/items";
import "@testing-library/jest-dom";
import Craftables from "../components/Craftables/Craftables";
import ToolTip from "../components/Craftables/ToolTip";
import Craftable from "../components/Craftables/Craftable";

/* const craftablesArray = craftables.map((item) => ({
  nameItem: item.nameID,
  position: item.position,
  materials: item.materials,
})); */

describe("", () => {
  test("Tooltips should be hidden by default and turn visible when hovering over its corresponding item", async () => {
    const MockedToolTip = jest.fn(() => {
      return <div></div>;
    });

    const MockedCraftable = jest.fn(() => {
      return (
        <div>
          <img alt="bow" />
        </div>
      );
    });

    const bowItem: CraftablesType = {
      nameID: "bow",
      position: { x: 48, y: 48 },
      materials: ["stick", "stick", "stick", "string", "string", "string"],
    };

    render(
      <Craftables
        {...{
          Craftable: MockedCraftable,
          ToolTip: MockedToolTip,
          _craftables: [bowItem],
        }}
      />
    );

    const user = userEvent.setup();

    const image = screen.getByAltText(`bow`);
    const toolTip = screen.getByRole(`bow-tooltip`);
    expect(toolTip).not.toBeVisible;

    await user.pointer({ target: image });
    expect(toolTip).toBeVisible;
  });

  test.each(craftables)("$nameID should have its correct tooltip", async ({ nameID, position, materials }) => {
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

    render(
      <>
        <Craftable {...{ nameID: nameID, position: position, withImage: MockedWithImage, GridCell: MockedGridCell }} />
        <div className="tooltip" role={`${nameID}-tooltip`}>
          <ToolTip {...{ materials }} />
        </div>
      </>
    );
    const toolTip = screen.getByRole(`${nameID}-tooltip`);

    const toolTipMaterials = within(toolTip).getAllByAltText(/(\w+)/) as HTMLImageElement[];
    let materialsAlt: string[] = [];
    for (const material of toolTipMaterials) {
      materialsAlt.push(material.alt);
    }
    const sort1 = (materials as string[]).sort();
    const sort2 = materialsAlt.sort();
    expect(sort1).toEqual(sort2);
  });
});
