const mergeSort = (array) => {
  console.log(array);
  if (array.length === 0) {
    return array;
  }
  if (array.length === 1) {
    return array;
  }

  else {
    // split array in half
    const split = Math.round(array.length / 2);
    const leftHalf = array.slice(0, split);
    const rightHalf = array.slice(split, array.length);
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    console.log(leftSorted)
    console.log(rightSorted)

    //sort array
    const sortedArray = [];
    while (leftSorted.length > 0 || rightSorted.length > 0) {
      if (!leftSorted[0]) {
        sortedArray.push(rightSorted.shift());
      }
      else if (!rightSorted[0]) {
        sortedArray.push(leftSorted.shift());
      }
      else if (leftSorted[0] < rightSorted[0]) {
        sortedArray.push(leftSorted.shift());
      }
      else {
        sortedArray.push(rightSorted.shift());
      }
    }
    return sortedArray
  }
}

const testArray = [1,5,2,7,1,8,3,6,4];
const smallArray= [3,1,2];
console.log(mergeSort(smallArray));
console.log(mergeSort(testArray));

// const test = (leftSorted, rightSorted) => {
//   const sortedArray = [];
//   while (leftSorted.length > 0 || rightSorted.length > 0) {
//     if (!leftSorted[0]) {
//       sortedArray.push(rightSorted[0]);
//       rightSorted.shift();
//     }
//     else if (!rightSorted[0]) {
//       sortedArray.push(leftSorted[0]);
//       rightSorted.shift();
//     }
//     else if (leftSorted[0] < rightSorted[0]) {
//       sortedArray.push(leftSorted[0]);
//       leftSorted.shift();
//     }
//     else {
//       sortedArray.push(rightSorted[0]);
//       rightSorted.shift();
//     }
//   }
//   return sortedArray;
// }

// console.log(test(smallArray, testArray));

// const testFunc = (array) => {
//   array.shift();
//   return array
// }
// console.log(testFunc(smallArray))