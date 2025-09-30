Question:
Given the following object, how would you create a deep copy of it so that modifying the nested object in the copy does not affect the original?
const original = { name: "Alice", address: { city: "Paris", zip: 75000 } };

Answer = const copyOfOriginal = structureClone(original);

Question:
Write a function that reverses a string without using the built-in reverse() method.

```js
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  let newString = str.split("");
  let start = 0;
  let end = newString.length - 1;

  while (start < end) {
    let storedValue = newString[start];
    newString[start] = newString[end];
    newString[end] = storedValue;
    start++;
    end--;
  }

  return newString.join("");
}
console.log(reverseString("JavaScript")); // should print "tpircSavaJ"
```

Question:
Given an array of numbers, write a function that returns a new array with only even numbers multiplied by 2 using array methods.
const numbers = [1, 2, 3, 4, 5, 6];
// expected output: [4, 8, 12]

````js

const newArray = numbers.filter((element) => {
    return element%2 == 0;
})


``

Question:
How can you create an object with keys dynamically based on an array of strings?
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
// create an object: { name: "Alice", age: 25, city: "Paris" }
```js




````

Question:
What will be the output of the following and why?

```js
console.log(5 + "5"); // It return '55' in string because when we have number and string js think that you try to concatinate thos things instead of addition.
console.log("5" - 2); // It return '3' because there nothing we can do with - in string so this time instead on converting number into string it convert string into number to perform operation.
console.log(true + 1); // It return '2' becuase here boolean value convert into number to add with number implicitly and the value of true is 1.
console.log(null == 0); // It return 'false' because null not contains any value at all. Additionally null is an object so in comparision it not compare value it compare type directly.
console.log(null === 0); // It returns 'false' because null is an Object and 0 is a Number type.
```

Question:
Write a closure that keeps track of a counter. Each time the function is called, it should increment and return the counter.

```js
function createCounter() {
  let i = 0;
  return function () {
    return ++i;
  };
}

// this function which we are returning is a clouser function and it remembers its parent value;

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Question:
What will be logged to the console and why?

const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);

Question:
Given an array of objects, find all objects where the age is greater than 18.const users = [
{ name: "Alice", age: 17 },
{ name: "Bob", age: 20 },
{ name: "Charlie", age: 15 },
{ name: "David", age: 25 }
];
// expected output: [{name: "Bob", age: 20}, {name: "David", age: 25}]

Question:
Write a function to capitalize the first letter of each word in a string.function capitalizeWords(str) {
// your code here
}
console.log(capitalizeWords("hello world from js")); // "Hello World From Js"

Question:
What’s the difference between these two approaches? Which one is shallow and which is deep?const arr = [[1], [2], [3]];
const copy1 = arr.slice();
const copy2 = JSON.parse(JSON.stringify(arr));

```

```
