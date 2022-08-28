////////// Easy Going
////////////////////////

// for (let i = 0; i <= 20; i++){
//     console.log(i);
// }

////////// Get Even///////
///////////////////////////
// for (let i = 0; i <= 200; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

///////////////////
/////Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz")
  } else {
    if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz")
    } else {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
      } else {
        console.log(i)
      }
    }
  }
}
///////Wild Wild Life
////////////////////// (name, species, age, hometown)

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

//1.
plantee[2] = 5001
console.log(plantee)

//2.
wolfy[3] = "Gotham City"
console.log(wolfy)

//3.
dart.push("Hawkins")
console.log(dart)

//4.
wolfy.splice(0, 1, "Gameboy")
console.log(wolfy)

//////Yell at the Ninja Turtles
///////////

const turtlesArray = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (const element of turtlesArray) {
  console.log(element.toUpperCase())
}

console.log(turtlesArray)

////////////Methods, Revisited
//////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
]

//1.

favMovies.sort()
console.log(favMovies)
// the .sort method put the elements in order alphabetically by the first character of each element

//2.
favMovies.pop()
console.log(favMovies)
//expected output - The Ring removed from array (after sorting, the ring was the last element)


//3. 
favMovies.push('Gardians of the Galaxy')
console.log(favMovies)

//4.
favMovies.reverse()
console.log(favMovies.reverse)

/////////// Where is Waldo
///////////

//////////////
///////Excited Kitten
/////////

//////////////////////
//////Find the Median
/////////////////////////////////
