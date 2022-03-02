//Write your pseduo code first! 
//enter a value and have the value convert from C to F and then consolelog that value. 

//received a value in C
//place that value into a converter function
//run a function that has the equation that converts C to F
//take the new value and consol.log that new vlaue.

document.querySelector('#buttonctof').addEventListener('click', convertC)



function convertC() {
    let cTemp = document.querySelector('#inputC').value
    cTemp = cTemp * 9/5 + 32

    document.querySelector('#resuted').innerText = cTemp
}

