//1.The selectionSort function takes an input array arr as its parameter.
//2. The outer for loop iterates over each element of the array.
//3. Within each iteration of the outer loop, the minIndex variable is initialized to the current index of the outer loop
//4. The inner for loop iterates over the remaining unsorted part of the array to find the minimum element.
//5. If a smaller element is found in the unsorted subarray, its index is assigned to minIndex
//6. If the minIndex is not equal to i (the current index of the outer loop), the minimum element is swapped with the element at index i
//7. After all iterations are completed, the sorted array is returned.

// time complexity: Selection Sort has a time complexity of O(n^2), where n is the number of elements in the input array. Although it is not very efficient for large arrays, Selection Sort is easy to understand and implement, and is useful for sorting small arrays or for educational purposes.








function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }