/*

this: reference to an object

4 Rules to 'this'. How is it called?

1) in the global context
2) as a method on an object
3) as a constructor function or class constructor
4) as a DOM event handler

*/

// console.log(this)

// function wharIsThis() {
//     'use strict';
//     console.log(this);
// }

// wharIsThis();

const user = {
    first: 'Reed',
    last: 'Barger',
    greetUser() {
        console.log(`Hi, ${this.first} ${this.last}`);
    }
}