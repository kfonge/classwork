// // hero.moveRight()
// //functionsoften hae a lot of logic in them so you dont want to change a lot within it...?



// //function declaration / definition

// function sayHello()
// {
//     return 'Hello!'
// }

// //function expressions cannot be called before they are defined
// // const is used most frequently for funcions b/c nonmutable
// //note: everything "hoisted" is pushed to thetop of the code
// const sayHi = function()
// {
//     return 'Hi!'

// }

// //arrow function
// // doesnt include function key word and places arrow after list of inputs

// const sayHey = () => 'Hey!'

// //sayHello() // 'Hello!'

// console.log(sayHello())
// console.log(sayHi())
// console.log(sayHey())

// function add (num1, num2, num3 = 0, num4 = 0)
// {
//     // num1  2
//     // num2  3
//     return num1 + num2 + num3 + num4
// }

// console.log(add(2,3))
// console.log(add(1,9))
// console.log(add(3,8))
// console.log(add(9,7))

function computeArea (width, height)
{
    let area = width * height; 
        return "The area of a rectangle with width" +width+ "and height" +height+ "is" ${area} "square units"

       
}
console.log(computeArea(3,4))

 const computeArea = (width, height) => "The are of a rectangle with a width of" +width+ "and a height of" +height+ "is" +width*height+ "square units"