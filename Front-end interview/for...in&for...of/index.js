// const array = [1, 2, 3, 4, 5];   // 两者都可以遍历数组
// const array = [1, , 3, , 5];    // for...in 会跳过空值， for...of 则弥补了这个缺陷

// console.log("for...in");
// for (let x in array) {
//     console.log(x);
// }

// console.log("for...of");
// for (let x of array) {
//     console.log(x);
// }

// const obj = {
//     test1: "aaaa",
//     test2: "bbbb",
//     test3: "cccc"
// }

// // for...in 能遍历对象的键名
// for (let x in obj) {
//     console.log(x);
//     console.log(obj[x]);
// }

// // for...of 遍历会报错  obj is not iterable
// for (let x of obj) {
//     console.log(x);
// }


// 如何使用for...of遍历对象
// 如果需要遍历的对象是类数组对象，用Array.from转成数组即可
// 用for...of遍历对象输出值
let obj={
    0: "1111",
    1: "2222",
    length: 2
};

obj = Array.from(obj);

for (let x of obj) {
    console.log(x);
}