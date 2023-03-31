function factorial (n){
// 0! = 1
// 1! = 1
let result = 1;
for (let i = 2; i <= n; i++){
    result = result*i
}
// we exit for loop
return result
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))