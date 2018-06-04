import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create node with value as data', () => {
    const node = new LinkedListNode(1);

    expect(node.data).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create node with reference as data', () => {
    const cat1 = {name: 'Oz', colors: ['white', 'orange'], sex: 'male'};
    const cat2 = {name: 'Willow', colors: ['orange'], sex: 'female' };
    const objData1 = new LinkedListNode(cat1);
    const objData2 = new LinkedListNode(cat2);
    const arrData = new LinkedListNode([cat1, cat2]);

    expect(objData1.data.name).toBe('Oz');
    expect(objData2.data.name).toBe('Willow');
    expect(arrData.data[0]).toBe(cat1);
    expect(arrData.data[1]).toBe(cat2);
    expect(arrData.data[0].name).toBe('Oz');
    expect(arrData.data[1].name).toBe('Willow');
    expect(arrData.data.length).toBe(2);
  });

  it('should link nodes together', () => {
    const one = new LinkedListNode(1);
    const two = new LinkedListNode(2);

    one.next = two;

    expect(one.next).toBeDefined();
    expect(one.next.next).toBeNull();
    expect(two.next).toBeNull();

    expect(one.data).toBe(1);
    expect(one.next.data).toBe(2);
  });

  it('should return string representation of node data', () => {
    const obj = {
      name: 'Festus',
      surname: 'Buublius',
      race: 'Ogre',
      class: 'Fighter',
      tradeskills: ['Alchemy', 'Dance', 'Spirits'],
    }

    const intData = new LinkedListNode(1);
    const arrData = new LinkedListNode([1, 2]);
    const objData = new LinkedListNode(obj);

    expect(intData.toString()).toBe(JSON.stringify(1));
    expect(arrData.toString()).toBe(JSON.stringify([1, 2]));
    expect(objData.toString()).toBe(JSON.stringify(obj, null, 2));
  });

  it('should return fixed length string representation of node data', () => {
    const obj = {
      name: 'Festus',
      surname: 'Buublius',
      race: 'Ogre',
      age: 31,
      class: 'Fighter',
      tradeskills: ['Alchemy', 'Dance', 'Spirits'],
    }

    const strData = new LinkedListNode('this string needs to be truncated');
    const intData = new LinkedListNode(314159265358979323846264338327950288);
    const arrData = new LinkedListNode([3.1415926535897932384626, 4338327950288]);
    const objData = new LinkedListNode(obj);

    const strData2 = new LinkedListNode('this string');
    const intData2 = new LinkedListNode(3145592);
    const arrData2 = new LinkedListNode([1,2,3]);
    const objData2 = new LinkedListNode({a: 1, b: 2, c: 3});

    expect(strData.toString({length: 25})).toHaveLength(25);
    expect(strData.toString({length: 25})).toMatch('"this string needs to..."');
    expect(strData2.toString({length: 15})).toHaveLength(15);
    expect(strData2.toString({length: 15})).toMatch('"this string"  ');
    expect(strData2.toString({length: 3})).toHaveLength(6);
    expect(strData2.toString({length: 3})).toMatch('"t..."');

    expect(intData.toString({length: 20})).toHaveLength(20);
    expect(intData.toString({length: 20})).toMatch('3.14159265358979e+35');
    expect(intData2.toString({length: 20})).toHaveLength(20);
    expect(intData2.toString({length: 20})).toMatch('3145592             ');
    expect(intData2.toString({length: 2})).toHaveLength(6);
    expect(intData2.toString({length: 2})).toMatch('3.1e+6');

    expect(arrData.toString({length: 10})).toHaveLength(10);
    expect(arrData.toString({length: 10})).toMatch('[3.141...]');
    expect(arrData2.toString({length: 4})).toHaveLength(6);
    expect(arrData2.toString({length: 4})).toMatch('[1...]');

    expect(objData.toString({length: 20})).toHaveLength(20);
    expect(objData.toString({length: 20})).toMatch('{"name":"Festus"...}');
    expect(objData2.toString({length: 5})).toHaveLength(6);
    expect(objData2.toString({length: 5})).toMatch('{"...}');
  });

  it('should return string representation of node data via custom stringify function', () => {
    const obj = {
      name: 'Festus',
      surname: 'Buublius',
      race: 'Ogre',
      age: 31,
      class: 'Fighter',
      tradeskills: ['Alchemy', 'Dance', 'Spirits'],
    };

    const objStringifier = data => `${data.name} ${data.surname}`;
    const stringifier = data => `<${data}>`;

    const objNode = new LinkedListNode(obj);
    const arrNode = new LinkedListNode([1,2,3,4,5]);
    const node = new LinkedListNode('huzzah');

    expect(objNode.toString({stringifier: objStringifier})).toMatch('Festus Buublius');
    expect(arrNode.toString({stringifier})).toMatch('<1,2,3,4,5>');
    expect(node.toString({stringifier})).toMatch('<huzzah>');
  });

});
