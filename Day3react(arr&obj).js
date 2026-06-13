// 1.Create an array colors with 5 color names and log the third element.
let colorArr = ["red","magenta",'pink','yellow','gray']
console.log(colorArr[2])

// 2.Create an object book with properties title, author, pages, and publishedYear.
const book = {
    title:"Harry potter",
    author:"Kushal the great",
    pages: 6767,
    publishYear: 1667,
}
console.log(book)

// 3.Add a new property isRead: true to an existing book object immutably (return new object).
const newBook = {...book, isRead: 'true'}
console.log(newBook)

// 4.Create an array of 3 objects, each representing a student with name and grade.
const stuArr = [{name: "kitty",grade:6},{name: "hahaha",grade:7},{name: "Noob",grade:8}]
console.log(stuArr)


// 5.Create a nested object company with properties name, location, and employees (an array of names).
const companyObj = {
    name:"OceanX",
    location:"Mars",
    employe : ["Trump","melon"]
}
console.log(companyObj)

// 6.From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
const numArr = [10, 20, 30]
const newNum = [...numArr]
const res=newNum.map((ele)=>{
    return ele+5
})
console.log(res)

// 7.Create an object car and add a new property color immutably.
const car = {
    name:"Meownster"
}
const newCar = {...car, color : "purple"}
console.log(newCar)


// 8.Create an array shoppingList and add a new item at the beginning immutably.
const shopArr = ["Ramen","onigiri"]
const newShop = ["Gimbap",...shopArr]
console.log(newShop)

// 9.Create an object profile with nested address object containing city and country.
const profile ={
    address:{
        city: "osaka",
        country: "Kathmandu"
    }
}
console.log(profile)

// 10.From an array of objects products, create a new array with only name and price properties.
const proArr = [{name:"Ramen",price:6767},{name:"Egg",price:67}]
const proName = proArr.map((ele,ind)=>{
    return ele.name
})
console.log(proName)
const proPrice = proArr.map((ele,ind)=>{
    return ele.price
})
console.log(proPrice)
