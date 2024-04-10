const resButt = document.querySelector('#reset-button');
const decButt = document.querySelector('#decrement-button');
const incButt = document.getElementById("increase-button");
const currentNum = document.getElementById('result');




resButt.addEventListener('mouseover',reset);
decButt.addEventListener('click', decrease);
incButt.addEventListener('click', () => {
    currentNum.textContent = Number(currentNum.textContent) + 1;
});

function reset() {
    currentNum.textContent = 0;
}

function decrease(){
    currentNum.textContent = Number(currentNum.textContent) - 1;
    console.log(currentNum);
}
setTimeout(() => {
    resButt.removeEventListener('mouseover', reset);
}, 5000);