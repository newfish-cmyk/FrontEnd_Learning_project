const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 44 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
];

const initialValue = 0;

const total = menuItems.reduce((max, menuItem) => {
    console.log(`
    max: ${max},
    menu item price: ${menuItem.price}
  `);
    return max>menuItem.price?max:menuItem.price;
}, initialValue);

console.log(total);

// .reduce get two parameters, the first one is what we need
// the second one is array element