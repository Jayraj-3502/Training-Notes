# 📝 JavaScript Assignment – Shallow copy, deep copy, Prototypes, Destructuring, this keyword, class, function constructor

---

## 🟢 Easy Level

### 1. Shallow vs Deep Copy

```js
let obj = { x: 1, y: { z: 2 } };
let copy1 = { ...obj };
let copy2 = structuredClone(obj);

copy1.y.z = 50;
copy2.y.z = 100;

console.log(obj.y.z);
// Predict the output?
Output: 50;
```

---

### 2. Array Destructuring

```js
const nums = [5];
const [a=1, b=2, c=3] = nums;
console.log(a, b, c);
// What will be logged?
Output: 5 2 3
```

---

### 3. Object Destructuring

```js
const student = { id: 1, name: "Ravi" };
const { id, name, grade="A" } = student;
console.log(id, name, grade);
// What is grade value?
Output: 1 Ravi A
```

---

### 4. String Reverse

- Implement a function that reverses `"JavaScript"` using the custom `.reverse()` method.  
   Answer:
  let str = "Javascript";
  String.prototype.reverse = function(inputStr) {
  const resultStr = inputStr.split("").reverse().join("");
  // console.log(resultStr);
  return resultStr;
  };

  console.log(str.reverse(str)); // result will be reverse string;

  second optoin//

  let str = "Javascript";
  String.prototype.reverse = function () {
  const resultStr = this.split("").reverse().join("");
  // console.log(resultStr);
  return resultStr;
  };

  console.log(str.reverse()); // result will be reverse string;

---

### 5. String Methods

```js
console.log("  hello world  ".trim().toUpperCase().slice(0, 5));
// What will be the output?
Output: HELLO;
```

---

## 🟡 Medium Level

### 6. Prototype Inheritance

```js
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak();
```

- What will be logged?
  Output: Dog makes a sound

- Add another method `eat()` in prototype that logs `"Dog is eating"` and call it.
  Answer:
  Animal.prototype.eat = function() {
  console.log(this.type, 'makes a eating');
  }

  dog.eat();

---

### 7. `this` Keyword

```js
const person = {
  name: "Amit",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

const greetFn = person.greet;
greetFn();
```

- Why does this print `undefined`?
  Answer: because in person.greet this refer to person object but when we are passing it to greetFn then there is direct connection to person so that function will standalone. So when a function is standing alone then it refer to undefined or global object.

- Fix it using `.bind()`.
  Answer:greetFn.bind(person)();

---

### 8. Class vs Constructor

- Write a **constructor function** and a **class** for `Book` with properties: `title`, `author`.
- Add a method `getDetails()` in both which returns `"title by author"`.
- Create 2 objects and call the method.

class Book {
constructor(title, author) {
this.title = title;
this.author = author;
}

getDetails = function () {
return `${this.title} by ${this.author}`;
};
}

const obj1 = new Book("One Piece", "ODA");
const obj2 = new Book("Death Note", "Light Yagami");

console.log(obj1.getDetails());
console.log(obj2.getDetails());

---

### 9. Array Functions

- Write code using:
  - `map()` → multiply every element in `[1,2,3,4]` by 3.
  - `filter()` → keep only even numbers.
  - `reduce()` → find sum of all elements.

Answer:
let arr = [1, 2, 3, 4];
let newarr = arr
.map((i) => i \* 3)
.filter((i) => i % 2 == 0)
.reduce((acc, i) => acc + i);
console.log(newarr);

---

### 10. Ways to Create Objects

- Create an object representing a `Laptop` using all **5 ways** (Literal, `new Object()`, Constructor, Class, `Object.create()`).
- Each object should have a property `brand` = `"HP"`.

// Using Object Literal
let objLiteral = {
'brand': 'HP',
'ram': '16GB',
'ssd': '1TB;,
}

// Using new keyword
let objNew = new Object(objLiteral);

// Using object constructor
let objConstructor = function(ram, ssd) {
this.brand = 'HP';
this.ram = ram;
this.ssd = ssd;
this.dispaySpecification = function() {
console.log(`Brand name: ${this.brand}, Ram: ${this.ram}, SSD: ${this.ssd}`);
}
}

// Using class
class ObjClass {
construcor(ram, ssd) {
this.brand = 'HP';
this.ram = ram;
this.ssd = ssd;
}

displaySpecification = function() {
console.log(`Brand name: ${this.brand}, Ram: ${this.ram}, SSD: ${this.ssd}`);
}

}

// Using Object.create() Method
let objCreateMethod = Object.create(objLiteral)

---

✅ Attempt all the questions. Later, a solution sheet will be provided for verification.
