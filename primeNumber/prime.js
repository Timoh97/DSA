function isPrime (n){
    // all know prime numbers are greater than 2
    if (n < 2){
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n%i === 0){
            return false

        }
    return true
    }
    
}

console.log (isPrime(2)) // false
console.log (isPrime(3))//true
console.log (isPrime(4))// false
console.log (isPrime(5)) // true