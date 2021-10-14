const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rt = null;
  }

  root() {
    return this.rt
  }

  add(data) {
    function insertNode(currentNode, newNode) {
      if(newNode.data < currentNode.data) {
      if(currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        insertNode(currentNode.left, newNode);
      }
    } else {
      if(currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        insertNode(currentNode.right,newNode);
      }
    }
    }
    const newNode = new Node(data);
    if (this.rt === null) {
      this.rt = newNode;
    } else {
      insertNode(this.rt, newNode);
    }
  }

  has(data) {
    function search(node, data) {
      if(!node) return false;
      if(node.data === data) return true;
      return data < node.data ? search(node.left, data) : search(node.right, data);
    }
    return search(this.rt, data);
  }

  find(data) {
    function search(node, data) {
      if(node === null) return null;
      if(data < node.data) return search(node.left, data);
      if(data > node.data) return search(node.right, data);
      return node;
    }
    return search(this.rt, data)
  }

  remove(data) {
    function del(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = del(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = del(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let dto = node.right;
        while (dto.left) {
          dto = dto.left;
        }
        node.data = dto.data;
        node.right = del(node.right, dto.data);
        return node;
      }
    }
    this.rt = del(this.rt, data);
  }

  min() {
    if (this.rt === null) return null;
    let node = this.rt;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.rt === null) return null;
    let node = this.rt;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}