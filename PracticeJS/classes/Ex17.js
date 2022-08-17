// class Cat {
//     constructor(name, color, age, personality, hungry){
//         this.name = name;
//         this.color = color;
//         this.age = age;
//         this.personality = personality;
//         this.hungry = true
//     }
//     meow(){
//         console.log('meow')
//     }
//     purr(){
//         console.log('purr')
//     }
//      eat(){ 
//             this.hungry = false
//             console.log('your cat has been fed')
//     }
// }

// //running code to check if objects and methods are working
// const Cat1 = new Cat('Garfield','orange', 10, 'frisky', false) 
// const Cat2 = new Cat('Kitty','grey', 1, 'shy', true)

// //console.log(Cat1,Cat2)

// Cat1.meow()
// Cat2.meow()

// Cat1.purr()
// Cat2.purr()

// console.log(Cat1.hungry)
// Cat1.eat()
// console.log(Cat1.hungry)

// console.log(Cat2.hungry)
// Cat2.eat()
// console.log(Cat2.hungry)

// Exercise 2

// class Pirate {

//     constructor(name,beard,drunk, mates){

//         this.name = name;
//         this.beard = beard;
//         this.drunk = false;
//     }
// talk(){
//     console.log('Yarrrr')
// }
// drink(){
//     this.drunk = true
//     console.log('Slow down there Mate-y!')
// }
// fight(mate){
//     console.log()
// }    
// }



//const Pirate1(LJSilver, 'Captain', false)



// Exercise 3

class Governor {
    constructor(name, age, party, incumbent, reelect) {
        this.name = name;
        this.age = age;
        this.party = party;
        this.incumbent = incumbent;
        this.reelect = reelect;

    }
    vote() {
        console.log('yae')
    }
    veto() {
        console.log('nay')
    }
    fundraise(funds) {
        funds += 10
        console.log(funds)
    }
}

const gov1 = new Governor('Johnson', 35, 'independent', false, false)

gov1.fundraise(100)
gov1.vote()
gov1.veto()
console.log(gov1)

class Person{
    constructor(name, age, status, income){
        
        this.name = name;
        this.age = age;
        this.status = status;
        this.income = income;  
    }
retire(){
    if(this.age < 65){
        console.log('You are under the standard retirement age')
    }
    else {
        console.log('I am retired')
    }
}
shout(){
    console.log('Aahhhhhh')
}
getPromotion(){
    this.income += 1000;
    console.log(this.income)
}

}

person1 = new Person('Jan', 40, 'employed', 60000)
person2 = new Person('Joe', 65, 'retired', 30000)

console.log(person1,person2)
console.log(person1.age)
person1.retire();
person1.shout();
person1.getPromotion();

person2.retire();
person2.shout();

