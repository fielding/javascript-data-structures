const Node = require('./LinkedListNode');
const Comparator = require('../../utils/comparator/Comparator');

/**
 * LinkedList
 * @constructor
 * @param {Function} [comparatorFunction]
 */
function LinkedList(comparatorFunction) {
  this.head = null;
  this.tail = null;

  this.compare = new Comparator(comparatorFunction);
}

/**
 * length
 *
 * @returns {Number}
 */
LinkedList.prototype.length = function() {
  let length = 0;
  let current = this.head;

  while(current) {
    length += 1;
    current = current.next;
  }

  return length;
};

/**
 * find
 *
 * @param data
 * @returns {LinkedListNode}
 */
LinkedList.prototype.find = function(data) {
  if (!this.head) {
    return null;
  }

  let current = this.head;

  while(current) {
    if (this.compare.equal(current.data, data)) {
      return current;
    }

    current = current.next;
  }

  return null;
};

/**
 * append
 *
 * @param data
 * @returns {LinkedList}
 */
LinkedList.prototype.append = function(data) {
  const appendedNode = new Node(data);
  // if head doesn't exist
  if (!this.head) {
    // appended node becomes the head
    this.head = appendedNode;
    this.tail = appendedNode;
    return this;
  }

  // append node to tail
  this.tail.next = appendedNode;
  this.tail = appendedNode;
  return this;
};

/**
 * prepend
 *
 * @param data
 * @returns {LinkedList}
 */
LinkedList.prototype.prepend = function(data) {
  this.head = new Node(data, this.head);
  return this;
}

/**
 * delete
 *
 * @param data
 * @returns {LinkedListNode}
 */
LinkedList.prototype.delete = function (data) {
  let deleted = null;

  if (!this.head) {
    return deleted;
  }

  while (this.head && this.compare.equal(this.head.data, data)) {
    deleted = this.head;
    this.head = this.head.next;
  }

  let current = this.head;

  if (current) {
    while (current.next) {
      if (this.compare.equal(current.next.data, data)) {
        deleted = current.next;
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }


  if (this.compare.equal(this.tail.data, data)) {
    this.tail = current;
  }

  return deleted;
};

/**
 * deleteTail
 *
 * @returns {LinkedListNode}
 */
LinkedList.prototype.deleteTail = function() {
  let deleted = this.tail;
  let current = this.head;

  while(current.next.next){
    current = current.next
  }

  this.tail = current;
  this.tail.next = null;

  return deleted;
};

/**
 * deleteHead
 *
 * @returns {LinkedListNode}
 */
LinkedList.prototype.deleteHead = function() {
  let deleted = this.head;
  this.head = this.head.next;

  return deleted;
};

/**
 * clear
 *
 * @returns {LinkedList}
 */
LinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  return this;
};

/**
 * toArray
 *
 * @returns {Array}
 */
LinkedList.prototype.toArray = function() {
  const arr = [];
  let current = this.head;

  while(current) {
    arr.push(current);
    current = current.next;
  }

  return arr;
};

/**
 * toString
 *
 * @param {stringifier
 * @param length=17}={}
 * @returns {String}
 */
LinkedList.prototype.toString = function({stringifier, length = 17} = {}) {
  return this.toArray()
    .map(n => n.toString({stringifier, length}))
    .join('  \u25B6  ');
};

module.exports = LinkedList;
