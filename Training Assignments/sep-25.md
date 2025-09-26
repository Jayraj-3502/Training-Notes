# JavaScript Assignments - Operators, Loops, Arrays, Objects

This document contains JavaScript assignment tasks covering operators,
conditional operators, loops, array functions, truthy/falsy values,
optional chaining, and object methods like seal and freeze.

---

## 🟢 Easy Level

1. **Operators Practice**  
   Predict the output of given `console.log` statements:

   - `console.log(3 + 3 * 6 / 6);` : 6
   - `console.log(10 % 4 * 2 + 5);` : 9
   - `console.log(1 + "1" - 1);` : 10
   - `console.log(true + false);` : 1
   - `console.log("5" * 2 + 1);` : 11

2. **Truthy/Falsy Filters**

   ```js
   const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
   ```

   - Filter only truthy values from an array.
     Output: arr.filter(i => i); it only works when we assume negative number as truthy numbers.

   - Filter only falsy values from an array.
     OutPut: arr.filter(i => !i); it only works when we assume negative number as truthy numbers.

3. **Optional Chaining**

   ```js
   const user = { profile: { name: "Pablo" } };
   ```

   - Access a property safely when the path exists.
     Answer: user?.profile?.name;

   - Try accessing a deeply nested property that doesn’t exist (without throwing error).
     Answer: user?.profile?.name?.firstname;

4. **Object Freeze/Seal**

   ```js
   const car = { brand: "Tesla", model: "X" };
   ```

   - Create an object and seal it. Try adding and modifying properties.
     Code:
     Object.seal(car);
     car.brand = 'BMW';
     car.year = '2025';

   - Freeze the object and try modifying properties.
     Code:
     Object.frize(car);
     car.brand = 'Ducati';
     car.model = '524';

---

## 🟡 Medium Level

1. **Array Functions**

   ```js
   const nums = [1, 2, 3, 4, 5];
   ```

   - Given an array of numbers, use `map`, `filter`, and `reduce` in a chain to:
     - Multiply each number by 2.
     - Keep only numbers >= 6.
     - Return the sum of the resulting numbers.
       Code:
       nums.map(i => i\*2).filter(i => i>=6).reduce((acc, val) => acc+val);

2. **Custom Reduce → Object**

   - Convert an array of students (e.g., `["Alice", "Bob", "Charlie"]`) into an object where indices are keys.
     Code:
     const obj = arr.reduce((acc, val, ind) => {
     acc[ind] = val
     return acc, {}});

3. **Find Unique Values**

   ```js
   const arr = [1, 2, 2, 3, 4, 4, 5];
   ```

   - Given an array with duplicates, return an array of unique values.
   - Solve once with `filter`.
     Code:
     let pastValue = null;
     arr.sort();
     arr.filter((element, index) => {
     if(pastValue !== element) {
     pastValue = element;
     return element;
     }
     })

   - Solve again with `reduce`.
     Code:
     arr.sort();
     arr.reduce((acc, value) => {
     if (!acc.include(value)) {
     acc.push(value);
     }
     }, [])

4. **Dynamic Object Keys**

   ```js
   function addKeyValue(obj, key, value) {
     // code here
     obj.key = value;
   }

   const person = { name: "Pablo" };
   console.log(addKeyValue(person, "age", 25));
   ```

   - Write a function to add a key-value pair to an object.
     code: obj[key] = value;
   - Test the behavior when the object is sealed.
   - Test the behavior when the object is frozen.

---

shalow copy deep copy
destructuring array, object
prototypes
create self map function
