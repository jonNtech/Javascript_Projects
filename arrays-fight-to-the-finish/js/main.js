//Create an array of movie titles. Loop through the array and each element to the h2.
let movieArr = ['Billy Madison', 'Happy Gilmore', 'hotel Translyvania']

// for(let i = 0; i < movies.length; i++){ document.querySelector('h2').innerText += movies[i]  }
movieArr.forEach((x,i) => console.log(x,i))

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArr = [3, 5, 10, 6]

numArr.forEach((x,i) => { 
    numArr[i] = x + 3
})

//Find the average of all the numbers from question two
let sum = 0
numArr.forEach((num) => sum += num)
console.log(sum / numArr.length)


//  or
let sumss = 0
for (let i = 0; i < numArr.length; i++) {
    sumss += numArr[i]
}
console.log(sumss / numArr.length)