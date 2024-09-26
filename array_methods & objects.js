//1st 
let colors = ["red", "blue"];
colors.push("green", "yellow");
console.log(colors); 

// 2nd

let fruits = ["apple", "banana", "orange", "grape", "pear"];
console.log(fruits.shift()); 
console.log(fruits); 
console.log(fruits.shift()); 
console.log(fruits); 

//3rd
let sports = ["football", "basketball"];
sports.unshift("tennis", "cricket", "volleyball");
console.log(sports); 

//4th
let devices = ["Phone", "Tablet", "Monitor"];
let index = devices.indexOf("Laptop");
console.log(index);

//5th
let technologies = "HTML-CSS-JavaScript";
let techArray = technologies.split("-");
console.log(techArray); 
//6th
let numbers = [1, 2, 3, 4];
let reversed = [];
while (numbers.length > 0) {
    reversed.push(numbers.pop());
}
console.log(reversed); 

//7th
let fruits2 = ["apple", "banana", "grape", "pear"];
let result = fruits2.join("");
console.log(result);

//8th
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car.model); 

//9th

let books = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
];
console.log(books[0].title); 


//10th


let cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" },
    { brand: "Toyota", model: "Corolla" },
    { brand: "Ford", model: "Mustang" }
];

cars.forEach((car, index) => {
    car.year = 2000 + index; 
});

console.log(cars);



//11th
let products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice); 

//12th
let students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" }
];

let studentsWithA = students.filter(student => student.grade === "A").map(student => student.name);
console.log(studentsWithA);




