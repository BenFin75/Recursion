const fibonacci = (n) => {
  const array = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      array.push(0);
    }
    if (i === 1) {
      array.push(1);
    }
    if (i >= 2) {
      array.push((array[i-1] + array[i-2]));
    }
  }
  return array;
}

console.log(fibonacci(8));

const fibonacciRecursively = (n) => {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const arr = fibonacciRecursively(n - 1);
  return [...arr, arr[n-1] + arr[n - 2]];
}

console.log(fibonacciRecursively(3));