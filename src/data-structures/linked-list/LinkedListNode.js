/**
 * LinkedListNode
 * @constructor
 * @param data
 * @param {LinkedListNode} next=null
 */
function LinkedListNode(data, next = null) {
  this.data = data;
  this.next = next;
}

/**
 * toString
 *
 * @param {function} stringifier
 * @param {number} length=0
 * @returns {string}
 */
LinkedListNode.prototype.toString = function({stringifier, length = 0} = {}) {
  return stringifier
    ? stringifier(this.data)
    : this.defaultStringifier(length);
};

/**
 * defaultStringifier
 *
 * @param length=0
 * @returns {string}
 */
LinkedListNode.prototype.defaultStringifier = function(length = 0) {
  // I'm going to regret writing this cryptic mess
  if (length > 0) {
    length = length < 6 ? 6 : length;

    const trunc =
      typeof this.data === 'object'
        ? this.data.constructor === Object
          ? '...}'
          : '...]'
        : typeof this.data === 'string'
          ? '..."'
          : '';

    return JSON.stringify(this.data).length > length
      ? typeof this.data === 'number'
      ? this.data.toExponential(length - (length > 4 ? length > 11 ? 6 : 5 : 3))
        : JSON.stringify(this.data).slice(
            0,
            length > trunc.length ? length - trunc.length : length
          ) + trunc
      : JSON.stringify(this.data).padEnd(length, ' ');
  }

  return this.data.constructor === Object
    ? JSON.stringify(this.data, null, 2)
    : JSON.stringify(this.data);
};


module.exports = LinkedListNode;
