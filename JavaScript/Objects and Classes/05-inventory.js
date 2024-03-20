function solve(input){
    let heroes = [];
    for (const inputElement of input) {
        const [name, level, items] = inputElement.split(" / ");

        const hero = {
            name,
            level: Number(level),
            items,
        }

        heroes.push(hero);
    }
    heroes.sort((a,b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
