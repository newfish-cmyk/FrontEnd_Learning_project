/* 
    undefined, null, boolean, number, string, symbol
*/
// // primitive - passed by value
// const num = 22;
// const anotherNum = 22;
// console.log(num === anotherNum);    // ture

// // object - passed by reference
// const obj = {};
// const anotherObj = {};
// console.log(obj === anotherObj);    // false

const obj = {};
const anotherObj = obj;
anotherObj.a = 1;
console.log(obj);   // {a: 1}