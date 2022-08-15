import { findFirstDuplicateInArray } from "../index";

describe("function ", () => {
  it("should be correct", async () => {
    expect(findFirstDuplicateInArray([1, 2, 3, 4, 4, 6])).toBe(4);
  });
  it("should be correct", async () => {
    expect(findFirstDuplicateInArray([1, 2, 3, 3, 5, 5])).toBe(3);
  });
  it("should be correct", async () => {
    expect(findFirstDuplicateInArray([1, 1])).toBe(1);
  });
  it("should be correct", async () => {
    expect(findFirstDuplicateInArray([1, 2])).toBe(-1);
  });
  it("should be correct", async () => {
    expect(findFirstDuplicateInArray([])).toBe(-1);
  });
});
