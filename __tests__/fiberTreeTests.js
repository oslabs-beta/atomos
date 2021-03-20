import { getAtomSelector } from "../src/backend/getAtomSelector";

describe("Get atom selector obj", () => {
  const atomSelectorObj = {
    atoms: null,
    selectors: null,
  };

  const fiberNode = {
    memoizedState: {
      memoizedState: {
        knownAtoms: "This is an atom",
        knownSelectors: null,
      },
    },
  };

  describe("Atom value test", () => {
    it("should return atom value in return obj", () => {
      expect(getAtomSelector(fiberNode)).toEqual({
        atoms: "This is an atom",
        selectors: null,
      });
    });
  });
});
