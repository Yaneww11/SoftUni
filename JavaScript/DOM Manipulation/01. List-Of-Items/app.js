let ulCloning = ulNumbers.cloneNode(true);
console.log(ulCloning)
function addItem() {
    let text = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    li.textContent = text;
    let ulNumbers = document.getElementById("items");
    ulNumbers.appendChild(li);
    // Clear input
    document.getElementById('newItemText').value = '';


}