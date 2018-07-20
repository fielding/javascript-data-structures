import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should find node with specified data', () => {
    const list = new LinkedList();

    expect(list.find({ data: 1 })).toBeNull();

    list.append(1);
    expect(list.find({ data: 1})).toBeDefined();

    list
      .append(2)
      .append(3);

    const found = list.find({ data: 2 });

    expect(found.data).toBe(2);
    expect(list.find({ data: 4 })).toBeNull();
  });

  it('it should find node using specified callback ', () => {
    const implemented = false;
    expect(implemented).toBe(true);
  });


  it('should return the length of the linked list', () => {
    const list = new LinkedList();
    const empty = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(empty.length()).toBe(0);
    expect(list.length()).toBe(3);
  });

  it('should append node to the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  it('should prepend node to the linked list', () => {
    const list = new LinkedList();
    list.prepend(5);
    list.prepend(4);

    expect(list.head.data).toBe(4);
    expect(list.head.next.data).toBe(5);
  });

  it('should delete the tail from the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteTail();

    expect(list.tail.data).toBe(2);
    expect(list.length()).toBe(2);
  });

  it('should delete the head from the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteHead();

    expect(list.head.data).toBe(2);
    expect(list.length()).toBe(2);
  });

  it('should delete node with specified value as data from the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.delete(2);

    expect(list.length()).toBe(2);
  });

  it('should delete node with specified reference to an array as data from the linked list', () => {
    const list = new LinkedList((a, b) => {
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

    list.append([1,2,3]);
    list.append([4,5,6]);
    list.append([7,8,9]);
    list.delete([4,5,6]);

    expect(list.length()).toBe(2);
  });

  it('should delete node with specified reference to an object as data from the linked list', () => {
    const list = new LinkedList((a, b) => {
      if (Object.keys(a).length !== Object.keys(b).length) {
        return Object.keys(a).length < Object.keys(b).length ? -1: 1;
      }

      for (let i = 0; i < Object.keys(a).length; i += 1) {
        if (Object.keys(a)[i] !== Object.keys(b)[i] || a[Object.keys(a)[i]] !== b[Object.keys(b)[i]]) {
          return 1;
        }
      }

      return 0;
    });

    list.append({name: 'Oz'});
    list.append({name: 'Fluffykins'});
    list.append({name: 'Willow'});
    list.append({name: 'Fielding'});
    list.delete({name: 'Fluffykins'});
    list.delete({name: 'fielding'});
    list.delete({name: 'oz'});
    list.delete({name: 'Fielding'});

    expect(list.length()).toBe(2);
  });

  it('should clear all nodes from the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.clear();

    expect(list.length()).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should return string representation of the list', () => {
    const obj = {
      name: 'Festus',
      surname: 'Buublius',
      race: 'Ogre',
      class: 'Fighter',
      tradeskills: ['Alchemy', 'Dance', 'Spirits'],
    };

    const list = new LinkedList();

    const stringifier = data => data.toString();

    list.append('Daniel Fielding Johnston');
    list.append(obj);
    list.append(['one', 'two', 'three']);
    list.append(1337);

    expect(list.toString()).toMatch('"Daniel Field..."  ▶  {"name":"Fest...}  ▶  ["one","two",...]  ▶  1337             ');
    expect(list.toString({length: 6})).toMatch('"D..."  ▶  {"...}  ▶  ["...]  ▶  1337  ');
    expect(list.toString({stringifier})).toMatch('Daniel Fielding Johnston  ▶  [object Object]  ▶  one,two,three  ▶  1337');

  });

});
