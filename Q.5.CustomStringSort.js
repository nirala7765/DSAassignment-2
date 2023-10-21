function customStringSort(listOfStrings) {
    for (let i = 0; i < listOfStrings.length - 1; i++) {
      for (let j = i + 1; j < listOfStrings.length; j++) {
        if (listOfStrings[i] > listOfStrings[j]) {
          // Swap the strings if they are out of order.
          const temp = listOfStrings[i];
          listOfStrings[i] = listOfStrings[j];
          listOfStrings[j] = temp;
        }
      }
    }
    return listOfStrings;
  }
  
  // Example usage:
  const unsortedList = ["banana", "apple", "date", "cherry", "grape"];
  const sortedList = customStringSort(unsortedList);
  console.log("Sorted list:", sortedList);

  