class Stack {
    constructor (){
        //initialize empty array
        //in js we use this keyword
        this.items = []
    }
    // push method to stack
    push (element) {
        this.items.push(element)
    }



    // pop method fromstack: removes most element
    pop(element){
        return this.items.pop()  
    }



    peek(element){
        return this.items[this.items.length-1]
    }

    isEmpty (){
        return this.items.length === 0
    }


    size (){
        return this.items.length
    }


    print(){
        console.log(this.items.toString())

    }
    
}

const stack =new Stack() //new stack instance
console.log(stack.isEmpty())
console.log(stack.push(20))
console.log(stack.push(10))
console.log(stack.push(30))
console.log(stack.print(20))

console.log(stack.pop()) //gives the value removed at top
console.log(stack.peek()) //checks top value