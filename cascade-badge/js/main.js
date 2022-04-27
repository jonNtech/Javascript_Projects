//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function pokemonTeam(team){
    let revTeam = team.reverse()
    console.log( revTeam )
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function isSquareBetterCube(x, y){
    let squareX = x.map(x =>Math.pow(x,2)).reduce((a,b) => a+b)
    let cubeY = y.map(y => Math.pow(y,3)).reduce((a,b) => a+b)
    console.log(squareX)
    console.log(cubeY)
    if (squareX > cubeY){
        return true
    }else {
        return false
    }
}
console.log(isSquareBetterCube([1,2,3], [2,3,1]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multipleI(arr){
    let multiArr = arr.filter((x,i)=> x%i === 0)
    return multiArr
}
console.log(multipleI([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function nums(arr) {
    let newArr = arr.map(x => Number(x))
    let result = newArr.reduce((a,b) => a+b)
    return result
}

console.log( nums([1,2,3,4,'5']) )