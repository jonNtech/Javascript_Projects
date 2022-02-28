const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

// Task1 on arrow functions

// let ask = (question, yes, no) => (confirm(question) ? yes() : no());

//  ask ('do you agree?',
// 	() => alert('you agreed.'),
// 	() => alert('You canceled the execution.'));

// Fizz buzz challenge
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
