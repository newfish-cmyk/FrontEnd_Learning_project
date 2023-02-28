/*
    通过async可以快速地创建异步函数，
        异步函数的返回值会自动封装到一个Promise中返回

    Promise 解决了异步调用中回调函数的问题，
        但是链式调用太多后还是不好看
*/
// function sum (a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(a+b);
//         }, 1000);
//     })
// }

// async function fn1() {
//     try{
//         let result = await sum(123, 456);
//         result = await sum(result, 10);
//         console.log(result);
//     } catch(e) {
//         console.log("出错了")
//     }
// }

// let result = fn1();

// 当通过 await 调用异步函数时，会暂停代码运行，直到异步代码有结果时将结果返回
// await is only valid in async functions and the top level bodies of modules
// await 只能用于 async 声明的异步函数中，或者es模块的顶级作用域中

// let result = fn1();
// fn1();
// console.log("hahaha")
// console.log(result);

async function fn4() {
    console.log(1);
    // 当我们使用 await 调用函数后，当前函数后边的所有代码
    // 会在当前函数执行完毕后，被放入到微任务队列里
    await console.log(2);
    console.log(3);
}

fn4()
console.log(4);     // 1 2 4 3