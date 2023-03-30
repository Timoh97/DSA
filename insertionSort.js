function insertionSort (arr) 
{
    if (arr.length <=1){
        return arr
    }
    for (let i=1; i<arr.length; i++)
    key = arr[i];
    var j = i-1;

        while (j >= 0 && arr[j] > arr[i]){
            arr[j+1] = arr[j]
            j= j-1
    }
    arr[j+1] = key
return arr
    }




