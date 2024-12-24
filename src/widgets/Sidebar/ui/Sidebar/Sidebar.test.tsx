import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("render sidebar", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle button handler", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("toggleButton");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
