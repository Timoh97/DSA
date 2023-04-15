// We first define a Node class to represent the nodes of the binary search tree. Each node has a value, left, and right property which represents the value of the node and its left and right child nodes respectively.
// We then define a BinarySearchTree class to represent the binary search tree itself. The tree has a root property which represents the root node of the tree
// The find method takes a value as an argument and searches the tree for a node with that value. If it finds a node with that value, it returns that node. Otherwise, it returns false
// If the tree is empty (i.e., there is no root node), we return false
// Otherwise, we start at the root node and traverse the tree to find the node with the given value. We use a while loop to keep traversing until we find the node or reach the end of the tree
// Inside the while loop, we check if the value we're searching for is less than, greater than, or equal to the value of the current node. If it's less than, we move to the left child of the current node. If it's greater than, we move to the right child of the current node. If it's equal to, we've found the node we're looking for and we set found to true.
// If we reach the end of the loop without finding the node, we return false.

// If we found the node, we return it.



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
  
    find(value) {
      if (!this.root) return false;
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return false;
      return current;
    }
  }
  