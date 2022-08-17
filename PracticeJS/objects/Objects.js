
//
let arr = ['kiwi','banana', 'apple']

//object literal

let cat = {
    name: 'Mr. Bean', // the comma here is important and expected
    fur: 'grey, black, and white',
    legs: 4

}

//access a propery of an object by using dot notation

// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)

// we can also access properties using brackets
//remember that properties (also known as 'keys') are strings and should be unique. 
//if you name a property over and over bc javascript reads top to bottom
//it will only take the final key-value pair

console.log(cat['name'])
console.log (cat['fur'])
console.log(cat['legs'])
// Creating Properties
// to add a property you can also use dot notation
// meaning you can tell the computer to access a property 
// that doesn't yet exist

cat.breed = 'calico'
cat.temperament = 'mild'
//change property temeprment 
cat.temperament = 'angry'
console.log(cat)

//METHOD is basically just any funtion that is passed into an object

cat.meow = function(){
    console.log('meow')
}

//extra things
//for of is for arrays
for (let item of arr){

}

// for..in loop is for objects
for (let key in cat){
    // key represents...fur, name, legs, age, meow
    console.log('key: ', key)
    // key is a string value
    console.log('value: ', cat[key]) // gives us the value
}


//Practicing with Objects
let dog = {
    name: 'buddy',
    age: 2,
    breed: 'golden retriever',
    behavior: ['wags tail', 'tongue hangs out','drools', 'chases tail'],
    sounds: function(){
        console.log (['bark', 'growl', 'whine'])
    food: ['bones', 'dry', 'wet']
    play: function (){
        
    },
}}

dog.
dog.barf = if (dog['food'])

let sandwich = {
    bread: ['pumpernickel', 'wheat','brioche'],
    sauce: ['aioli', 'hummus', 'avocado mash'],
    veg: ['cucumber', 'tomato', 'kale'],
    herb: 'basil',
    protein: ['friedEgg', 'boiledEgg', 'turkey']
}

