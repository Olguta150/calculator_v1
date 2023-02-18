let operationRow = document.querySelector('.operation-row');
let resultRow = document.querySelector('.result-row');
let digits = document.querySelectorAll('.digit');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clearAll = document.querySelector('.clear-all');
let clear = document.querySelector('.clear');
let point = document.querySelector('.point');
let equal = document.querySelector('.equal');

let firstOperand = '';
let secondOperand = '';
let operatorSign = null;
let equalOperator = false;

// window.onkeydown = () => keyboardInput();
window.addEventListener('keydown', keyboardInput);
equal.onclick = () => {
    calculate();
    equalOperator = true;
}
clearAll.onclick = () => deleteAll();
clear.onclick = () => deleteSingleChar();
point.onclick = () => addPoint();

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if(operator === add || operator === '+') {
        return add(a, b);
    } else if(operator === substract || operator === '-') {
        return substract(a, b);
    } else if(operator === multiply || operator === '×' || operator === '*') {
        return multiply(a, b);
    } else if(operator === divide || operator === '÷' || operator === '/') {
        if(b === 0) {
            console.log('null');
            return Infinity;
        } else {
            return divide(a, b);
        }
    } else {
        return modulo(a, b || operator === '%');
    }
}

operate();

function numberFunction() {
    number.forEach(num => num.onclick = () => addNumber(num.textContent));
}

numberFunction();

function addNumber(number) {
    if(equalOperator){
        resultRow.textContent = '';
        operationRow.textContent = '';
    }
    equalOperator = false;
    resultRow.textContent += number;
}

function operatorFunction() {
    operator.forEach(btn => btn.onclick = () => addOperator(btn.textContent))
}

operatorFunction();

function addOperator(content) {
    if(operatorSign !== null) calculate();
    firstOperand = resultRow.textContent;
    operationRow.textContent = `${firstOperand} ${content}`;
    resultRow.textContent = null;
    operatorSign = content;
}

function calculate() {
    secondOperand = resultRow.textContent;
    operationRow.textContent = `${firstOperand} ${operatorSign} ${secondOperand}`;
    resultRow.textContent = roundResult(operate(operatorSign, firstOperand, secondOperand));
    operatorSign = null;
}

function roundResult(number) {
    return Math.round(number * 10000) / 10000;
}

function deleteAll() {
    operationRow.textContent = '';
    resultRow.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operatorSign = null;
}

function deleteSingleChar() {
    if(resultRow.textContent === '') {
        operationRow.textContent = operationRow.textContent.toString().slice(0, -1);
    } else {
        resultRow.textContent = resultRow.textContent.toString().slice(0, -1);
    }
}

function addPoint() {
    if(resultRow.textContent === '') {
        resultRow.textContent = 0;
    }
    if(resultRow.textContent.includes('.')) return
    resultRow.textContent += '.';
}

function keyboardInput(e) {
    if(e.key >= 0 && e.key <= 9) addNumber(e.key);
    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') addOperator(convertOperator(e.key));
    if(e.key === '.') addPoint();
    if(e.key === 'Enter' || e.key === '='){
        calculate();
        equalOperator = true;
    }
    if(e.key === 'Backspace') deleteSingleChar();
    if(e.key === 'Escape') deleteAll();
}

function convertOperator(keyboard) {
    if(keyboard === '+') return '+';
    if(keyboard === '-') return '-';
    if(keyboard === '*') return '×';
    if(keyboard === '/') return '÷';
    if(keyboard === '%') return '%';
}

// keyboardInput();

function onClickStyle() {

    digits.forEach(digit => {
        digit.onmousedown = () => {
            digit.classList.add('onclick');
        };
        digit.onmouseup = () => {
            digit.classList.remove('onclick');
        }
    })
}

onClickStyle();

