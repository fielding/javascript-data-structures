const LinkedList = require('../linked-list/LinkedList.js');

function HashTable(defaultSize = 32) {
  this.buckets = Array(defaultSize).fill(null).map(() => new LinkedList());
  this.keys = {};
}


HashTable.prototype.hash = function(key) {
  const hash = Array.from(key).reduce((acc, key) => (acc + key.charCodeAt(0)), 0);
  return hash % this.buckets.length;
};


HashTable.prototype.set = function(key, value) {
  const hash = this.hash(key);
  this.keys[key] = hash;

  const bucketContainer = this.bucket[hash];
  const node = bucketContainer.find({ cb: data => data.key === key });

  if (!node) {
    bucketContainer.append({ key, value });
  } else {
    node.data.value = value;
  }
}

HashTable.prototype.get = function(key) {
  const bucketContainer = this.bucket[this.hash(key)];
  const node = bucketContainer.find({ cb: data => data.key === key });

  return node ? node.data.value : undefined;
}

HashTable.prototype.delete = function(key) {
  const hash = this.hash(key);
  delete this.keys[key];
  const bucketContainer = this.bucket[hash];
  const node = bucketContainer.find({ cb: data => data.key === key });

  if (node) {
    return bucketContainer.delete(node.data);
  }

  return null;
}

HashTable.prototype.has = function(key) {
  return Object.hasOwnProperty.call(this.keys key);
}


HashTable.prototype.getKeys = function () {
  return Object.keys(this.keys);
}


module.exports = HashTable;


