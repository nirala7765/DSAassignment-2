function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: an array with 0 or 1 elements is already sorted.
    }
  
    // Choose a "pivot" element from the array.
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    // Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
    const left = arr.filter((element) => element < pivot);
    const equal = arr.filter((element) => element === pivot);
    const right = arr.filter((element) => element > pivot);
  
    // Recursively sort the sub-arrays.
    return quickSort(left).concat(equal, quickSort(right));
  }
  
  // Example usage:
  const unsortedArray = [12, 11, 13, 5, 6, 7];
  const sortedArray = quickSort(unsortedArray);
  console.log("Sorted array:", sortedArray);
  