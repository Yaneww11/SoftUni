function attachGradientEvents() {
    const gradientBox = document.getElementById("gradient");
    const resultElement = document.getElementById("result");

    gradientBox.addEventListener('mousemove', getPosition);

    function getPosition(event){
        const currWidth = event.offsetX;
        const elWidth = event.target.clientWidth;
        const progress = Math.floor((currWidth / elWidth) * 100);

        resultElement.textContent = `${progress}%`
    }
}