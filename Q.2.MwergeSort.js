function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: an array with 0 or 1 elements is already sorted.
    }
  
    // Split the input array into two halves.
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort both halves.
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    // Merge the two sorted halves.
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both halves and merge them into the result array.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Append any remaining elements from both arrays.
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [12, 11, 13, 5, 6, 7];
  const sortedArray = mergeSort(unsortedArray);
  console.log("Sorted array:", sortedArray);
  