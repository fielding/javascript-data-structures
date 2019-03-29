import Stack from '../Stack.js';

/*
 * It uses the following operations:
 * pop(): Remove the top item from the stack.
 * push(item): Add an item to the top of the stack.
 * peek(): Return the top of the stack.
 * isEmpty (): Return true if and only if the stack is empty.
*/

describe('Stack', () => {

  it('should create an empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
    expect(stack.linkedList.head).toBeNull();
  });

  it('should push an item to the top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should pop the top item off the stack', () => {
    const stack = new Stack();
    stack
      .push(1)
      .push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  it('should peek at the top of the stack', () => {
    const stack = new Stack();
    stack
      .push(1)
      .push(2);

    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it('should return boolean based on if stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should return array representation of the stack', () => {
    const stack = new Stack();
    stack
      .push(9)
      .push(0)
      .push(3)
      .push(5)
      .push(7)
      .push(6)
      .push(8);

    const arr = stack.toArray();
    expect(arr).toEqual([8, 6, 7, 5, 3, 0, 9]);
  });

  it('should return string representation of the stack', () => {
    const stack = new Stack();
    stack
      .push(9)
      .push(0)
      .push(3)
      .push(5)
      .push(7)
      .push(6)
      .push(8);

    expect(stack.toString({ length: 6 })).toEqual('8       ▶  6       ▶  7       ▶  5       ▶  3       ▶  0       ▶  9     ');
  });
});


