// let number = 0;

// function handleNumber() {
//     number += 1;
// }

// handleNumber();
// number = 0;
// console.log('number:', number);



// function handleNumber() {
//     let number = 0;
//     number += 1;
//     console.log('number:', number);
// }

// number = 0;
// handleNumber();
// handleNumber();
// handleNumber();

// function handleNumber() {
//     let number = 0;
//     return function addNumber() {
//         number += 1;
//         return number;
//     }
//     addNumber();
//     console.log('number:', number);
// }

// const showNumber = handleNumber();

// console.log(showNumber())
// console.log(showNumber())
// console.log(showNumber())

function handleNumber(step) {
    let number = 0;
    return function addNumber() {
        number += step;
        return number;
    }
}

const showNumber = handleNumber(2);

console.log(showNumber())
console.log(showNumber())
console.log(showNumber())

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined
