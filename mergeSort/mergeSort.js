function mergeSort (arr){
    if (arr.length<=1){
        return arr
    }
    const mid = math.floor(arr.length/2)
    const leftSubArray = arr.slice(0, mid)
    const rightSubArray = arr.slice(mid)
return merge (mergeSort(leftSubArray), mergeSort(rightSubArray))
}


// sorting function
function merge (leftSubArray, rightSubArray){

    // sorted items will go here
    result =[];

    //We then loop while both left and right are non-empty,
    while (leftSubArray.length && rightSubArray.length) {
        if (leftSubArray[0] <= rightSubArray[0]){
            //if first element of left is less than right, we cut it and add to the result
            // this is done recursively
            result.push(leftSubArray.shift())
        }
        else {
            result.push (rightSubArray.shift())
        }
        //we then  concatenate result, left and right in that order
return result.concat(leftSubArray, rightSubArray);
    }

}