const fibonacci = (n) => {
  const array = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      array.push(0);
    }
    if (i === 2) {
      array.push(1);
    }
    if (i > 2) {
      array.push((array[i-3] + array[i-2]));
    }
  }
  return array;
}

console.log(fibonacci(8));

const fibonacciRecursively = (n) => {
  const array = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      array.push(0);
    }
    if (i === 2) {
      array.push(1);
    }
    if (i > 2) {
      
    }
  }
  return array;
}

// console.log(fibonacci(8));