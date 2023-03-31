// contains data value and node(next)

class Node {
    constructor (value){
        // instatiate value and node
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor (){
        this.head = null
        this.size = 0
    }

    //2 methds
    // is empty and size method
    isEmpty (){

        return this.size === 0
    }

    getSize (){

        return this.size
    }

    //adding a value to node
    // method accepts a value
    prepend (value){
        const node = new Node (value)

        // Case 1: list is Empty
        if (this.isEmpty()) {
            this.head = node
        }
        // Case 2: list is not empty
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
        

        

    }
}


// code refactor