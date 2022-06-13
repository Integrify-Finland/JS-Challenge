// Function
// Write a function named greet and console.log(something)

const name = () => {
  console.log("something");
};

// Write a function named greet, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)

const greet = (name) => {
  console.log("Hi " + name);
};

// 3. Write a function to calculate the sum of  two numbers (there would be 2 parameter in the function)

const sum = (a, b) => {
  return a + b;
};

// 4. Write a function to double value of number

const double = (a) => {
  return a * 2;
};

// filter()
let input = [1, -4, 12, 0, -3, 29, -150];

// Return a new array contains number bigger than 0
const newFilteredArrayBiggerThanTen = input.filter(num => num > 0);

// Return a new array contains number less than 10
const newFilteredArrayLessThanTen = input.filter(num => num < 10);

// forEach()
let numbers = [1, 2, 3, 4, 5];

// Using forEach to console.log the element in the array
const forEachelement = numbers.forEach(number => console.log(number));

// Using forEach to console.log the element with its index in the array
const forEachIndex = numbers.forEach((number, index) =>
  console.log("Index: " + index + " number: " + number)
);

// map()
let number = [25, 45, 55, 77, 88, 99];

// Using map() to square each number in the array
const squareOfEachNumber = number.map((element) =>
  console.log(Math.pow(element, 2))
);

// Using map() to return a new array the sum  element
const sumOfElement = 0;
const newArray = number.map((x) => (sumOfElement += x));

//   Using map() to return a new array that the first letter in the word would be uppercase
const strings = ["avengers", "captain america", "ironman", "black panther"];
const newStrings = strings.map(
  (name) => name[0].toLocaleUpperCase() + name.slice(1)
);
console.log(newStrings)

let arrayOfNumbers = [25, 45, 55, 77, 88, 99];
// Using filter() to return new array that contains even number
const newEvenArray = arrayOfNumbers.filter((x) => x % 2 === 0);
console.log(newEvenArray)

// Using filter() to return new array that contains odd number
const newOddArray = arrayOfNumbers.filter((x) => x % 2 !== 0);
console.log(newOddArray)

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// 1. Get characters with mass greater than 100
const MassGreaterThanHundred = characters.filter(
  (character) => character >= 100
);


// 2.  Get characters with height less than 200
const HeightGreaterThanTwoHundred = characters.filter(
  (character) => character <= 200
);


// 3. Get all male characters
const MaleCharacters = characters.filter(male => male.gender === "male");
console.log(MaleCharacters)

// 4. Get all female characters
const FemaleCharacter = characters.filter(female => female.gender === "female")
console.log(FemaleCharacter)

// Array
let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];

// 1. Sort the array in alphabetically
vegetables.sort().join(" ")
console.log(vegetables)
// 2. What is the length of the array
const lengthOfTheArray = vegetables.length;
console.log(lengthOfTheArray)

// 3. Write a function called myVeggieList to console.log() the length of the array
const myVeggieList = () => console.log(vegetables.length);
myVeggieList()

// 4. Push one more item to the array called "onion"
vegetables.push("onion");
console.log(vegetables)

// 5. Write a function using if-else condition to check if the length of the array bigger than 4.
const checkTheLength = () => {
  if (vegetables.length >= 4) {
    console.log("it is bigger than 4");
  }
};
checkTheLength()

// 6.  Using forEach or map to loop and console.log() the item in the array
const forEachMethod = vegetables.forEach((item) =>
  console.log("item: " + item)
);

// Object

const student = {
  name: "David Rayy",
  class: "math",
  age: 12,
};

console.log(student.name);
console.log(student.class);
console.log(student.age);
