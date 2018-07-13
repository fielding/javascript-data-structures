import HashTable from '../HashTable.js';

describe('HashTable', () => {
  it('allow size of hashtable to be set explicitly', () => {
    const defaultSize = new HashTable();
    expect(defaultSize.buckets.length).toBe(32);

    const bigger = new HashTable(128);
    expect(bigger.buckets.length).toBe(128);

  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });





});
