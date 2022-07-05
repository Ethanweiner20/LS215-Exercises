// Bubble Sort

function bubbleSort(arr) {
  function swapUpTo(endIndex) {
    let hasSwapped = false;

    for (let swapIndex = 0; swapIndex <= endIndex; swapIndex++) {
      if (arr[swapIndex] > arr[swapIndex + 1]) {
        swap(swapIndex, swapIndex + 1);
        hasSwapped = true;
      }
    }

    if (hasSwapped) swapUpTo(endIndex - 1);
  }

  function swap(index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  swapUpTo(arr.length - 2);
}

// Generic Cases

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Edge Cases

const array4 = [];
bubbleSort(array4);
console.log(array4); // []

const array5 = [5];
bubbleSort(array5);
console.log(array5); // [5]

const array6 = [6, 2, 2, 7, 1, 4];
bubbleSort(array6);
console.log(array6); // [1, 2, 2, 4, 6, 7]

// Less than array.length - 1 passes
const array7 = [1, 2, 2, 7, 1, 4];
bubbleSort(array7);
console.log(array7); // [1, 2, 2, 4, 6, 7]

const array8 = [1, 2, 3];
bubbleSort(array8);
console.log(array8); // [1, 2, 3]
