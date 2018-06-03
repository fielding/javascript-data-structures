/**
 * Comparator
 * @constructor
 * @param {function} compareFunction
 */
function Comparator(compareFunction) {
  this.compare = compareFunction || Comparator.defaultCompareFunction;
}

/**
 * defaultCompareFunction
 *
 * @param {(string|number)} a
 * @param {(string|number)} b
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
 * @param a
 * @param b
 * @returns {number}
 */
Comparator.prototype.equal = function(a, b) {
  return this.compare(a, b) === 0;
};

module.exports = Comparator;
