# 🚀 JavaScript Async & Event Loop -- Assignment

This assignment will help you understand how the **JavaScript Event
Loop** works and how asynchronous tasks like `setTimeout`, `Promise`,
and `fetch()` are handled. You will also build a small project with
**loading states** and **skeleton UI**.

---

## 📌 Part 1: Event Loop & Execution Order

1.  Predict the output of the following code **before running it**:

```js
console.log("1");

setTimeout(() => console.log("timeout 1"), 0);

Promise.resolve().then(() => console.log("promise 1"));

console.log("2");

setTimeout(() => console.log("timeout 2"), 0);

Promise.resolve().then(() => console.log("promise 2"));

console.log("3");
```

- Question: Why do promises run before `setTimeout`?
  Output:
  1
  2
  3
  promise 1
  promise 2
  timeout 1
  timeout 2

  Reason of this behaviour: By default js execute synchronousley. that mean js compiler runs it line by line. When we use time method or promises then a concept comes called execution queue. When we incounter task which tasks some time before execution then those tasks removed from call stack and move into execution queue.

  JS have two type of queues first is execution queue which is default one and secon one is called priority queue. In this queue we have those tasks which has higer priority and this queue execute before the execution. Promise has higher priority then time method so promise callbacks go into priority queue and time method in default queue.

  IMP: queue data only runs when call stack is empty.

  So, First line print 1
  Second line move timeout function into default queue
  Third Line move promise into priority queue
  Fourth line print 2
  Fifth line move timeout function into default queue
  Sixth Line move promise into priority queue
  Seventh Line print 3

      Priority queue have promises so promises runs first
      -> Promise 1
      -> Promise 2

      then finally default execution queue runs and prints
      -> timeout 1
      -> timeout 2

---

2.  Analyze this code and explain the exact order of execution:

```js
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
test();
console.log("C");
```

- Question: What happens inside the **microtask queue** when `await` is used?
- Answer: Mickrotask queue is the higher priority queue which servers tasks like promise. When execution goes to await then it has a promise that promice go into microtask queue and where it get's it's result and go into call start when call stact is empty for execution

---

## 📌 Part 2: Timers & Blocking

1.  Run this code and measure the delay:

```js
console.time("timer");
setTimeout(() => {
  console.timeEnd("timer");
}, 2000);

for (let i = 0; i < 1e9; i++) {} // heavy loop
```

- Question: Why does the `setTimeout` callback run **later than 2s**?
  Answer: setTimeout callback only insure that the code inside it runs after the mention period of time. It not says that the code will runs immiditly after mention time. Also we know that time function go into execution queue and it only go into call stact when call stact is empty. Right now loop is running in the call stact so setTimeOut need to wait for loop to finish first and look for empty call stack to go there and execute the code.

---

## 📌 Part 3: Callbacks vs Promises vs Async/Await

1.  Write the same logic in 3 different ways:
    - Using `setTimeout(callback)`
    - Using `Promise.then`
    - Using `async/await`

Logic: Wait for 2 seconds, then print `"Done!"`.
Answer:

```js
console.time("start1");
setTimeout(() => {
  console.log("Done1");
  console.timeEnd("start1");
}, 2000);
```

```js
Promise.resolve().then(() => {
  console.time("complete");
  setTimeout(() => {
    console.log("Done2");
    console.timeEnd("complete");
  }, 2000);
});
```

```js
async function waitTimeout() {
  console.time("start");
  let ID = await setTimeout(() => {
    console.log("Done");
    console.timeEnd("start");
  }, 2000);
}

waitTimeout();
W;
```

---

## 📌 Part 4: Mini Project -- Fetch with Loading & Skeleton

👉 Create an `index.html` file with: - A button `"Load Users"`. - A
container `<div id="users"></div>`.

When button is clicked: 1. Show **skeleton cards** (gray boxes). 2.
Fetch data from <https://jsonplaceholder.typicode.com/users>. 3. Replace
skeletons with actual user data (name, email, phone). 4. If fetch fails,
show an error message `"Failed to load data"`.

**Extra:** - Add a `"Reload"` button to refetch users. - Show a
`"Loading..."` text before skeletons appear.

---

## 📌 Part 5: Debugging

Given this snippet, fix it so that it prints in the correct order:\
Expected: `1 → 2 → 3 → 4`

```js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

Answer: We can use multiple approaches to create the expected result but i change the printing value instead of code by using the knowledge of Call Stact, execution queue and priority queue.

```js
console.log(1);
setTimeout(() => console.log(4), 0);
Promise.resolve().then(() => console.log(3));
console.log(2);
```

---

## ✅ Deliverables

- Write predictions **before running** each snippet.
- Submit:
  - One `index.html` + `script.js` for the mini-project.
  - A `.md` or `.txt` file with answers/explanations.

---

💡 **Hint:** Use [latentflip.com/loupe](http://latentflip.com/loupe) to
visualize the Event Loop.
