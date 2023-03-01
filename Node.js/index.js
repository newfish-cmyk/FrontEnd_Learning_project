
// 异步函数
// function fn1() {
//     return Promise.resolve(1);
// }

// 通过async可以快速创建一个异步函数
// 异步函数的返回值会自动封装到一个Promise中

// async 是 Promise 的一个语法糖
// async function fn2() {
//     return 1;
// }

// console.log(fn2());

// fn2().then(r => {
//     console.log(r);
// })

// function sum(a, b) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(a+b)
//         },1000);
//     })
// }

// Promise解决了异步调用中回调函数问题
// async 实现了以同步的方式调用异步的代码

// async function fn3() {
//     sum(3, 3)
//     .then(r => sum(r, 4))
//     .then(r => sum(r, 5))
//     .then(r => sum(r, 6))
//     .then(r => {
//         console.log(r);
//     })

    // 当我们通过await去调用异步函数时，它会暂停代码的运行
    // 直到异步代码执行有结果，才会将结果返回
    // 然而上面这句话并不意味着程序会被阻塞
    // await 只能用于 async 声明的异步函数中，或 ES模块的顶级作用域中
    // 从而避免阻塞其他程序代码的执行

    // console.log("await前的输出");
    // let result = await sum(3, 3);
    // console.log("await后的输出");
    // console.log(result);

//     let result = await sum(3, 3);
//     result = await sum(result, 4);
//     result = await sum(result, 5);
//     console.log(result);

//     try{
//         let result = await sum(3, 3);
//         result = await sum(result, 4);
//         result = await sum(result, 5);
//         console.log(result);
//     } catch(e) {
//         console.log("出错了");
//     }
// }

async function fn4() {
    let result = await sum(3, 3);
    console.log(result);
}

// fn3();
// console.log("全局中的输出");

async function fn4() {
    console.log(1);
    // 使用await调用函数后，当前函数后边的所有代码
    // 会在当前函数执行完毕后，被放入微任务队列中
    await console.log(2);
    console.log(3);
}

fn4();

// function fn5() {
//     return new Promise(resolve => {
//         console.log(1);
//         console.log(2);
//         console.log(3);
//         resolve();
//     })
// }

function fn5() {
    return new Promise(resolve => {
        console.log(1);
        console.log(2);
        resolve();
    }).then(r => {
        console.log(3);        
 })
}

// fn5();

console.log(4);