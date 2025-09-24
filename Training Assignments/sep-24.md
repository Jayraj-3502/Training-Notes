# JavaScript Fundamentals - Assignments

## 1. Block Scope (`var`, `let`, `const`)

**Code:**
```js
{
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); 
console.log(y); 
console.log(z);
```

**Questions:**
- Which lines will throw errors? Why?
Answer: line number 3 will throw error and the error is refrenceError. Let define varible in block scope and in this code we are trying to access this y in outside of the scope.
- Rewrite the code so all variables are accessible outside the block without errors.
Answer: 
{
	var x = 1;
	ver y = 2;
	var z = 3;
}

console.log(x);
console.log(y);
console.log(z);

---

## 2. Temporal Dead Zone (TDZ)

**Code:**
```js
console.log(a);
console.log(b);
console.log(c);

var a = 1;
let b = 2;
const c = 3;
```

**Questions:**
- What will be logged?
Answer: undefine will logged.
- Explain why `b` and `c` behave differently than `a`.
Answer: b and c behave differently because they are define with let and const and before declaration the belong to an area called temporal dead zone. So they throw error might be refrence error.

---

## 3. Closures

**Code:**
```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1()); // ?
console.log(c1()); // ?
const c2 = counter();
console.log(c2()); // ?
```

**Questions:**
- What’s the output?
Answer:	1
	2
	1
- Why does `c1` keep its own state separately from `c2`?
Answer: Because when we call function for c1. That time c1 take a seprate return and same with s2. They don't collaps in each other. Another reason ones a function called it starts from very begineeing for the next one who calls it.

---

## 4. Pass by Value vs Pass by Reference

**Code:**
```js
let num = 10;
let obj = {value: 10};

function changePrimitive(x) {
  x = 20;
}

function changeObject(y) {
  y.value = 20;
}

changePrimitive(num);
changeObject(obj);

console.log(num); // ?
console.log(obj); // ?
```

**Questions:**
- Which value changes and why?
Answer: In this code value of obj will change because it passed by refrence not passed by value.

---

## 5. Type Coercion

**Code:**
```js
console.log(1 + "2");   
console.log("2" * 3);   
console.log(0 == false);  
console.log(0 === false); 
console.log([] == false);
console.log([] === false);
```

**Questions:**
- Predict outputs before running.
Answer: '12'
	'222'
	true
	false
	true
	false
- Which ones use coercion, and which don’t?
Answer: 1,2,3,5 uses coercion
---

## 6. Hoisting

**Code:**
```js
sayHello();
console.log(x);

function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;
```

**Questions:**
- What happens with `sayHello()`?
Answer: it got executed and print Hello!

- What gets logged for `x`?
Answer: Undefined

- What if you also add `console.log(y)` before declaration?
Answer: Getting refranceError

---

## 7. Objects & References

**Code:**
```js
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); 
console.log(obj2.name); 

console.log(obj1 === obj2); 
```

**Questions:**
- Why does changing `obj2` also change `obj1`?
Answer: yes, changes of obj2 reflects in obj1 because non-primitive datatypes shared as refrence not by value.
	Logged result will be:
	bob
	bob
	true

---

## 8. Array Mutation vs Non-Mutation

**Code:**
```js
const arr = [1, 2, 3, 4, 5];
const a = arr.sort();
const b = arr.slice(0, 3);
console.log(a === arr); 
console.log(b === arr);
```

**Questions:**
- Which array methods mutate and which don’t?
Answer: sort() method actually change the original array.
	slice() method perform no changes in original array but return value which it removes 
	(Correction after code run. I got confused in slice and splice.)

- Why does `a === arr` return true, but `b === arr` doesn’t?
Answer: a == arr because a is sorted and original arrag also got sorted with sort method.
	b != arr because b have those value which got sliced and arr have original values.
	(Correction after code run. I got confused in slice and splice.)
