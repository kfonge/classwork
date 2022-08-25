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
// no, arrays are not typically/always ordered--that would be a sorted array. However each element is indexed so the original order can be changed
// 3. What real-life thing could you model with an array?
// A grocery list, a list of things in your purse. 
// Any sort of list or collection of items really

// B. Easy Does It

// let quotes = ["Nevertheless she persisted", "Roe v. Wade has been overturned", "Stand up. Fight back!"]

// C. Accessing Elements

// const randomThings = [1, 10, "Hello", true]

// 1. How do you access first element of this array?

// console.log(randomThings[0])

// 2. Change the value of "Hello" to "World"

// randomThings = [1, 10, 'Hello', true]

// randomThings[2] = "World"

// 3. Check the value of array.

// console.log(randomThings)



// D. Change Values
// Given the following array: 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1. Access 3rd element 

// console.log(ourClass[2])

// 2. Change "Github" to "Octocat"

// ourClass[4] = "Octocat"
// console.log(ourClass[4])

// 3. Add a new element "Cloud City"

// ourClass.push("Cloud City");
// console.log (ourClass);

// E. Mix It Up

// given the array:
 myArray = [5, 10, 500, 20]
// 1. Add the string 'Aegon' to end. Add another sting of choice

 myArray.push('Aegon', 'Afternoon');
// console.log(myArray);

// 2. Remove 5 from beginning of array
 myArray.shift();
// console.log(myArray);

// 3. add "Bob Marley" to beginnging of array

// myArray.unshift("Bob Marley");
// console.log(myArray)

//  4. Remove string of choice from end

// myArray.pop();
// console.log(myArray);

// 5.  Reverse this array using a array.prototype.reverse()
// myArray.reverse();

//yes the array was mutated. Mutation of an array or element means that the original structure is no longer the same.

// F. Biggie Smalls

// let num = 50;
// if (num < 100){
//     console.log('little number');
// } else {
//     console.log('big number');
// }

// G. Monkey in the Middle
// let num1 = 11

// if(num1 < 5){
//     console.log('little')
// } else if(num1 > 10) {
//     console.log('big number')
// } else {
//     console.log('monkey')
// }

// H. Whats in Your Closet

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// 1. 
// console.log('Kristyn is rocking that ' + kristynsCloset[2]+ ' today!')
// 2.
// kristynsCloset.splice(6,0, 'raybans'); 
// console.log(kristynsCloset)
// 3. 
// kristynsCloset.splice(5,1,'stained knit hat');
// console.log(kristynsCloset)
// Thom's closet is more complicated. Check out this nested data structure!!
//    const thomsCloset = [
//      [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
// ]
// 4. outfit for Thom, starting with first element in shirts 

// console.log(thomsCloset[0][0])

// 5. access a pair of pants
// console.log(thomsCloset[1][1])

// 6. access an accessory for Thom
// console.log(thomsCloset[2][1])

// 7. 
// console.log('Thom is ready for the fall weather, wearing his ' + thomsCloset[0][0] + ',' + thomsCloset[1][1] + ', and a ' + thomsCloset[2][1]'.')

// 8. Modify pjs to footie pajamas

// thomsCloset[1].splice(2, 1, "Footie Pajamas")
// console.log(thomsCloset);

// IV. Functions

// A. (skip)
// B. printCool

// let printCool = (name) => console.log(name, 'is cool!');
// printCool('Rhi')

// C. Calculate Cube
//
// let cube = (sideLength) => console.log(sideLength*sideLength*sideLength)
// altCube = (sideLength) => console.log(Math.pow(sideLength, 3))
// cube(2);
// altCube(3);

// D. isVowel

// let result;
// let isVowel = ('char') => { 
//     result = ('char' == "a"|| char == "A"|| char == 'e'|| char == "E" || char == "i"|| char == "I"|| char == "o" || char == "O" || char =="u"|| char == 'U');
//     if ('char'.length > 1){
//         console.log('Invalid - this function only takes single characters as input')   
//     } else {
//             return result;
//         }
//     }
//     console.log(isVowel('a'))
//     console.log(isVowel('apple'))
//     console.log(isVowel('A'))
//     console.log(isVowel('Z'))

//more direct solution using .toLowerCase
//let result = letter.toLowerCase() == "a"  letter == "e"  letter =="i"  letter =="o"  letter =="u";
//return result;


// E. getTwoLengths
//why doesnt this work with '' around the parameters; how do you set default data types for string1 and 2 as strings?
    let getTwoLengths = (string1, string2) =>{
        let array = []
        array.push(string1.length , string2.length)
        console.log(array)
    }
     getTwoLengths('cat', 'animal');

// F. getMultipleLengths

const getMultipleLengths = (paramArray) => {
paramArray = ['string1','string2','string3']
let resultArray = []
for(let i = 0; i < paramArray.length; i++){

}
paramArray.push(array)
}