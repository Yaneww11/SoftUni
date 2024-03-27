function search() {
   const elementSearchField = document.getElementById("searchText");
   const searchText = elementSearchField.value.toLowerCase();
   const elUl = document.getElementById("towns");
   const elResult = document.getElementById("result");
   let countMatches = 0;
   const towns = Array.from(elUl.children);

    for (const town of towns) {
        if (town.textContent.toLowerCase().includes(searchText)){
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            countMatches++;
        }
        else {
            town.style.textDecoration = "none";
            town.style.fontWeight = "normal";
        }
    }

    elResult.textContent = `${countMatches} matches found`;
}
