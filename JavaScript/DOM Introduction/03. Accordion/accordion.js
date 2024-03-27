function toggle() {
    const hide_text = document.getElementById("extra");
    const elementButton = document.querySelector('.head span.button');
    let currentButtonText = elementButton.textContent;

    if (currentButtonText === 'More'){
        hide_text.style.display = 'block';
        elementButton.textContent = 'Less';
    }
    if (currentButtonText === 'Less'){
        hide_text.style.display = 'none';
        elementButton.textContent = 'More';
    }
}
