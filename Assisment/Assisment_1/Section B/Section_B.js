// Question 1: Write a function checkNumber(num) that logs:
// "Positive" if num > 0
// "Negative" if num < 0
// "Zero" otherwise.

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(5);
checkNumber(-1);
checkNumber(0);

// ---------------------------------------------------

// Question 2: Loop & Arrow Function:
// Write a function that takes an array of numbers and returns a new array with each number doubled using a forEach loop and arrow function.

let newArray = (numsArr) => {
  let returnArray = [];

  numsArr.forEach((element) => {
    returnArray.push(element * 2);
  });

  return returnArray;
};

let numsArr = [1, 2, 3, 4, 5, 6];
console.log(newArray(numsArr));

// ---------------------------------------------------

// Question 3: Object Destructuring & Template Literals:

const user = { name: "John", age: 25 };
// Use destructuring and template literals to log:
// "John is 25 years old."
let { name, age } = user;
console.log(`${name} is ${age} years old.`);

// ---------------------------------------------------

// Question 4: DOM Manipulation:
// Write code to select a button with ID #btn and a paragraph with class .msg. When the button is clicked, change the paragraph text to “Button Clicked!”

// Answer is in HTML File.

// ---------------------------------------------------

// Question 5: Array Methods:
// Given:
// Use filter to get even numbers.
// Use reduce to get the sum of numbers.
// Log both results.

const numbers = [1, 2, 3, 4, 5];

console.log(
  numbers.filter((element) => {
    return element % 2 === 0;
  })
);

console.log(
  numbers.reduce((acc, element) => {
    return (acc = acc + element);
  })
);

// ---------------------------------------------------

// Question 6: Async/Await:
// Write a function that fetches data from https://jsonplaceholder.typicode.com/todos/1 using async/await and logs the JSON response.

async function fetchData() {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await responce.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("This is Final Statement");
  }
}

fetchData();
