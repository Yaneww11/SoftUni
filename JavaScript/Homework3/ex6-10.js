const isValidLength = (password, start = 6, end = 10) => password.length >= start && password.length <= end;
const isAlphaNumerical = password =>  /^[a-zA-Z0-9]+$/.test(password);
const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;
function solve(password){
    let isValid = true;

    if (!isValidLength(password, 6, 10)){
        isValid = false;
        console.log("Password must be between 6 and 10 characters")
    }
    if (!isAlphaNumerical(password)){
        isValid = false;
        console.log("Password must consist only of letters and digits")
    }
    if (!isStrong(password)){
        isValid = false;
        console.log("Password must have at least 2 digits")
    }

    if (isValid){
        console.log("Password is valid")
    }

}

function fancySolvePassword(password){
    let validations = [
        [isValidLength, "Password must be between 6 and 10 characters"],
        [isAlphaNumerical, "Password must consist only of letters and digits"],
        [isStrong, "Password must have at least 2 digits"]
    ];

    let errors = validations
        .map(([validator, message]) => validator(password) ? '' : message)
        .filter(message => message)

    errors.length > 0 ? console.log(errors.join("\n")) : console.log("Password is valid");
}

function createNxNMatrix(n){
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i].push(n)
        }
        console.log(matrix[i].join("  "))
    }
}

//solve("MyPass123@231321")
fancySolvePassword("MyPass123@231321")
//createNxNMatrix(5)