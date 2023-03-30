
//optimized queue method
class Queue {
    constructor (){
        this.items = [];
        this.front = 0;
        this.rear = 0;
}

enqueue (element){
    this.items[this.rear]=element
    this.rear++
}

dequeue(){
    this.item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
}

isEmpty (){
    return this.rear-this.front === 0;
}

peek (){
    return this,items [this.front]
}

size (){
    return this.rear-this.front
}

print (){
    console.log(this.items)
}

}


const queue = new Stack ()
queue.enqueue()
queue.enqueue()
queue.dequeue()
queue.peek() //returns element at the peek