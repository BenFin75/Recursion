const totalIntegers = (array) => {
  let n = 0;
  for (const value in array) {
    if (Number.isInteger(array[value])) {
      ++n;
    }
    if (typeof array[value] === 'object') {
      return n + totalIntegers(array[value]);
    }
  }
  n
  return n;
}

const simpleArray = [1,2, [3], 4]

console.log(totalIntegers(simpleArray));

const testArray = 
[
  [
    [
      1,
      2, 
      [
        [
          4,
          5
        ],
        3
      ]
    ]
  ]
];


// console.log(totalIntegers(testArray));
