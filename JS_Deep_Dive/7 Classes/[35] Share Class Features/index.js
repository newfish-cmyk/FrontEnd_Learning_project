class Product {
    constructor (name, price, discountable) {
        this.name = name;
        this.price = price;
        this.discountable = discountable;
    }

    isDiscountable() {
        return this.discountable;
    }
}

class SaleProduct extends Product{
    constructor(name, price,discountable,percentOff) {
        super(name, price, discountable);
        this.percentOff = percentOff;
    }

    getSalePrice() {
        if (super.isDiscountable()) {
            return this.price
        }
    }
}

const product1 = new SaleProduct("Coffee Maker", 99, true, '10%');
console.log(product1)