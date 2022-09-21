//when you run node script, it returns 10 random numbers btw 0 and 100
// const random = require('./random')

// for (i = 0; i < 10; i++){
//     console.log(random.random(0,100))
// }

const circles = require('./circles')

console.log(circles.circ(50))
console.log(circles.area(75))


// const fs = require('fs')

// console.log('message 1')

// fs.writeFile('./hello.txt', 'Hello!', () => {
//     consle.log('Successfully created file!')
// })
//days-of-week.js

//NOTE: exports starts off as an empty object 
// module.exports.school = 'PerScholas';

// let daysOfWeek = require('./days-of-week');

// console.log(daysOfWeek);

// let array = ['Su', 'Mo','Tu','We','Th','Fri','Sa']
//module.exports.weekdays = array


//shorthand
// module.exports = {
//     school,
//     weekdays,
//     getWeekday
// }

// //same as
// module.exports = {
//     school: school,
//     weekdays: weekdays,
//     getWeekday: getWeekday,
// }



