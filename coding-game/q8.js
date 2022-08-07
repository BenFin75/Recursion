const sumSquares = (array) => {
  let n = 0;
  for (const value in array) {
    if (Number.isInteger(array[value])) {
      n = n + (array[value] * array[value]);
    }
    if (typeof array[value] === 'object') {
      return n + sumSquares(array[value]);
    }
  }
  n
  return n;
}

const simpleArray = [1, 2, [3], 4]

console.log(sumSquares(simpleArray));

const tensArray = [10, 10, [10, 10]]

console.log(sumSquares(tensArray));


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