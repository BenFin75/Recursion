const power = (b, e) => {
  if (e === 1) {
    return b
  }
  return b * power(b, e - 1);
}

console.log(power(2, 3));