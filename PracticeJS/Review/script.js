// Javascript Review Lab

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
   
//Part B - Strings
let firstVariable = 'Hello World';
    firstVariable = 3;

let secondVariable = firstVariable;
    secondVariable = 'Goodbye World'
console.log(firstVariable) // The value of firstVariable is 3

let yourName = 'Kolenge';
console.log('Hello, my name is '+ yourName)

// Part C - Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true );
console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

// Part D - The farm

let animal = 'dog'
if (animal == 'cow'){
    console.log('mooooooo');
}
else {
    console.log("Hey, you're not a cow.")
}




