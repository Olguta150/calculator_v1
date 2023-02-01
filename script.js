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

function onClickStyle() {
    let digits = document.querySelectorAll('.digit');

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
