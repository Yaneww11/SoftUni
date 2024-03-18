function createPerson(fn, ln, age){
    return {
        firstname: fn,
        lastname: ln,
        age: age
    }
}

p1 = createPerson('Yane', 'Trifonov', 21);
//console.log(p1)

firstname = 'Yane'
lastname = 'Trifonov'
age = 21

const shorthandPerson = {
    firstname,
    lastname,
    age,
}


const cat = {
    firstname,
    grades: [1, 2, 3, 5],
    owner: {
        lastname,
        age,
    },
    makeSound(){
        console.log("Meao...")
    },

    sleep: () => console.log("zzzzZzzz"),

}

const entries = Object.entries(p1)
//console.log(entries)

const keys = Object.keys(p1)
//console.log(`!!! Keys - ${keys}`)

const originalObject = Object.fromEntries(entries)
//console.log(originalObject)

// For in is use for objects
for (let key in originalObject){
    console.log(`${key} ->>>>> ${p1[key]}`)
}


//console.log(p1['firstname'])
if (p1['firstname']){
    //console.log("Found")
}
else {
    //console.log("Not found")
}

if (p1.hasOwnProperty('firstname')){
    //console.log("Found")
}
else {
    //console.log("Not found")
}

let phonebook = {
    "Yane": "21",
    "Petyr": "22",
    "Pesho": "23",
    "Goshi": "24",
}
let sorted = Object
    .entries(phonebook)
    .sort((a, b) => a[0].localeCompare(b[0]))
sorted = Object.fromEntries(sorted)
//console.log(sorted)

class Person{
    constructor(firstname, ln) {
        this.firstname = firstname;
        this.lastname = ln;
    }
    greet(to){
        console.log(`${this.firstname} says hello ${to}`)
    }
}

const person = new Person("Yane", "Yanev");
console.log(person instanceof Object)
console.log(person.greet('Ivan'))