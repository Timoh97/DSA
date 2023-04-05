
//in bubble sort we recursively compare adjacent elements
//1. The implementation starts by storing the length of the array in a variable len.
//2. We then use two nested for loops to iterate over each element in the array. The outer loop iterates from i=0 to i=len-2, and the inner loop iterates from j=0 to j=len-i-
//3. For each pair of adjacent elements arr[j] and arr[j+1], we check if arr[j] is greater than arr[j+1]. If it is, we swap the elements by storing the value of arr[j] in a temporary variable temp, assigning arr[j+1] to arr[j], and assigning temp to arr[j+1].

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}






