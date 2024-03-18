function solve(employeeName){
    for (const person of employeeName) {
        console.log(`Name: ${person} -- Personal Number: ${person.length}`)
    }
}

function fancySolveEx1(employeeNames){
    employeeNames
        .map(name => ({name, personalNumber: name.length}))
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

function solve2(listTowns){
    let towns = []
    for (let i = 0; i < listTowns.length; i++) {
        let [town, latitude, longitude] = listTowns[i].split(" | ");
        let objectTown =  {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        towns.push(objectTown)
    }
    towns.forEach(town => console.log(town))
}

const listNames =[
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
//fancySolveEx1(listNames)

solve2(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);




