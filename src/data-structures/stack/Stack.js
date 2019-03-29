const LinkedList = require('../linked-list/LinkedList.js');

/**
 * Stack
 * @constructor
 */
function Stack() {
  this.linkedList = new LinkedList();
}

/**
 * isEmpty
 *
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function () {
  return !this.linkedList.head;
};

/**
 * peek
 *
 * @returns {*}
 */
Stack.prototype.peek = function () {
  if (this.isEmpty()) {
    return null;
  }

  return this.linkedList.head.data;
};

/**
 * pop
 *
 * @returns {*}
 */
Stack.prototype.pop = function () {
  const removed = this.linkedList.deleteHead();
  return removed ? removed.data : null;
};

/**
 * push
 *
 * @param {*} data
 * @returns {Stack}
 */
Stack.prototype.push = function (data) {
  this.linkedList.prepend(data);
  return this;
};

/**
 * toArray
 *
 * @returns {Array}
 */
Stack.prototype.toArray = function () {
  return this.linkedList.toArray()
    .map(linkedListNode => linkedListNode.data);
};

/**
 * toString
 * @param {Object} [config] configuration object
 * @param {Function} [config.stringifier]
 * @param {number} [config.length=17]
 * @returns {string}
 */
Stack.prototype.toString = function ({ stringifier, length }) {
  return this.linkedList.toString({ stringifier, length });
};

module.exports = Stack;
