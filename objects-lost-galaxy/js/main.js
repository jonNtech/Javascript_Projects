//Create a mouse object that has four properties and three methods
let mouse = {}
mouse.color = 'gray'
mouse.food = 'cheese'
mouse.relatives = 1001
mouse.location = 'paris'

mouse.chew = function(){
    console.log('they chew everything!')
}
mouse.cook = function(){
    console.log('This mouse can cook')
} 
mouse.hat = function(){
    console.log('The chef hat for a mouse')
}

console.log(mouse)
