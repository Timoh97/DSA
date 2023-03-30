function insertionSort (arr) 
{
    // check if arr has one element
    if (arr.length <=1){
        return arr
    }
    //set for loop and initialize key and i =1
    // initialize j also
    // the assumption is arr[0] is sorted
    for (let i=1; i<arr.length; i++)
        var key = arr[i];
        var j = i-1;

        while (j >= 0 && arr[j] > arr[i]){
            // if the condition is satisfied swap
            arr[j+1] = arr[j]
            j= j-1
    }
    arr[j+1] = key
return arr
}




