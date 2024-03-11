function smallestNumber(a, b ,c){
    if (a < b){
        if (a < c){
            return a
        }
        return c
    }
    if (b < c){
        return b
    }
    return c
}

function ex2(a, b, c){
    let sum = (n1,n2) => n1 + n2;
    return sum(a, b) - c;
}


function getCharactersBetween(start, end){
    let result = []
    for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
        result.push(String.fromCharCode(i));
    }
    return result
}
function getSortedCharacters(a, b){
    let result = [a, b];
    return result.sort()
}
function ex3(a, b){
    const [start, end] = getSortedCharacters(a, b);
    const result = getCharactersBetween(start, end);
    console.log(result.join(" "))

}

function convertIntToArray(num){
    let myFunc = num => Number(num);
    return Array.from(String(num), myFunc);
}

function ex4(number){
    const intArr = convertIntToArray(number)
    let odd_sum = 0;
    let even_sum = 0;
    for (const num of intArr) {
        if (num % 2 === 0){
            even_sum += num;
        }
        else {
            odd_sum += num;
        }
    }
    console.log(`Odd sum = ${odd_sum}, Even sum = ${even_sum}`)
}

function isPalindrome(num){
    function convertIntToArray(num){
        let myFunc = num => Number(num);
        return Array.from(String(num), myFunc);
    }
    const intArr = convertIntToArray(num);
    let start = 0;
    let end = intArr.length - 1;
    while (start !== end){
        if (intArr[start] !== intArr[end]){
            return false
        }
        start += 1;
        end -= 1;
    }
    return true
}
function ex5(arr){
    function isPalindrome(num){
        function convertIntToArray(num){
            let myFunc = num => Number(num);
            return Array.from(String(num), myFunc);
        }
        const intArr = convertIntToArray(num);
        let start = 0;
        let end = intArr.length - 1;
        while (start !== end){
            if (intArr[start] !== intArr[end]){
                return false
            }
            start += 1;
            end -= 1;
        }
        return true
    }

    for (const arrElement of arr) {
        console.log(isPalindrome(arrElement))
    }
}

function calculateDigitSum(numbers, filter){
    const filtered_digits = numbers
        .toString()
        .split("")
        .map(Number)
        .filter(filter)

    return filtered_digits.reduce((acc, digit) => acc + digit, 0)
}

function ex4SecondSolve(numbers){
    let odd_sum =  calculateDigitSum(numbers, x => x % 2 !== 0);
    let even_sum= calculateDigitSum(numbers, x => x % 2 === 0);
    console.log(`Odd sum = ${odd_sum}, Even sum = ${even_sum}`)
}


//console.log(smallestNumber(600, 342, 123));
//console.log(ex2(1, 17, 30));
//ex3('a', 'd')
ex4SecondSolve(1000435);
//ex5([123,323,421,121]);