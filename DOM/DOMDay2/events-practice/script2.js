// alert('test') this tests that your js doc is connected properly
//first select the element we want and store it in a variable (btn) 
const btn = document.querySelector("button") 

//after selcting, it now has a bunch of events we can access 
//we cna choose attach an event listener to the element
btn.addEventListener('click', function(evt){
    console.log(evt)    // notice btn and evt.target and this keyword are have the same properties bc btn is the evt target--causes the event to happen
    // console.log(this) //same 

    //pass addEventListener two arguments -- 1) the type of event, 2) callback function that takes the event object as argument
    // evt is a special parameter representing the event object
    // the event objet has all info you'll need about the event that occured
    // and the element that caused it
    // Note: user must cause the event to happen by clicking

    // create a brand new li tag in memory and store it
    // variable called li, line 20
    
const li = document.createElement('li')//this creates an element in memory. if you wante dto make a table put 'table'. You'll then need to move that from memory to the dom

console.log(li)

// next we select the input element and store it in another constant called input
const input = document.querySelector('input')
console.dir(input) // allows you to access as object in browser dev tools

console.log(input.value)
//we target the textContent from li and assign in the value of our input
li.textContent = input.vaue
// const ul = document.querySelector('ul')
// ul.appendChile(li)

//we first select the ul tag and we add (append)
// the new li tag, which has our new comment text, to the selected ul

input.value = ""
}); 

// select the ul tag
const ul = document.querySelector("ul")

// add an event listener to our selected ul
ul.addEventListener("click", handleClick)

function handleClick(event) {
    console.log('clicked on ul...')
    console.log(event)
    console.log(event.target)
}

ul.removeEventListener("click", handleClick)

if (event.target.tagname === "UL"){
    event.target.style.backgroundColor =  "red"
}
