// QN 1
const person = {
    first_name:"Kushal",
    Last_name:"Bhurtel",


};
const{first_name, Last_name}=person;
console.log (`Hi,My name is ${first_name},${Last_name}`);
// QN 2 *let
{
    let message = "hello hello";
    console.log (message);

}
console.log (message);

// const
{const result = "My name is Askeladd";
    console.log(result);

}
console.log (result);
// QN 3 
const greet = (name)=>{
    return "hello","+name+","!";

};
console.log(greet ("kushal"));
// QN 4
const multiply= (a,b)=>{
    return a*b;
};
console.log (multiply(5,6));
// QN 5
const person ={
    name="kushal",
    age:26,
    country:"Nepal"
};
const{name,age,country}=person;
console.log(name);
console.log(age);
console.log(country);
// QN 6 
consolenumbers=[1,2,3,4,5];
const [first,second]=numbers;
console.log(first);
console.log(second);
// QN 7
function sayhello (name="guest"){
    console.log("hello, "+ name);

}sayhello("kushal");
sayhello();
// QN 8
const sumall=(...numbers)=>{
    return numbers.reduce((total,n)=>total+n, 0);
};
console.log(sumall(1,2,3))
// QN 9 
const arr1=[1,2,3,];
const arr2=[4,5];
const merged = [...arr1,...arr2];
console.log(merged);
//QN 10
const objA={ a:1, b:2};
const objB={c:3, d:4};
const merged = {...objA,...objB};
console.log(a);
console.log(d);
