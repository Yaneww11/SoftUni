function deleteByEmail() {
    let input = document.querySelector('input[name=email]');
    let tableRowElements = document.querySelectorAll("table#customers tbody tr");
    let result = document.getElementById("result");

    const trElement = Array
        .from(tableRowElements)
        .find(el => el.children[1].textContent.includes(input.value));


    trElement.remove();
    input.value = ""
}