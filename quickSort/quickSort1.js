function quickSort (arr)
{
// check the case when there is one element in array
if (arr.length <=1)
    return arr;
// select pivote element as first element
// initialize two empty arrays
    const pivot = arr[0];
    const leftArray = [];
    const rightArray = [];
for (let i=0; i<arr.length; i++)
// check the lements against pivot and push to arrays
    if (arr[i]>pivot)
    {
        rightArray.push(arr[i]);
    } 
    else
    {
        leftArray.push(arr[i]);
    }
return quickSort(leftArray).concat(pivot, quickSort(rightArray))
}
const arr = [9, 4,5,7,2,7]
console.log (quickSort (arr))