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

  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);
    const stringifier = data => `${data.key}:${data.value}`;

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.set('a', 'old');
    hashTable.set('a', 'festus');
    hashTable.set('b', 'frad');
    hashTable.set('c', 'ciaphas');
    hashTable.set('d', 'gwyndalyn');

    expect(hashTable.has('x')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('c')).toBeTruthy();

    expect(hashTable.buckets[0].toString({stringifier})).toBe('c:ciaphas');
    expect(hashTable.buckets[1].toString({stringifier})).toBe('a:festus  ▶  d:gwyndalyn');
    expect(hashTable.buckets[2].toString({stringifier})).toBe('b:frad');

    expect(hashTable.get('a')).toBe('festus');
    expect(hashTable.get('b')).toBe('frad');
    expect(hashTable.get('z')).not.toBeDefined();


    hashTable.delete('a');

    expect(hashTable.delete('z')).toBeNull();

    expect(hashTable.get('a')).not.toBeDefined();
    expect(hashTable.get('b')).toBe('frad');

    hashTable.set('d', 'gwyn');
    expect(hashTable.get('d')).toBe('gwyn');
  });

  it('should be possible to add objects to the hash table', () => {
    const hashTable = new HashTable();

    hashTable.set('frad', { race: 'gnome', class: 'thief' });

    const frad = hashTable.get('frad');
    expect(frad).toBeDefined();
    expect(frad.race).toBe('gnome');
    expect(frad.class).toBe('thief');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'old');
    hashTable.set('a', 'festus');
    hashTable.set('b', 'frad');
    hashTable.set('c', 'ciaphas');
    hashTable.set('d', 'gwyndalyn');

    expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).toBeTruthy();
    expect(hashTable.has('z')).toBeFalsy();

    hashTable.delete('a');


    expect(hashTable.has('a')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('z')).toBeFalsy();
  });
});
