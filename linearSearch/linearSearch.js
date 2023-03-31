// problem statement: given an array of 'n' elements and a target 't' element, find the index of t,
// in the array and return -1 if the element is not found
//i.e [4,2,10,5,6] n=5 k=10 =>should return 2

//1. start at 1st element and move to last in array
//2. at the current element check if the element is equal to target
//3. if equal return the index of the element
//4. if not return -1

function linearSearch(arr, target){
   for (let i = 0; i < arr.length; i++){
    if (arr[i]= target){
        return i
    }
   return -1
   } 
}

console.log (linearSearch([3,5,2,7,8],3)) // 1
console.log (linearSearch([4,7,6,9,8],8)) // 4
console.log (linearSearch([8,5,6,7,10],6)) // 2
console.log (linearSearch([8,5,6,7,10], 1)) // -1