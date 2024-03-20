function solve(stock, delivery){
    let store = {};
    for (let i = 0; i < stock.length; i+=2) {
        let product = stock[i]
        let quantity = Number(stock[i + 1])

        store[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i+=2) {
        let product = delivery[i]
        let quantity = Number(delivery[i + 1])

        if (!store[product]){
            store[product] = 0
        }
        store[product] += quantity
    }

    for (const storeElement in store) {
        console.log(`${storeElement} -> ${store[storeElement]}`)
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'])