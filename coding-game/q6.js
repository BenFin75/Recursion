const contains = (obj, term) => {
  let result = false;
  for (const key in obj) {
    if (obj[key] === term) {
      result = true;
    }
    if (typeof obj[key] === 'object') {
      result = contains(obj[key], term);
    }
  }
  return result;
}

const testObject = {
  One: {
    Two: {
      Three: {
        Four: {
          number: 44,
          name: "Ben"
        }
      },
      upperNumber: 11
    },
    test: "test"
  }
}

console.log(contains(testObject, "Ben"));
console.log(contains(testObject, "test"));