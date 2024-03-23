function subtract() {
    let first_num = Number(document.getElementById('firstNumber').value);
    let second_num = Number(document.getElementById('secondNumber').value);
    let result = document.getElementById('result');

    result.textContent = first_num - second_num;
}