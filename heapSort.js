function heapSort(arr) {
    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
  
    // Heap sort
    for (let i = arr.length - 1; i > 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If largest is not root
    if (largest !== i) {
      // Swap the elements
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  