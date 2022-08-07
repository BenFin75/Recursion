const replicate = (n, value) => {
  const array = [];
  for (n > 0; n--;) {
    array.push(value);
    replicate(n, value);
  }
  return array
}

console.log(replicate(6,5));