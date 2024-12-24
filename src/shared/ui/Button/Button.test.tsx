import { screen, render } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";

describe("Button", () => {
  test("Find button", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
