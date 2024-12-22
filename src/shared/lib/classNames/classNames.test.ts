import { describe } from "node:test";
import { classNames } from "./classNames";

describe("classNames", () => {
  test("classNames", () => {
    expect(classNames("class")).toBe("class");
  });
  test("classNames with additional classes", () => {
    const expected = "class class2 class3";
    expect(classNames("class", {}, ["class2", "class3"])).toBe(expected);
  });
  test("classNames with mods", () => {
    const expected = "class class2 class3 hovered";
    expect(
      classNames("class", { hovered: true, scrollable: false }, [
        "class2",
        "class3",
      ])
    ).toBe(expected);
  });
  test("classNames with mods undefined", () => {
    const expected = "class class2 class3 hovered";
    expect(
      classNames("class", { hovered: true, scrollable: undefined }, [
        "class2",
        "class3",
      ])
    ).toBe(expected);
  });
});
