function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchText = searchFieldElement.value;

      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         for (const td of tdElements) {
            if (td.textContent.includes(searchText)){
               trElement.classList.add('select');
               break;
            }
            else {
               trElement.classList.remove('select');
            }
         }
      }
      searchFieldElement.value = "";
   }
}
