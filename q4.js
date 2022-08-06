const checkAll = (arr, func) => {
  console.log(arr);
  if(!arr.length) {
    return true
  }
  if(func(arr[0])) {
    arr.shift()
    return checkAll(arr, func);
  }
  return false;
}

const lessThanSeven = (n) => {
  return n < 7;
}

console.log(checkAll([1,2,3,4,5,6], lessThanSeven));