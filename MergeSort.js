const mergSort = (array) => {
  if (array.length <= 1) {
    return [array[0]];
  }
  else {
    const splitLeft = Math.round(array.length / 2);
    const splitRight = array.length - splitLeft;
    const leftHalf = array.slice(0, splitLeft);
    const rightHalf = array.slice(splitRight, array.length);
    const leftSorted = mergSort(leftHalf);
    const rightSorted = mergSort(rightHalf);
    const returnArray = []
    for (i = 0; i <= leftSorted.length; i++) {
      if (leftSorted[i] < rightSorted[i]) {
        returnArray.push(leftSorted[i]);
        returnArray.push(rightSorted[i]);
      }
      else {
        returnArray.push(rightSorted[i]);
        returnArray.push(leftSorted[i]);
      }
    }
    return returnArray;
  //   if (leftSorted < rightSorted) {
  //     return [...leftSorted, ...rightSorted]
  //   }
  //   else {
  //     return [...rightSorted, ...leftSorted]
  //   }
  }
}

const testArray = [5,2,7,1,8,3,6,4];

console.log(mergSort(testArray));