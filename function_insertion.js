function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // element we want to insert
    let j = i - 1;

    // Move elements bigger than current one position forward
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert current in the correct place
    arr[j + 1] = current;
  }

  return arr;
}

// Example
let numbers = [5, 2, 4, 6, 1, 3];

console.log(insertionSort(numbers));