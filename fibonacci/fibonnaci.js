function fibonacci (n){
// n denotes how many numbers the function should return

const fib = [0, 1] //fib has two numbers
for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
return fib
}


console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,2]
console.log(fibonacci(4))//[0,1,2,3]
console.log(fibonacci(5)) //[0,1,2,3,4]
console.log(fibonacci(6))//[0,1,2,3,4,5]