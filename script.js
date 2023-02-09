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

operationRow.textContent = '23 x 15 =';
resultRow.textContent = 1506;

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

function reminder(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    if(operator === add) {
        return add(a, b);
    } else if(operator === substract) {
        return substract(a, b);
    } else if(operator === multiply) {
        return multiply(a, b);
    } else if(operator === divide) {
        return divide(a, b);
    } else {
        return reminder(a, b);
    }
}

operate(reminder, 63, 4);

// function populateDisplay() {
//     digits.forEach(digit => {
//         digit.addEventListener('click', () => {
//             let number = digit.textContent;
//             operationRow.textContent += number;
//             return number;
//         })
//     })
// }

// populateDisplay();

function firstNumber() {
    number.forEach(num => {
        num.addEventListener('click', () => {
            // firstOperand += num.textContent;
            // operationRow.textContent = firstOperand;
            addNumber(num.textContent);
        })
    })
}

firstNumber();

function operatorFunction() {
    operator.forEach(op => {
        op.addEventListener('click', () => {
            addOperator(op.textContent);
        })
    })
}

operatorFunction();

function addNumber(content) {
    resultRow.textContent += content;
}

function addOperator(content) {
    if(operatorSign !== null) 
    operationRow.textContent += content;
    operatorSign = content;
}

function result() {
    equal.addEventListener('click', () => {
        resultRow.textContent = operate(multiply, 4, 5);
    })
}

result();

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

