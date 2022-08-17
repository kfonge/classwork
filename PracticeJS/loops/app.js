// for(let index = 0; index < 10; index++){

//     console.log(index)
// }

// inside for loop parenthesis we have three statements

//statement 1:
//declare and initialized a variable
//scoped to for loop

//statement 2:
//condition that when true runs code
//in for loop

//statement 3:
//incrementing of the var in 
//order to eventually break loop

// for(let index = 0; index < 2; index++){

//     console.log(index)
// }

// FOR LOOP ALGORITHM/PSEUDOCODE
// 1: declare and initialize variable
// 2: check if condition is true
// 3: if true, console log runs and prints 0
// 4: variable i incremnts form 0 to 1
// 5: check if condition is true
// 6: if true, console log runs and prints 1
// 7: i increments from 1 to 2
// 8: check if condition is true (its not)
// 9: exit loop, continue with rest of code

// break
// continue
// these are keywords you can use to either 
// stop and jump out of the loop (break)
// or to skip part of the loop (continue)


//Exercise 1: 
//create for loop counting dwn 10 to 1

// for(let index = 10; index > 0; index--){

//          console.log(index)
//      }

//Exercise 2: odd numbers followed by even numbers less than 11

// for(let index = 1; index < 11; index+=2){

//         console.log(index)
//     }
    
//     for(let index = 2; index < 11; index+=2){

//         console.log(index)
//     }
    
//Exercise 3:

// for(let index = 6; index < 63; index+=3){

//         console.log(index)
//     }
    
//Exercise 4:
//incrmental hash tags 1 to 7

// for(let index = 1; index < 9; index++){

//     console.log("#".repeat(index))
//     if(index === 7){
//         break;
// }}

//solution without using repeat method

// let str = " "
// for(let i=1; i<8; i++)
// {
//     console.log(str += "#")
// }


//Brandon's cool solution for exercise 2
// for (let k=0 k<20, k++){
//     if (k<10 && k%2!=0){
//         console.log(k)
    
// }


// PM Exercise 5 ask brandon

// for (x=0; x<=10; x)

// ex 6 ask jeonghyn

// for (let i=1; i<=20; i++)
// {
// if (i == 1|| i ==3)

// else if(i==2)

// else{}
// }

// While Loops Lesson
// while only takes one statement, the conditional
// incrementation happens inside the scoped code 
// and the initializing of variable takes place 
// before you begin the loop--above

// while loop exercises
// EXERCISE 1 
// let i = 0 ;
// while (i <35 && i % 3 == 0)
// {
//     console.log(i+=3) //NOTE!! its not so helpful to increment and print in the same line p
//     if (i >= 33){ 
//         break;    
// }}

// ALT EX 1: More direct solution without needing the break BELOW:

// let index = 0;
// while (index < 35){
//     console.log(index)
//     index += 3; 
// }

// EXERCISE 2: keep printing int in multiples of 5 while int <100
// let i = -25 ;
// while (i <100 )
// {
//     console.log(i)
//     i += 5;

// }

// EXERCISE 3:

// let index = 0;
// while (index <= 20){
//     if(index % 2 == 0){
//         console.log(index*3);
//     }
//     index++;
// }

//EXERCISE 4:


// let i = 1;

// while (i < 20) {
//     if (i % 2 != 0 && i % 3 != 0) {
//         console.log(i);
//     }
//     i++;
// }

//Bonus exercise: Stephen Sami Chris

let num = 10
let coins = 0
while (num5 > 4){
    console.log(coins += 4)
    num--
}
console.log('final', coins)

//Bonus alt breaking into coins fr Sami


//Ex 7 - chris

let num = 10
while (num<=100)
    console.log(num)
    num +=20
    if (num ==90)