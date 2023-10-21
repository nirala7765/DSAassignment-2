function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1], that are greater than key, one position ahead of their current position.
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  const unsortedArray = [12, 11, 13, 5, 6];
  insertionSort(unsortedArray);
  console.log("Sorted array:", unsortedArray);
  