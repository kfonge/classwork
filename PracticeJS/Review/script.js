//Day 3 of Review - Coding Along with Jade

//array methods take a callback fuction as an argument
//callbacks are functions that will run at a later time

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const panagram = ['the', 'quick', 'brown', 'fox', 'jumps']

//filter
nums.filter(num =>)
// forEach

// every method - you can either use the return by logging it to cosole or store it as a variable
// if every element 
//nums.every(callback)// --> returns either true or false

// function myCallback(element){
//     if (element >= 0) {
//         return true
//     }   else {
//         return false
//     }
//     // return elements >= 0
// }

// a version with less syntax...
let test2 = panagram.every((element) => element.length < 8)

//MDN Docs example of callback
const isBelowThreshold = (currentValue) => current value < 40 {
    return currentValue
}

//same thing as...
function isBelowThreshold(currentValue){
    return currentValue < 40
}

// Javascript Review Lab (doc 1)

// Part A
/*

1. How do we assign a value to a variable
A: with an assignment operator =
    variable = value
    e.g. let numX = 3;

2.  How do we change the value of a variable 
A:  with a new assignment statment, 
    reassigning a new value to the variable with =

3.  How assign an existing variable to another variable
A:  again with an assignment operator
e.g.    let x = 0 
        let y = x

4.  declare: to say that an element exists
    assign: to give that element a value 
    define: a variable is defined if its been declared and assigned a value 
            a function is defined using the function key word, a name, parameters, and 
            a body of code to execute.

5.  pseudo coding: to explain in plain english the steps, 
    logic, or algorithm you will use to solve a problem 
    or create a program. We do this to break our coding 
    process into digestible steps and organize our thought 
    it gives reason to each line of code, making it more efficient, 
    trackable, readable etc.

6.  More time should be spent thinking/planning. less time coding. is it 50/50 or 60/40     
    */
   
// //Part B - Strings
// let firstVariable = 'Hello World';
//     firstVariable = 3;

// let secondVariable = firstVariable;
//     secondVariable = 'Goodbye World'
// console.log(firstVariable) // The value of firstVariable is 3

// let yourName = 'Kolenge';
// console.log('Hello, my name is '+ yourName)

// Part C - Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true || false);
// console.log(false || false || false || false || false || true );
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(48 == '48');

// Part D - The farm

// let animal = 'dog'
// if (animal == 'cow'){
//     console.log('mooooooo');
// }
// else {
//     console.log("Hey, you're not a cow.")
// }

// E - Driver's Ed

// let age = 25
// if (age >= 16){
//     console.log('Here are the keys!') 
//     } 
//     else if (age < 16) {
//         console.log("Sorry you're too young.")
// }

//II.A - Loops - The basics

// write a loop that will print out all numbers 0 to10 inclusive
// for (let i = 0; i <= 10; i++ ){
//     console.log(i);
// }

// write a loop that will print out all numbers 10 to 400 inclusive
// for (let i = 10; i <= 400; i++){
//     console.log(i);
// }

// write a loop that will print out every 3rd number 
// starting with 12 no higher than 4000

// for( let i = 12; i <= 4000; i += 3){
//     console.log(i);
// }

// II.B Get even

// for( let i = 1; i <= 100; i++){
    
//     if (i%2 == 0){
//         console.log (i + ' <-- is an even number' )
//     }
//     else{
//         console.log(i);
//     }
// }

// II C. High Five
// for( let i = 0; i <= 100; i++){
    
//      if (i%5 == 0 && i%3 != 0){
//          console.log ('I found a ' + i + " High five!" )
//     }

//     else if (i%3 == 0 && i%5) {
//         console.log('I found a', i ,'Three is a crowd');
//     }
//      else if (i%3 == 0 && i%5 == 0 ){
//          console.log ('I found a ' + i + ' High five - Three is a crowd')
//      }
// }

// II D. Savings Account
// 1.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); 

// console.log(sum);

//2.
// let bankAcct = 0;

// for(let i = 1; i <= 100; i++){
//      bankAcct += 2*i;
// }

// console.log (bankAcct)

// III Arrays & Control flow

// A. Talk About it
// 1. What are the things in an array called?
// items
// 2. Do arrays guarantee those things will be in order?
// no, arrays are not typically/always ordered.
// 3. What real-life thing could you model with an array?
// A grocery list, a list of things in your purse. 
// Any sort of list or collection of items really

// B. Easy Does It

// let quotes = ["Nevertheless she persisted", "Roe v. Wade has been overturned", "Stand up. Fight back!"]

// C. Accessing Elements

// const randomThings = [1, 10, "Hello", true]

// 1. How do you access first element of this array?

// console.log(randomThings[1])

// 2. Change the value of "Hello" to "World"

// 
