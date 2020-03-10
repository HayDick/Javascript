//////////////
//Variables//
////////////

//Numbers

let num1 = 10;

num1++; //increment
num1--; //decrement

console.log(num1 % 6); //6 modulus 10 - 6 goes 1 time into 10

num1 += 10; //Increment by 10,20...
num1 += 10;
console.log(num1);

//////////////
//Functions//
////////////

function greetings() {
  let name = prompt("wht is ur name?");
  let result = "Hello " + name;
  console.log(result);
}

greetings();

//////////////
//Arguments//
////////////

function sumNumbers(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

sumNumbers(10, 5);

function greetingsArgument(yourName) {
  let result = "Hello " + yourName;
  console.log(result);
}

let name = prompt("wht is ur name?");

greetingsArgument(name);

//////////
//Loops//
////////

//While loops

let number = 0;

while (number < 10) {
  number += 1;
  console.log(number);
}

//For loops

for (let num = 0; num <= 10; num++) {
  console.log(num);
}

///////////////
//Data types//
/////////////
let yourage = 18; //number
let yourName = "Bob"; //string
let myName = { first: "Jane", last: "Doe" }; //Object
let truth = true; //boolean
let groceries = ["apple", "bannana", "oranges"]; //array
let random; //undefined
let nothing = null; //null

//strings
let fruits = "banaapple";

console.log(fruits.length);
console.log(fruits.indexOf("ple")); //start from 0 -1 if doesn't exist
console.log(fruits.slice(2, 6)); //strat  including, end - up to
console.log(fruits.replace("ban", "BN123"));
console.log(fruits.toUpperCase(fruits));
console.log(fruits.toLowerCase(fruits));
console.log(fruits.charAt(2)); //start from 0
console.log(fruits.toLowerCase([2]));

let splitedFruit = "banana";
console.log(splitedFruit.split(""));
let moreFruits = "banana,apple,oranges";
console.log(moreFruits.split(","));

///////////
//Arrays//
/////////

let myFruitsArray1 = ["banana", "apples", "oranges"];
let myFruitsArray2 = new Array("banana", "apples", "oranges");

console.log(myFruitsArray1[1]);

myFruitsArray2[1] = "Pear"; //New fruit value
console.log(myFruitsArray2[1]);

for (let i = 0; i < myFruitsArray2.length; i++) {
  console.log(myFruitsArray2[1]);
}

//Common array methods
console.log("to string", myFruitsArray2.toString());
console.log(myFruitsArray2.join(" | "));
console.log(myFruitsArray2.pop(), myFruitsArray2); //pop last item out of array
console.log(myFruitsArray2.push("blackberies"), myFruitsArray2); //append to array

myFruitsArray2[3] = "New fruit"; //append new item
console.log(myFruitsArray2);

myFruitsArray2[myFruitsArray2.length] = "New fruit again"; //append new item
console.log(myFruitsArray2);

myFruitsArray2.shift(); //remove first item
console.log(myFruitsArray2);
myFruitsArray2.unshift(); //add first element
console.log(myFruitsArray2);

let vegetablesArray = ["asparagus", "tomato", "brocoli"];
let allFood = myFruitsArray2.concat(vegetablesArray); //join 2 arrays together
console.log(allFood);

let myArray2 = ["lera", "hay", "ariel", "ira", "natasha"]; // from 1 to 4 - not including
console.log(myArray2.slice(1, 4));
console.log(allFood.reverse());

let numbersArray = [5, 12, 7, 300, 234, 88, 6980];
//sort ascending
console.log(myArray2.sort());

console.log(
  numbersArray.sort(function(a, b) {
    return a - b;
  })
);
//sort descending
console.log(
  numbersArray.sort(function(a, b) {
    return b - a;
  })
);

let emptyArray = new Array();
for (let x = 0; x <= 12; x++) {
  emptyArray.push(x);
}
console.log(emptyArray);

////////////
//Objects//
//////////

let students = { first: "Hay", last: "Dick" };
console.log(students.first);
console.log(students["first"]);

let hay = {
  first: "Hay",
  last: "Dick",
  age: 30,
  height: 180,
  hayInfo: function() {
    return this.first + "\n" + this.last;
  }
};

console.log(hay.age);
hay.first = "notHay"; // change property value
console.log(hay.first);

hay.age++;
console.log(hay.age);
console.log(hay.hayInfo()); // access object method

/////////////////
//conditionals//
///////////////

var age = prompt("what is your age ?");

if (age >= 18 && age <= 35) {
  status = "Age is good";
  console.log(status);
} else {
  status = "Age is bad";
  console.log(status);
}

//switch statements

//diffrence between weekday and weekend//

switch (6) {
  case 0: //sunday
    text = "weekday";
    break;
  case 2:
    text = "weekday";
  case 6: //friday
    text = "weekend";
    break;
  default:
    text = "weekday";
}
console.log(text);

//1:35:46
