// 1. Double all numbers
const numbers = [6,7,8,9,1];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 2. Filter even numbers
const nums = [3,4,5,6,7];
const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

// 3. Sum with reduce
const values = [12,67,69,76,56];
const sum = values.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 4. Find first adult
const users = [
  { name: "Kitty", age: 67 },
  { name: "hero", age: 56 },
  { name: "Harry", age: 35 }
];
const adult = users.find(user => user.age > 17);
console.log(adult);

// 5. forEach with index
const fruits = [" peach", "banana", "orange"];
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// 6. Extract names
const userList = [
  { name: "Tanaka", age: 15 },
  { name: "Naomi", age: 17 },
  { name: "shizuka", age: 19 }
];
const names = userList.map(user => user.name);
console.log(names);

// 7. Filter cheap products
const products = [
  { name: "Doll", price: 1200 },
  { name: "Badge", price: 25 },
  { name: "Bike", price: 75 },
  { name: "Tie", price: 300 }
];
const cheap = products.filter(p => p.price < 100);
console.log(cheap);

// 8. Find maximum with reduce
const arr = [45, 12, 67, 33, 89, 24];
const max = arr.reduce((acc, num) => num > acc ? num : acc, arr[0]);
console.log(max);

// 9. Adults names uppercase
const people = [
  { name: "Harry", age: 17 },
  { name: "Elon", age: 22 },
  { name: "meow", age: 19 },
  { name: "Miau", age: 16 }
];
const adultNames = people
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());
console.log(adultNames);

// 10. Build HTML list
const items = ["HTML", "CSS", "JavaScript", "React"];
let htmlList = "<ul>";
items.forEach(item => {
  htmlList += `<li>${item}</li>`;
});
htmlList += "</ul>";
console.log(htmlList);