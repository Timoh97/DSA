class Queue {
    constructor (){
        this.items = [];
    }

// adds element to queue
    enqueue (element){
        return this.items.push(element); //adds element to queue
    }

    dequeue (){
        return this.items.shift();
    }


    // returns true if the length is zero
    isEmpty(){
        return this.items.length === 0;
    }

    // returns the size of the queue
    size (){
        return this.items.length
    }
    //prints elements in the array
    print(){
        console.log(this.items.toString())
    }
}

//instantiate Queue
const queue = new Queue ()

queue.enqueue(30)
queue.enqueue (23)
queue.enqueue (10)
queue.enqueue (0)
queue.dequeue()
queue.isEmpty()
queue.size()
queue.print()