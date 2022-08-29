// STRINGS
// the for loop below uses method chaining
let firstName = "Bobby. Went. To. The. Mall"

for (let i = 0; i < firstName.length; i++)
    {console.log(firstName.charAt(i).toUpperCase())
    }


//ARRAYS
//         0   1   2
let arr = [3, 10, 15]

let fruit = ['apple', 'pear', 'banana', 'kiwi']
fruit.splice(1, 3)     // this removes from 1 index to 3 index
// console.log(fruit)
// firstName.split('.') string method
//

let foods = ['tacos', 'noodles', 'salad', 'arepa']

// for loops

// for (let i=0; ; i++)


//for of

//for Each (built-in array method)
foods.forEach(function(foodItem, index, arr) {
    console.log(foodItem)
})

//anonymous function
// () =>
// function() { }
//   callback funcitons are functions passed as an argument that will run at a later time)
const myForEachFunction = function (){

}

let newFoodsArray = foods.filter(item, idx) => {
    // if you return true
    // keep the item
    // if you return false
    // discard it
    if (item[0] === 'k'){
        return true
    } else {
        return false
    }
}

// map method - used when you want to change something for each item in an array