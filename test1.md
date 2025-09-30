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

```js
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);
```

Answer: 1
Reason: Here when we doing obj2 = obj1 at this time we are passing object refrence instead of creating it's copy. Now both have same refrence so once change will reflact in both.

Question:
Given an array of objects, find all objects where the age is greater than 18.

```js
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 25 },
];

const returnArray = users.filter((element) => {
  let { age } = element;
  if (age > 18) {
    return element;
  }
});

console.log(returnArray);

// expected output: [{name: "Bob", age: 20}, {name: "David", age: 25}]
// Explanation: Here i am using filter method to filter out the element based on the condition. In line number 114 we are destructuring the object instead of using dot notaion for best practices.
```

Question:
Write a function to capitalize the first letter of each word in a string.

```js
function capitalizeWords(str) {
  // In this code first we conver string into array
  // then using map function to work on each element of that array
  // Then conver first character of each word into caps and store it into char
  // Then concate char and remaning sting except first character and store it into car to form complete word
  // Then return the new word
  // finally return string of array using join method

  const divideString = str.split(" ");
  const newArray = divideString.map((element) => {
    let char = element[0].toUpperCase();
    char = char + element.slice(1);
    return char;
  });

  return newArray.join(" ");
}

console.log(capitalizeWords("hello world from js")); // "Hello World From Js"
```

Question:
What’s the difference between these two approaches? Which one is shallow and which is deep?

```js
const arr = [[1], [2], [3]];
const copy1 = arr.slice();
const copy2 = JSON.parse(JSON.stringify(arr));

// copy1 is creating shallow copy because this is default behaviour of js that every method will return shallow copy rather then the methods which which access and return refrence.

// copy2 is creating deep copy because here we are creating deep copy by our selfs not depending on default behaviour.
```

```

```
