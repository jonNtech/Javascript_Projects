//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let x = 10

if (x < 16){
    console.log('they can not drive')
} else if (x < 18){
    console.log("they can't hate from outside the club, because they can't even get in")
} else if (x < 21) {
    console.log('they can not drink')
} else if (x < 25) {
    console.log('they can not rent cars affordably')
} else if (x < 30) {
    console.log('they can not rent fancy cars affordably')
}else { 
    console.log('there is nothing left to look forward too')
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', run)

function run (x) {
    let inputed = document.querySelector('#danceDanceRevolution').value


}