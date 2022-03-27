// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '   Coke   '
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multWord = 'this is a apple'
console.log(multWord.includes('apple')) //will retun the position of where the word starts
//  OR
if ( multWord.search('apple') !== -1){
    console.log('yes')
    } else {
        console.log('no')
    }      

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
    let result = Math.floor(Math.random())
    if(result <= .33){
        return 'Rock'
    } else if(result <= .66){
        return 'Paper'
    } else {
        return 'Scissors'  
}}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rps()

    if (playerChoice === botChoice){
    console.log('You Tied')
}   else if( (playerChoice === 'Rock' && botChoice === 'Scissors') || (playerChoice === 'Paper' && botChoice === 'Rock') || (playerChoice === 'Scissors' && botChoice === 'Paper')){
    console.log('You Win')
} else {
    console.log('You Lose!')
}}
//checkWin('Rock')


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGames(arr){
    arr.forEach(e => checkWin(e))
}


playGames( ['Rock', ' Paper', 'Scissors'] )