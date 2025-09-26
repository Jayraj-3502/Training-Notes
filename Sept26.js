// let arr = [];
// console.log(typeof arr);

// let str = "Javascript";
// String.prototype.reverse = (inputStr) => {
//   const resultStr = inputStr.split("").reverse().join("");
//   //   console.log(resultStr);
//   return resultStr;
// };

// console.log(str.reverse(str)); // result will be reverse string;

// console.log("  hello world  ".trim().toUpperCase().slice(0, 5));

// let str = "Javascript";
// String.prototype.reverse = function () {
//   const resultStr = this.split("").reverse().join("");
//   //   console.log(resultStr);
//   return resultStr;
// };

// console.log(str.reverse()); // result will be reverse string;

// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.speak = function () {
//   console.log(this.type + " makes a sound");
// };

// const dog = new Animal("Dog");

// Animal.prototype.eat = function () {
//   console.log(this.type, "makes a eating");
// };

// dog.speak();
// dog.eat();

// const person = {
//   name: "Amit",
//   greet: function () {
//     let obj = {
//       name: "asf",
//     };
//     console.log("Hello " + this.name);
//   },
// };

// const greetFn = person.greet;
// greetFn.bind(person)();

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   getDetails = function () {
//     return `${this.title} by ${this.author}`;
//   };
// }

// const obj1 = new Book("One Piece", "ODA");
// const obj2 = new Book("Death Note", "Light Yagami");

// console.log(obj1.getDetails());
// console.log(obj2.getDetails());

// let arr = [1, 2, 3, 4];
// let newarr = arr
//   .map((i) => i * 3)
//   .filter((i) => i % 2 == 0)
//   .reduce((acc, i) => acc + i);
// console.log(newarr);

// Using Object Literal
// let objLiteral = {
//   brand: "HP",
//   ram: {
//     normal: 16,
//     backup: 8,
//   },
//   ssd: "1TB",
//   displaySpecification: function () {
//     console.log(
//       `Brand name: ${this.brand}, Ram: ${this.ram}, SSD: ${this.ssd}`
//     );
//   },
// };
// objLiteral.displaySpecification();

// // Using new keyword
// let objNew = new Object(objLiteral);
// objNew.displaySpecification();

// // Using object constructor
// function ObjConstructor(ram, ssd) {
//   this.brand = "HP";
//   this.ram = ram;
//   this.ssd = ssd;
//   this.displaySpecification = function () {
//     console.log(
//       `Brand name: ${this.brand}, Ram: ${this.ram}, SSD: ${this.ssd}`
//     );
//   };
// }

// let objConstructor = new ObjConstructor(8, 512);
// objConstructor.displaySpecification();

// // Using class
// class ObjClass {
//   constructor(ram, ssd) {
//     this.brand = "HP";
//     this.ram = ram;
//     this.ssd = ssd;
//   }

//   displaySpecification = function () {
//     console.log(
//       `Brand name: ${this.brand}, Ram: ${this.ram}, SSD: ${this.ssd}`
//     );
//   };
// }

// let instanceObject = new ObjClass(4, 128);
// instanceObject.displaySpecification();

// // Using Object.create() Method
// let objCreateMethod = Object.create(objLiteral);
// objCreateMethod.displaySpecification();

// objCreateMethod.ram.normal = 56;
// objCreateMethod.brand = "Lenevo";

// // objNew.ram.normal = 78;
// objNew.brand = "Asus";

// console.log(objLiteral.ram.normal);
// console.log(objNew.ram.normal);
// console.log(objCreateMethod.ram.normal);

// console.log(objLiteral.brand);
// console.log(objNew.brand);
// console.log(objCreateMethod.brand);
