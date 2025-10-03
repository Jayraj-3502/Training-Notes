Array.prototype.myMapFunction = function (callback) {
  const arr = this;
  const len = this.length;
  const returnArray = [];

  for (let i = 0; i < len; i++) {
    returnArray.push(callback(arr[i], i, arr));
  }

  return returnArray;
};

Array.prototype.myFiterFunction = function (callback) {
  const arr = this;
  const len = this.length;
  const returnArray = [];

  for (let i = 0; i < len; i++) {
    if (callback(arr[i], i, arr) === undefined) {
      continue;
    } else {
      returnArray.push(callback(arr[i], i, arr));
    }
  }

  return returnArray;
};

Array.prototype.myReduceFunction = function (callback, initialValue = this[0]) {
  let accumulator = initialValue;
  const arr = this;
  const len = arr.length;
  let newVal = 0;

  for (let i = 1; i < len; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

let arr = [1, 2, 3, 4, 5, 6];

// let newValues = arr.myMapFunction((element, index) => {
//   return element * index * 2;
// });

// let newValues = arr.myFiterFunction((element) => {
//   if (element % 2 === 0) {
//     return element;
//   }
// });

// let newValues = arr.myReduceFunction((acc, element) => {
//   console.log(acc);
//   return acc + element;
// });

console.log(newValues);
