//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo (num1, num2) {
    alert(num1 - num2)
}
subTwo(10, 4)
//create a function that divides three numbers and console logs the quotient
function divThree(num1, num2, num3) {
    consolelog(num1 / num2 / num3)
}

divThree(25, 5, 2)
//create a function that multiplys three numbers and returns the product
function multThree (num1, num2, num3) {
    return num1 * num2 * num3
}

console.log(multThree(4, 3, 2))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium (num1, num2, num3) {
    return (num1 + num2) % num3
}

console.log(medium(2,4,3))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFour (num1, num2, num3, num4) {
  if ((num1 * num2) > 100) {
        console.log(num3 + num4)
  }else if ((num1 * num2) < 100) {
       console.log(num3 - num4)
  } else {
      alert((num1 * num2 * num3) % num4)
  }
}