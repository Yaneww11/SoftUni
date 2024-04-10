const textInput = document.querySelector('input[id=newItemText]');
const ul = document.querySelector('#items');
function addItem() {
    let li = document.createElement('li');
    li.textContent = textInput.value;

    let deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';

    if (li.textContent === ""){
        return
    }
    else {
        ul.appendChild(li);
        li.appendChild(deleteLinkElement)
        textInput.value = '';
    }
    deleteLinkElement.addEventListener('click', deleteLiElement)
    

    function deleteLiElement(){
        li.remove();
    }
}