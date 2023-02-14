// primitive types - passed by value

// undefined, null, boolean, number, string, symbol

const num = 'hello world';
const anotherNum = 'hello world';
console.log(num === anotherNum);    // true

// object - passed by reference
const obj = {};
const anotherObj = {};
console.log(obj === anotherObj);    // false