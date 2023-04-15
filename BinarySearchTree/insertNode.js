// We first define a Node class to represent the nodes of the binary search tree. 
// Each node has a value, left and right property which represents the value of the node and its left and right child nodes respectively.


class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

  // We then define a BinarySearchTree class to represent the binary search tree itself. 
  //The tree has a root property which represents the root node of the tree

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  

// The insert method takes a value as an argument and inserts a new node with that value into the tree
// We create a new node with the given value and store it in the newNode variable
//If the tree is empty (i.e., there is no root node), we set the root property to the new node and return this (the current instance of the BinarySearchTree class
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      // Otherwise, we start at the root node and traverse the tree to find the correct position to insert the new node.
      // We use a while loop to keep traversing until we find an appropriate spot
      // Inside the while loop, we first check if the value of the new node is equal to the value of the current node. 
      // If it is, we return undefined since we don't allow duplicate values in the tree
      // Next, we check if the value of the new node is less than the value of the current node. 
      //If it is, we check if the current node has a left child. If it doesn't, we insert the new node as the left child of the current node and return this.
      // If it does have a left child, we set the current variable to the left child and continue the traversal.
      // If the value of the new node is greater than the value of the current node, we perform a similar check on the right child of the current node. 
      // If the current node does not have a right child, we insert the new node as the right child and return this.
      // If it does have a right child, we set the current variable to the right child and continue the traversal.
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }

  }

  // If we reach the end of the while loop without inserting the new node, something has gone wrong and we should handle that error case appropriately.
  // However, in this implementation, we assume that we always find a spot to insert the new node
  