import Comparator from '../Comparator';

describe('Comparator', () => {
  it('should compare with default comparator function', () => {
    const comparator = new Comparator();

    expect(comparator.equal('fielding', 'fielding')).toBeTruthy();
    expect(comparator.equal('Oz', 'Willow')).toBeFalsy();
    expect(comparator.equal(1, 1)).toBeTruthy();
    expect(comparator.equal(1, 0)).toBeFalsy();
  });

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator((a, b) => {
      if (a.length !== b.length) {
        return a.length < b.length ? -1: 1;
      }

      for (let i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) {
          return 1;
        }
      }

      return 0;
    });

    expect(comparator.equal([1,2,3], [1,2,3])).toBeTruthy();
    expect(comparator.equal([1,2,3], [4,5,6])).toBeFalsy();
    expect(comparator.equal([1,2,3], [4,5])).toBeFalsy();
    expect(comparator.equal([1,2,3], [1,2])).toBeFalsy();

  });
});
