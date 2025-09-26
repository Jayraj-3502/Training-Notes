// let obj1 = { name: "jay" };

// console.log(obj1.__proto__);

let arr = [1, 2, 3, 4, 5];

const newArr = arr.map((element, index, array) => {
  console.log(element, index, array);
});

arr.prototype.newMap = (element = null, index = null, array = null) => {};
