// problem statement: given a sorted array of 'n' elements and a target 't' element, find the index of t,
// in the array and return -1 if the element is not found
//i.e [1,2,4,5,6] n=5 k=4 =>should return 2

// if array has elements, find the middle element if is equal to target and return it's index
//if target<middle, binary search the left of array
//if target>middle, binary search the right of array

function binarySearch (arr, k){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while (leftIndex<= rightIndex) {
        let middleIndex = math.floor((leftIndex+rightIndex)/2)
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target === arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        }
        else {
            leftIndex = middleIndex + 1;
        }
    return -1

    }

}

console.log(binarySearch ([4,6,7,8,9], 6)) //1
console.log(binarySearch ([1,2,4,7,9], 6)) // -1