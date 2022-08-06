const product = (arr) => {
  if (!arr.length) {
    return 1;
  }
  return arr.shift() * (product(arr));
}

console.log(product([1,2,3,10,11]))