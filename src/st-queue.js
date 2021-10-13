

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


module.exports =
  class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    const { value } = this.head
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    return value
  }

  getUnderlyingList() {
    return this.head
  }
}

//
// const queue = new Queue();
//
// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(2); // adds the element to the queue
// queue.enqueue(3); // adds the element to the queue
// queue.enqueue(4); // adds the element to the queue
// queue.enqueue(5); // adds the element to the queue
// queue.enqueue(6); // adds the element to the queue
// queue.enqueue(7); // adds the element to the queue
// queue.enqueue(8); // adds the element to the queue
// queue.enqueue(9); // adds the element to the queue
//
// console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }