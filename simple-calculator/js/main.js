let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#onePlus').addEventListener('click', onePlusTotal)
document.querySelector('#twoPlus').addEventListener('click', twoPlusTotal)
document.querySelector('#fourPlus').addEventListener('click', fourPlusTotal)
document.querySelector('#fivePlus').addEventListener('click', fivePlusTotal)
document.querySelector('#sixPlus').addEventListener('click', sixPlusTotal)
document.querySelector('#sevenPlus').addEventListener('click', sevenPlusTotal)
document.querySelector('#eightPlus').addEventListener('click', eightPlusTotal)


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function onePlusTotal() {
  total = total + 1
  document.querySelector('#placeToPutResult').innerHTML = total
}

function twoPlusTotal() {
  total = total + 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function fourPlusTotal() {
  total = total + 4
  document.querySelector('#placeToPutResult').innerHTML = total
}

function fivePlusTotal() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sixPlusTotal() {
  total = total + 6 
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sevenPlusTotal() {
  total = total + 7
  document.querySelector('#placeToPutResult').innerHTML = total
}

function eightPlusTotal() {
  total = total + 8 
  document.querySelector('#placeToPutResult').innerHTML = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
