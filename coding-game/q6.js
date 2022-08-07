const contains = (obj, term) => {
  for (const key in obj) {
    if (obj[key] === term) {
      return true;
    }
    if (typeof obj[key] === 'object') {
      return contains(obj[key], term);
    }
  }
  return false;
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