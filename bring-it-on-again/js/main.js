// *Variables*
// Declare a variable, assign it a value, and alert the value
let fun = 10
alert(fun)

// Create a variable, divide it by 10, and console log the value
let num0 = 50
num0 = num0 / 10
console.log(num0)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThreeNum (num1, num2, num3) {
    alert(num1 * num2 * num3)
}
multThreeNum(10,3,2)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takeFour(num1,num2, num3, num4) {
    const result = num1 + num2 - num3 - num4
    console.log(result)
}
takeFour()

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function takeThreeNum(num1, num2, num3) {
    if ((100 + num1 - num2) / num3 > 25) {
        console.log('WE HAVE A WINNA')
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function takeDayOfWeek(dayOfWeek) {
   const day = dayOfWeek.toLowerCase()
    if(day === 'sunday' || day === 'saturday') {
        alert('weekend')
   } else if(day === 'monday' ||
             day === 'tuesday' ||
             day === 'wednesday' ||
             day === 'thursday' ||
             day === 'friday') {
        alert('week day')
   }else {
       alert('Try agian!')
   }
}
takeDayOfWeek('Tuesday')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function takeNumNow(num1){
    for(let i = 1; i <= num1; i+=3){
        console.log(i)
    }
}
takeNumNow(25)
