// const nums = {
//     1: 1,
//     true: true
// };

// console.log(Object.keys(nums));

// const map1 = new Map([
//     [1, 1],
//     [true, true]
// ]);

// map1.set('key', 'value');

// map1.forEach((value, key) => {
//     console.log(key, value);
// });

// console.log([...map1.keys()])


const user1 = { name: "Tom" };
const user2 = { name: "Jerry" };

const secretKey1 = "aonecasofjee";
const secretKey2 = "dosneoinceoi";

const secretKeyMap = new WeakMap([
    [user1, secretKey1],
    [user2, secretKey2]
]);

const key = secretKeyMap.get(user2);
console.log(key);