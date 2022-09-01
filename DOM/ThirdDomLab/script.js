let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the document.addEventListener

  // Part 1

  let title = document.querySelector("#main-title")
  title.innerText = "DOM Toretto Homepage"
  // Part 2
  document.body.style.backgroundColor = "lightblue"
  // alternatively you could use querySelector and a variable here too
  // newBody = document.querySelector('body')
  // newBody.style.backgroundColor = ('blue')

  // Part 3
  // query selector with (#...) is the same as
  // let favThings = document.querySelector("#favorite-things")
  // favThings.removeChild(favThings.lastElementChild)

  let favThings = document.querySelectorAll("#favorite-things li")
  // line 38 will give you the last element in the array-like object
  favThings[favThings.length - 1].remove()

  // Part 4
  let all = document.querySelectorAll(".special-title")
  for (i = 0; i < all.length; i++) {
    all[1].style.fontSize = "2 rem"
  }

  // Part 5

  let pastRaces = document.querySelectorAll("#past-races li")
  pastRaces[3].remove()

  // Part 6

  //add new li element using createElement
  // let li = document.createElement("li")

  // //change text to new city name
  // let newCity = document.createTextNode('Pittsburgh')

  // //append to past races
  // li.appendChild(newCity)
  // document.querySelector('#past-races').appendChild(li)

  // alternate solution using textContent to replace lines 57 and 60,
  let li = document.createElement("li")
  li.textContent = "NewYork"
  document.querySelector("#past-races").appendChild(li)

  // Part 7
  //create the new elements first (<div class = blogpost>, <h2>, and <p>), then append them where they belong
  let blogPost = document.createElement("div")
  blogPost.classList.add("blog-post")
  let main = document.querySelector(".main")
  document.querySelector(".main").appendChild(blogPost)

  let h2 = document.createElement("h2")
  h2.textContent = "New York"
  blogPost.appendChild(h2)

  let paragraph = document.createElement("p")
  paragraph.textContent = "This is a paragraph"
  blogPost.appendChild(paragraph)

  // Part 8
  let quote = document.querySelector("#quote-title")
  quote.addEventListener("click", (e) => {
    randomQuote()
  })
  // Part 9

  let allPosts = document.querySelectorAll(".blog-post")
  
  for (i = 0; i < allPosts.length; i++){
    let post = allPosts[i]
    post.addEventListener("mouseout", (e) => {
      post.classList.toggle(".purple")
    })
    post.addEventListener("mouseenter", (e) => {
      post.classList.toggle(".red")
    })
  }
  
})
