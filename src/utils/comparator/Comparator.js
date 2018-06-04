/**
 * Creates a new Comparator
 * @constructor
 * @param {function} [compareFunction]
 */
function Comparator(compareFunction) {
  this.compare = compareFunction || Comparator.defaultCompareFunction;
}

/**
 * defaultCompareFunction
 *
 * @param {(string|number)} a - the first item to be compared
 * @param {(string|number)} b - the second item to be compared
 * @returns {number}
 */
Comparator.defaultCompareFunction = function(a, b) {
  if (a === b) {
    return 0;
  };

  return a < b ? -1 : 1;
};

/**
 * equal
 *
 * @param a - the first item to be compared
 * @param b - the second item to be compared
 * @returns {number}
 */
Comparator.prototype.equal = function(a, b) {
  return this.compare(a, b) === 0;
};

module.exports = Comparator;
