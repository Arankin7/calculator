// Number and decimal buttons
const oneButtonEl = document.getElementById("numOne");
const twoButtonEl = document.getElementById("numTwo");
const threeButtonEl = document.getElementById("numThree");
const fourButtonEl = document.getElementById("numFour");
const fiveButtonEl = document.getElementById("numFive");
const sixButtonEl = document.getElementById("numSix");
const sevenButtonEl = document.getElementById("numSeven");
const eightButtonEl = document.getElementById("numEight");
const nineButtonEl = document.getElementById("numNine");
const zeroButtonEl = document.getElementById("numZero");
const decimalButtonEl = document.getElementById("decimal");

// arithmetic buttons
const addEl = document.getElementById("addition");
const minusEl = document.getElementById("subtract");
const multiplyEl = document.getElementById("multiply");
const divisionEl = document.getElementById("divide");
const equalsEl = document.getElementById("calculate");

// other elements
const inputEl = document.getElementById("numInput");
const clearEl = document.getElementById("clear");

// number button eventlisteners
oneButtonEl.addEventListener('click', (e) => {
    console.log('1');
});

twoButtonEl.addEventListener('click', (e) =>{
    console.log('2');
});

threeButtonEl.addEventListener('click', (e) =>{
    console.log('3');
});

fourButtonEl.addEventListener('click', (e) =>{
    console.log('4');
});

fiveButtonEl.addEventListener('click', (e) =>{
    console.log('5');
});

sixButtonEl.addEventListener('click', (e) =>{
    console.log('6');
});

sevenButtonEl.addEventListener('click', (e) =>{
    console.log('7');
});

eightButtonEl.addEventListener('click', (e) =>{
    console.log('8');
});

nineButtonEl.addEventListener('click', (e) =>{
    console.log('9');
});

zeroButtonEl.addEventListener('click', (e) =>{
    console.log('0');
});

decimalButtonEl.addEventListener('click', (e) =>{
    console.log('Decimal');
});

// arithmetic listeners

addEl.addEventListener('click', (e) => {
    console.log('Adding');
});

minusEl.addEventListener('click', (e) => {
    console.log('Subtracting');
});

multiplyEl.addEventListener('click', (e) => {
    console.log('Multiplying');
});

divisionEl.addEventListener('click', (e) => {
    console.log('Dividing');
});

equalsEl.addEventListener('click', (e) => {
    console.log('Calculating');
});

// Clear Eventlistener

clearEl.addEventListener('click', (e) => {
    console.log('Clear');
});







