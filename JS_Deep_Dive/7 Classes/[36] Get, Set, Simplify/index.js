class Product {
    constructor(name, price, discountable) {
        this.name = name;
        this._price = price;
        this.discountable = discountable;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }
}

const product1 = new Product("Coffee Maker", 99, false);

product1.price = 10

console.log(product1.price)
