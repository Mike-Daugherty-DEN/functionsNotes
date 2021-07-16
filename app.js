let planetHasWater = function(planet) {
    planet = planet.toLowerCase(); 
    if (planet === 'earth' || planet === 'mars'){
        return true
    } else {return false
    }
} 
console.log(planetHasWater('mArs'))


//In JS, functions are values and you can pass them around. 

//There are three ways to write functions:


// 1. function Declaration
//      This uses the keyword "function" first, before the =
//      You can invote it anywhere in the file - even before the function is defined! This is called hoisting.
//      Whenever the JS engine sees the word 'function', it makes extra room in the memory for it, even  before it runs the file. 
//      This is because JavaScript has something called the V8 Engine that interprets all of the JavaScript
//      in this V8 engine, there is something called Just In Time that looks for function & var, and makes room in the memory for it

function sayWhatup(name){
    console.log('Hello ' + name + '! ')
}
0 
sayWhatup('Wolfcub')


// 2. Function Expression
//In Function Expressions, the block has to begin w the keyword "function" in order for the computer to allocate memory.
// You must ALWAYS invoke the expression after the keyword has been defined.

let sayHi = function(name){
    console.log('Hello ' + name + '!')
}
console.log(sayHi('John'))


 // 3. Arrow
 //The obvious way to write an arrow function is as an expression:

const add = (a, b) => a + b 
//implicit return- you do not need a return in an arrow function 


// Add two numbers- memorize this:

 function add(a, b){
     return a + b 
 }
 console.log(add (3,5))

 //Let's do this exercise together, from the Functions chapter p 7:

 function getRandomInt(min, max){
     return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log(getRandomInt(17, 23))
_________________________________________________



function printName(){
    return 'Hunter Long'
}
function findName(){
    return printName()
}
function sayName(){
    return findName()
}

console.log(sayName())

function sayName(){ 
    var a = 'a'
    return function findName(){
        var b = 'b'
        return function printName(){
            var c = 'c'
            console.log(c)
            return 'David'
        }
    }
}

console.log(sayName())

for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('the outside i ', i)

// Exercise 1: Write a Function Declaration (5 min)
// Write a function named computeArea as a function declaration.
// It will have two parameters: width & height .
// It will compute the area of a rectangle (width X height) and return a string in the following form:
// The area of a rectangle with a width of ___ and a height of ___ is ___ square units
// Invoke the function to test it:

function(computeArea(width, height)){
    ('The area of a rectangle with a width of ' + (width) 'and a height of ' + (height) + "is " + ((width) * (height)) + "square units.')
}

console.log(computeArea(5, 25)) 
// output: The area of a rectangle with a w idth of 5 and a height of 25 is 125 square units

function computeArea(width, height) {
    let area = width * height 
    return ('The area of a rectangle with a width of ' + (width) + ' and a height of ' + (height) + ' is ' + (area) + ' square units.')
}
console.log(computeArea(5, 25))

// Exercise 2: Write a Function Expression (10 min) 
// Write a function named planetHasWater as a function expression. 
// It will have one parameter: planet.
// Return true if the argument is either “Earth” or “Mars”; otherwise, return false .
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in (‘earth’, ‘MARS’, etc.).
// Invoke the function a few times to test it:
// console.log( planetHasWater('Earth') ) //=> true 
// console.log( planetHasWater('Venus') ) //=> false // Test the bonus... 
// console.log( planetHasWater('mArS') ) //=> true

let planetHasWater = function(planet){
    planet = planet.toLowerCase();
    if (planet === 'earth' || planet === 'mars'){
    return true
} else {return false
}
}
console.log(planetHasWater('mars'))

// ____________________________________________________
// SCOPE




// Remember that everything in JavaScript is an object
// Javascript is also an object!
// Here is the nesting setup


// The great JS Object!________________________________

// Blueprint of JS Object----------------

// There is a blueprint of an array, for example

// our own object-----

const party = ['food', 'costumes', 'cats']
// This is where we make customize the blueprint into our own object

// -------------------

//---------------------------------------



//_____________________________________________________ 



// That was the structure, here is an example:





// my js file app.js___________________________________

// 1. The first scope level is called the 'Global Scope'; phones is living in the global scope; anything within the global scope can be accessed anywhere in the file
let phones = ['iphone', 'samsung', 'nokia', 'other']

// 2. The second scope level is called 'Functional Scope'; Party is global scope, but everything is Party Scope! (functional)
function party(){
    //lexical, local, or functional scope
    //everything in the curlies is in its own little contained universe.
}

// 3. The third scope level is called 'Block Scope'; 
let blockScope
const blockScope

//______________________________________________________



//This is called a callstack!

function printName(){
    return 'Hunter Long'
}

function findName(){
    return printName()
}

function sayName(){
    return findName()
}

console.log(sayName())

for (var i = 0; i < 10; i++){
    console.log(i)
}

const x = {
    y: 5
}
console.log(x)

x.y = 6
console.log(x)
//so, const x was 5, but now it's 6. So there are ways to manipulate an object. This is mutating your data. DO NOT MUTATE YOUR DATA.