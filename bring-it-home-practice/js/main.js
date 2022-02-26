// *Variables*
// Create a variable and console log the value
let coffee = 'Coffee is great';
console.log(coffee)

// // Create a variable, add 10 to it, and alert the value
let num = 55;
num = num + 10;
alert(num);

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
function sub4num (num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}

sub4num(10,2,3,1);

// // Create a function that divides one number by another and returns the remainder
function divOneNum (x, y) {
    return (x % y)
}

console.log(divOneNum(24, 5))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo (num1, num2) {
    if ((num1 + num2) > 50) {
        return "jumanji"
    } else return "This is not Jumanji"
}

console.log(addTwo(30,25));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree (num1, num2, num3) {
    if ((num1 * num2 * num3 % 3)== 0){
        alert('ZEBRA')
    } else alert('This is not a Zebra')
}

multThree(2, 2, 3);