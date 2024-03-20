function solve(input){
    input = input.toLowerCase().split(" ");
    let number_of_words = {};
    for (const word of input) {
        if (!number_of_words.hasOwnProperty(word)){
            number_of_words[word] = 0;
        }
        number_of_words[word] += 1;
    }

    let odd_occurrences_words = [];
    for (let word in number_of_words) {
        if (number_of_words[word] % 2 !== 0){
            odd_occurrences_words.push(word)
        }
    }
    console.log(odd_occurrences_words.join(" "))
}

function fancySolve(input){
    const  occurrences = input
        .split(' ')
        .reduce((acc, word) =>
            acc.hasOwnProperty(word.toLowerCase())
                ? { ...acc, [word.toLowerCase()]: acc[word.toLowerCase()] + 1}
                : { ...acc, [word.toLowerCase()]: 1}
        , {})

    const  result = Object
        .entries(occurrences)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word, count]) => word)
        .join(" ")

    console.log(result)


}

fancySolve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')