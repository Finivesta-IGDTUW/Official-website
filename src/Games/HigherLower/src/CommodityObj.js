class Commodity {
    constructor(name, price, change, symbol) {
        this.name = name;
        this.price = price;
        this.change = change;
        this.symbol = symbol;
    }
}

let fetchedCommodities = [];

function fetchCommodity(commodityArr) {
    if (fetchedCommodities.length >= Math.floor(commodityArr.length * 0.9)) {
        fetchedCommodities = [];
    }
    
    let r;
    do {
        r = Math.floor(Math.random() * commodityArr.length);
    } while (fetchedCommodities.includes(r));
    
    fetchedCommodities.push(r);
    return commodityArr[r];
}

export { Commodity, fetchedCommodities, fetchCommodity };