function solve() {
    let text = document.getElementById('text').value;
    let naming_convention = document.getElementById('naming-convention').value;
    let elementResult = document.getElementById('result');

    if (naming_convention !== "Pascal Case" && naming_convention !== 'Camel Case'){
        elementResult.textContent = "Error!";
    }
    else {
        let arr_words = text.toLowerCase().split(" ");
        for (let i = 0; i < arr_words.length; i++) {
            if (naming_convention === "Camel Case"){
                if (i === 0){
                    continue;
                }
            }
            arr_words[i] = arr_words[i].charAt(0).toUpperCase() + arr_words[i].slice(1);
        }
        elementResult.textContent = arr_words.join("");
    }
}