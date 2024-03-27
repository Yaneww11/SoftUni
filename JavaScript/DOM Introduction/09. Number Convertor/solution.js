function solve() {
    const inputNumberElement = document.getElementById('input');
    const selectMenuFromElement = document.getElementById('selectMenuFrom');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const resultElement = document.getElementById('result');
    const buttonConvert = document.querySelector('button');

    //Create elements
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    function convertDecimalToBinary(number){
        let result = "";
        while (number !== 0){
            result += number % 2;
            number = Math.floor(number / 2)
        }
        return result.split('').reverse().join('');
    }

    function convertDecimalToHexadecimal(number){
        const hexadecimalSymbols = ['A', 'B', 'C', 'D', 'E', 'F']
        let result = "";
        while (number !== 0){
            let remainder = number % 16;
            if (remainder > 9){
                remainder = hexadecimalSymbols[remainder - 10];
            }
            result += remainder;
            number = Math.floor(number / 16);
        }

        return result.split('').reverse().join('');
    }

    buttonConvert.addEventListener('click', () => {
        const number = Number(inputNumberElement.value);
        let result = "";
        if (selectMenuToElement.value === 'hexadecimal'){
            result = convertDecimalToHexadecimal(number);
        }
        else {
            result = convertDecimalToBinary(number);
        }
        resultElement.value = result;
    })
}
