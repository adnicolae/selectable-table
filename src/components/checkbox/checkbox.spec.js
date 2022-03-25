import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Checkbox from "./checkbox";

describe("<CheckBox /> component", () => {
  const { getByTestId } = render(<Checkbox />);
  const checkbox = getByTestId("custom-checkbox");

  it("renders correctly", () => {
    expect(checkbox).toBeInTheDocument();
  });

  it("checkbox behaves correctly on click", () => {
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
