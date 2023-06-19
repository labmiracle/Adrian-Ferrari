import Craftables from "../components/Craftables";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Every craftable item should have its correct tooltip", async () => {
  const user = userEvent.setup();
  render(<Craftables />);
  const swordImage = screen.getByAltText(/iron-sword/);
  expect(screen.getByRole("tooltip")).not.toBeVisible;

  await user.pointer({ target: swordImage });
  await screen.findByRole("tooltip");

  expect(screen.getByRole("tooltip")).toBeVisible;
});
