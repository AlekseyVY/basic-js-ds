

// const { ListNode } = require('../extensions/list-node.js');

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

function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = null;
      this.head.next = this.tail;
      this.head.prev = null;
      this.tail.prev = this.head;
    } else {
      const tmp = this.head;
      this.head = node;
      tmp.prev = this.head;
      this.head.next = tmp;
    }
    this.length++;
  }

  dequeue() {
    const { value } = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  getUnderlyingList() {

  }
}


// const queue = new Queue();
//
// console.log(queue.enqueue(1)); // adds the element to the queue
// console.log(queue.enqueue(3)); // adds the element to the queue
// console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }