// class Node: Same as before, this represents a node in the binary search tree
// class BinarySearchTree: Same as before, this represents the binary search tree
//DFSPreOrder(): This method performs a pre-order depth-first search on the binary search tree. It starts by initializing an empty array (data) to store the node values in pre-order DFS order
// function traverse(node) { ... }: This is a recursive helper function that traverses the binary search tree in pre-order DFS order, starting from a given node. It takes a node as input and performs the following steps
// data.push(node.value): This adds the value of the current node (node.value) to the data array
// if(node.left) traverse(node.left): This checks if the current node has a left child. If it does, it recursively calls the traverse() function on the left child.
// if(node.right) traverse(node.right): This checks if the current node has a right child. If it does, it recursively calls the traverse() function on the right child
// traverse(this.root): This starts the pre-order DFS traversal by calling the traverse() function on the root node of the binary search tree
// return data: This returns the data array containing the node values in pre-order DFS order.

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
  
    DFSPreOrder() {
      let data = [];
      function traverse(node) {
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }
  }
  