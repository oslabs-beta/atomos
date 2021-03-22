import getAtomSelector from '../src/backend/getAtomSelector.js';

describe('Atom/Selector obj', () => {
  describe('Atom value test', () => {
    const fiberNode = {
      memoizedState: {
        memoizedState: {
          current: { knownAtoms: 'This is an atom', knownSelectors: null },
        },
      },
    };
    it('atom value in return obj', () => {
      expect(getAtomSelector(fiberNode)).toEqual({
        atoms: 'This is an atom',
        selectors: null,
      });
    });
  });

  describe('Atom/Selector value null', () => {
    const fiberNode = {
      memoizedState: {
        memoizedState: {
          current: { knownAtoms: null, knownSelectors: null },
        },
      },
    };
    it('Obj will have both null values', () => {
      expect(getAtomSelector(fiberNode)).toEqual({
        atoms: null,
        selectors: null,
      });
    });
  });

  describe('Both Atom/Selector have values ', () => {
    const fiberNode = {
      memoizedState: {
        memoizedState: {
          current: { knownAtoms: 'AtomValue', knownSelectors: 'SelecValue' },
        },
      },
    };
    it('Obj will have both Atom/Selector values ', () => {
      expect(getAtomSelector(fiberNode)).toEqual({
        atoms: 'AtomValue',
        selectors: 'SelecValue',
      });
    });
  });
});
