// class Node: Same as before, this represents a node in the binary search tree.
// class BinarySearchTree: Same as before, this represents the binary search tree.
//BFS(): This method performs a breadth-first search on the binary search tree. It starts by setting node to the root node of the tree. 
// It also initializes an empty queue (queue) and an empty array (data) to store the node values in BFS order.
// queue.push(node): This adds the root node to the queue.
// while(queue.length) { ... }: This loop continues as long as there are nodes in the queue to process.
// node = queue.shift(): This removes the first node from the queue and sets it to node
// data.push(node.value): This adds the value of the current node (node.value) to the data array
// if(node.left) queue.push(node.left): This checks if the current node has a left child. If it does, it adds the left child to the end of the queue
// if(node.right) queue.push(node.right): This checks if the current node has a right child. If it does, it adds the right child to the end of the queue
// return data: This returns the data array containing the node values in BFS order.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // other methods here
  
    BFS() {
      let node = this.root;
      let queue = [];
      let data = [];
      queue.push(node);
      while(queue.length) {
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      return data;
    }
  }
  