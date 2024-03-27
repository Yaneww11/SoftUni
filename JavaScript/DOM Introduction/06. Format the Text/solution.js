function solve() {
    const outputElement = document.getElementById('output');
    const textElement = document.getElementById("input");
    const text = textElement.value;

    const result = text
        .split('.')
        .filter(element => !!element)
        .reduce((result, sentence, i) => {
          const resultIndex = Math.floor(i / 3);
          if (!result[resultIndex]){
              result[resultIndex] = [];
          }
          result[resultIndex].push(sentence.trim())

          return result
        }, [])
        .map(sentence => `<p>${sentence.join('. ')}.</p>`)
        .join("\n")

    outputElement.innerHTML = result;
}
