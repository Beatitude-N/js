// console.log("hello world")
// sentence = "How are you doing, nice to see you."
// console.log(sentence)
// // operators
// // food = Number(prompt("How much was the food?"))
// // tipPercentage = Number(prompt("how many percentage")) / 100
// // tipAmount = food * tipPercentage
// // console.log("Tip:", tipAmount)
// // alert(tipAmount)

// // totalAmount = food + tipAmount
// // console.log("Total:", totalAmount)


// // fruit = prompt("what is your favorite fruit?")
// // console.log(fruit)

// // baby weather app
// //if it rain "grab your umbrella"
// //else "wear your sunglasses"
// let weather = prompt("what is the weather?")
// if (weather == "rain") {
//     console.log("grab your umbrella")
// } else{
//     console.log("wear your sunglasses")
// }

// functions
// this is say myMyName function with no argument
// does: it logs out you name to the console

// function sayMyName(){
//     console.log("Beatitude")
//     console.log("Noah")
//     console.log("Olamide")
//     console.log("Esther")
// }
// // sayMyName()

// function sayMyName2(name){
//     console.log(name)
// }
// // sayMyName2("bola")

// // this is say myMyName2 function with 1 argument `name`
// // does: it logs out you name to the console

// function greeting(name){
// greet = `Hi ${name}, Nice to meet you!`
// console.log(greet)
// }
// // greeting("Donale")

// function sum(a,b){
//     return a + b
// }
// num1 =sum(1,2)
// // console.log(num1)


// function calculateFoodTotal(food, tip){
// const tipPercentage = tip / 100
// const tipAmount = food * tipPercentage
// const totalAmount = sum(food, tipAmount)
// return totalAmount
// }
// console.log(calculateFoodTotal(100 , 20))

// //ES6
// // Arrow functions =>

// // Arrow functions with explicit return
// const sumArrow = (a, b) => {
//     return a + b
// }

// // Arrow functions with implicit return
// const sumArrow2 = (a, b) => a + b
// console.log(sumArrow2(10, 50))

// functions
// this is say myMyName function with no argument
// does: it logs out you name to the console

function sayMyName(){
    console.log("Beatitude")
    console.log("Noah")
    console.log("Olamide")
    console.log("Esther")
}
// sayMyName()

function sayMyName2(name){
    console.log(name)
}
// sayMyName2("bola")

// this is say myMyName2 function with 1 argument `name`
// does: it logs out you name to the console

function greeting(name){
greet = `Hi ${name}, Nice to meet you!`
console.log(greet)
}
// greeting("Donale")

function sum(a,b){
    return a + b
}
num1 =sum(1,2)
// console.log(num1)


function calculateFoodTotal(food, tip){
const tipPercentage = tip / 100
const tipAmount = food * tipPercentage
const totalAmount = sum(food, tipAmount)
return totalAmount
}
// console.log(calculateFoodTotal(100 , 20))

//ES6
// Arrow functions =>

// Arrow functions with explicit return
const sumArrow = (a, b) => {
    return a + b
}

// Arrow functions with implicit return
const sumArrow2 = (a, b) => a + b
// console.log(sumArrow2(10, 50))

// Add function
const add = (a, b) => a + b
// console.log(add(100, 50))

// Subtract function 
const sub = (a, b) => a - b
// console.log(sub(120, 50))

// Divide function
const div = (a, b) => a / b
// console.log(div(100, 20))

// Multiply function
const mul = (a, b) => a * b
// console.log(mul(10, 30))

// Arrays

// const fruit = ["Apple", "Orange", "Mango", "Cashew"]
// console.log(fruit)
// console.log(fruit[0])
// const fruits = ["Apple", "Orange", "Mango", "Cashew"]
// console.log(fruits)
// console.log(fruits[2])
// fruits.push("Pear")
// console.log(fruits)
// console.log(fruits.slice(1, 4))
// console.log(fruits.indexOf("Orange"))
// console.log(fruits.length)


// Object
const person = {
    name: "Donale",
    shirt: "white"
}
// console.log(person.name)
// console.log(person.shirt)

// const fruits = ["Apple", "Orange", "Mango", "Cashew","Apple", "Orange", "Mango", "Cashew","Apple", "Orange", "Mango", "Cashew","Apple", "Orange", "Mango", "Cashew","Apple", "Orange", "Mango", "Cashew"]

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const numbers = [1,2,3,4,5,6,7,8,9]

// for (const number of numbers) {
//     console.log(number * 2)
// }

const howManyLetter = () => {
    const phrase = "hey can you go to grocery with me?"

//     for (letter in phrase) {
//         console.log(Number(letter) + 1)
//     }
}

// howManyLetter()

// const wordFrequency = (phrase) => {
//     let frequency = {}
//    words = phrase.split("")
//    for (const word of words)
//    if (word in frequency) {
//     frequency[word] += 1
//    } 
//    else {
//     frequency[word] = 1
//    }
//     console.log(words)
//     return frequency
// }
// const boss = prompt("Input your words i will calculate the letter for you")
// console.log(wordFrequency(boss))

// let result = [1,2,3,4].map(number => number * 2)
// console.log(result)


// map

// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1,2,3,4]))


// filter

// const nums = [1,2,3,4,5,6]
// console.log(nums.filter(num => num > 4 || num < 2 ))


const actors = [
    {name: "Johnny", networth: 20000},
    {name: "Boss mhi", networth: 50000},
    {name: "Benny", networth: 200000},
    {name: "Kayode", networth: 10000},
    {name: "JB", networth: 25000},

]

// console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))
// let result = actors.filter(actor => actor.networth > 10000)
// console.log(result)
// let names = result.map(actor => actor.name).join("  ")
// console.log(names)

// document.getElementById("actor-names").innerHTML = `<h1>${names}</h1>`;


// const nums = [1,2,3]
// const result = nums.reduce(function(prev, curr){
//     return prev + curr
// })

// console.log(result)


const fruits = ["Apple", "Orange", "Mango", "Cashew","Apple",]

// random number([1,2]) = 1

const randomFruit = (fruits) => {
    const randomNumber = Math.floor(Math.random() * fruits.length)
    //console.log(randomNumber)
    return fruits[randomNumber]
}
console.log(randomFruit(fruits))


// weather


const weatherScorer = (weather) => {
    let score 
    if (weather == "rainy") {
        score = 1
    } else if (weather == "sunny"){
        score = -1
    } else {
        score = 0
    }
    return score
}
console.log(weatherScorer("sunny"))








let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let blue = document.getElementById("blue")

// red.onclick = () => console.log("You click red")
// yellow.onclick = () => console.log("You click yellow")
// blue.onclick = () => console.log("You click blue")

let squares = document.querySelectorAll(".colorSquare")

//console.log(squares)
// console.log(squares[o].value)
// console.log(squares[1].value)
// console.log(squares[2].value)
//squares.forEach(square => console.log(square.value))

// squares.forEach(square => {
//     square.onclick = () => console.log(square.value) 
// })


let timesClicked = {"red": 0, "yellow": 0, "blue": 0};

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1;
        square.innerText = timesClicked[square.value];
    };
});

function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.blue = 0
    squares.forEach(square => {
        square.innerText = ""
    })
}
let clearGameBtn = document.getElementById("cleargame")
clearGameBtn.onclick = () => clearScores()





