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
}