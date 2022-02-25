function fizzBuzz (a, b){
	for (let i = a; i <= b; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz')
		} else if (i % 3 === 0) {
			console.log('Fizz')
		}else if (i % 5 === 0) {
			console.log('Buzz')
		}  console.log(i) 
	}
}
console.log(fizzBuzz(1, 100))
