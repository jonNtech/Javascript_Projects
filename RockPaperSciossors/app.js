const computerChoiceDisplay = document.querySelector('#computerChoice')
const userChoiceDisplay = document.querySelector('#yourChoice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if ( randomNumber === 1) {
        computerChoice = 'rock'
    } 
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a tie'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you Won!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you Won!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you Won!'
    }
    resultDisplay.innerHTML = result
}