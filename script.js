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
