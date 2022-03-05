// *Variables*
// Create a variable and console log the value
let boughtIt = 10
console.log(boughtIt)

// Create a variable, add 10 to it, and alert the value
let numFun = 30
numFun += 10
alert(numFun)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}
subFour(5,4,3,2)
// Create a function that divides one number by another and returns the remainder
function divOne (num1, num2) {
    return num1 % num2
}
console.log(divOne(6 ,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
 function addTwo(num1, num2) {
     if ((num1 + num2) > 50) {
        alert('jumanji')
     } 
 }
 addTwo(30, 40)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree(num1, num2, num3) {
    let product = num1 * num2 * num3
    if (product % 3 === 0){
        alert('Zebra')
    }
}
multThree(4,3,5)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordPlay(word, num) {
    for(let i = 1; i<= num; i++) {
        console.log(word)
    }
}
wordPlay('yo', 21)
