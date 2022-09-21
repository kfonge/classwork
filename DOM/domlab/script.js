var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]
let mainEl = document.querySelector("main")
//lab Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!<h1>"

//when using .setAttribute method which takes (name,value)

// Task 1.3
mainEl.classList.add("flex-ctr")

//2.0 grab id of nav tag
let topMenuEl = document.getElementById("top-menu")

//2.1
topMenuEl.style.height = "100%"

//2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//2.3
topMenuEl.classList.add("flex-around")

//3.1 use for of loop

for (const links of menuLinks) {
  //to create an element, you target the document first then use .createElement() method
  const a = document.createElement(
    //this line creates an a element for each link (iterator) of the menuLinks object (lab bullet 2)
    "a"
  )
  a.setAttribute("href", links)
  a.textContent = links.text // each line 2-5 above represents an object, which we assigned the variable links in line 32. now we isolate the text property of each of those and set it as the value of the <a> element's text

  topMenuEl.appendChild(a)
}
// grab the element and put it in a variable
let subMenuEl = document.getElementById("sub-menu")

// 4.1
subMenuEl.style.height = "100%"

// 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// 4.3 this step adds subMenuEl to the flex-around class
subMenuEl.classList.add("flex-around")

// 4.4

subMenuEl.style.position = "absolute"

// 4.5
subMenuEl.style.top = "0"

// 5.0
//instead of replacing the menuLinks array up top, you can just re-declare here on line 64 b/c var hoists the new values to override the menuLinks array that was originally declared on line 1
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

const topMenuLinks = document.querySelectorAll("a")
// querySelectorAll returns an array (or array-like object)
const showingSubMenu = false

// 5.2 Attach a click event listener

topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault()
  if (evt.target.tagName != "A") {
    //note: tagname for an event property is always capitalized
    return
  } else console.log(evt.target)
  // 5.3
  // everything in blue btw if and .contains targets the a element that was clicked
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active")
    showingSubMenu = false
    subMenuEl.style.top = "0"
    return
  }
  // 5.4
  for (i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active")
  }
  //5.5
  evt.target.classList.add("active")
  //5.6
  // Potential Alternative way using the hint...if (evt.target.text != 'about') {

  let activeLink //this will later hold the object from within menuLinks, associated with the click event
  for (i = 0; i < menuLinks.length; i++) {
    //look to see if target text matches text property in a given object for menuLinks
    if (evt.target.text == menuLinks[i].text) {
      //if it does, we set active link to menuLinks[i]
      activeLink = menuLinks[i]
    }
  }
  //5.6 if this property exists in the object, set showingSubMenu to true
  if (activeLink["subLinks"]) {
    let showingSubMenu = true;
  } else {
    showingSubMenu = false
  }

  //5.7
  //
  const array1 = 
  if (showingSubMenu) {
    buildSubMenu(array);
  }

  // //5.8
  // let buildSubMenu = (object) => {
  //   subMenuEl = 
  // }
  
  

})
