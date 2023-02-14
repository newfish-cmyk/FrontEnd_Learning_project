var price = 20;
var isSale = true;

// variable shadowing
// let & const - block-scoped
if (isSale) {
    const price = 20 - 2;
    console.log('sale price',price);
}

console.log('price', price);
