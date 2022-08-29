var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main");
    //lab Task 1.1
    mainEl.style.backgroundColor = 'var(--main-bg)'
    mainEl.innerHTML = '<h1>SEI Rocks!<h1>';
    
    //when using .setAttribute method which takes (name,value)
    
    // Task 1.3
    mainEl.classList.add('flex-ctr')

    //2.0 grab id of nav tag 
    let topMenuEl = document.getElementById("top-menu");
    
    //2.1
    topMenuEl.style.height = '100%'

    //2.2
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
    
    //2.3
    topMenuEl.classList.add('flex-around')
   
    //3.1 use for of loop   
    
for (const links of menuLinks) {
    //to create an element, you target the document first then use .createElement() method 
    const a = document.createElement //this line creates an a element for each link (iterator) of the menuLinks object (lab bullet 2)
     ('a');    
    a.setAttribute('href', links) 
    a.textContent = links.text // each line 2-5 above represents an object, which we assigned the variable links in line 32. now we isolate the text property of each of those and set it as the value of the <a> element's text

    topMenuEl.appendChild(a)
}



let subMenuEl = document.getElementById('sub-menu');

// 4.1
subMenuEl.style.height = '100%'

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// 4.3 this step adds subMenuEl to the flex-around class
subMenuEl.classList.add('flex-around')

// 4.4

subMenuEl.style.position = 'absolute'

// 4.5
subMenuEl.style.top = '0'

// 5.0
//instead of replacing the menuLinks array up top, you can just re-declare here on line 64 b/c var hoists the new values to override the menuLinks array that was originally declared on line 1
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const topMenuLinks = document.querySelectorAll('a');
  
const showingSubMenu = false;

// 5.2 Attach a click event listener

topMenuEl.addEventListener('click', function(evt){
    evt.preventDefault();
    if (evt.target != 'a'){
        return;
    } else
    console.log('a') 
})
  

// 5.3


    
        