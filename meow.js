const person = {
    name: "Dipak",         // property 1
    age: 26,               // property 2
    country: "Nepal"       // property 3
};
const { name, age, country } = person;   // extract name and age
console.log(name);              // prints: Dipak
console.log(age);
console.log(country);               // prints: 26