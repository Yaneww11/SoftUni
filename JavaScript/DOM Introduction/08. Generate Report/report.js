function generateReport() {
    const thElements = document.querySelectorAll('table th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const activeColumns = Array
        .from(thElements)
        .map(thElement => {
            const checkboxEl = thElement.querySelector('input[type= checkbox]');

            return{
                name: thElement.textContent.trim().toLowerCase(),
                active: checkboxEl.checked
            }
        });

    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result =Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!activeColumns[i].active){
                        return data
                    }

                    const columnName = activeColumns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data
                }, {})
            return result
        })

    outputElement.value = JSON.stringify(reportData, null, 2);
}
