// Promise是一个用来存储数据的对象
// 由于Promise存取方式的特殊，所以可以直接将异步调用的结果存储到Promise中

// const promise = new Promise((resolve, reject) => {
//     let flag = true;
//     if (flag) {
//         resolve("这是resolve的数据");
//     } else {
//         reject("这是reject的数据")
//     }
// })

// promise
//     .then(r => "hahaha")
//     .catch(r => console.log(1))
//     .then(r => console.log(0))

// promise.then(result => {
//     console.log(result);
// }, reason => {
//     console.log(reason);
// })

// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a+b);
//         }, 1000);
//     })
// }

// sum(123,456)
//     .then(result => result+7)
//     .then(result => {
//         console.log(result);
//     })



/*
    静态方法
        .resolve() 创建一个立即完成的promise
        .reject() 创建一个立即拒绝的promise
        .all([]) 同时返回多个promise的执行结果，其中有一个报错就返回错误
        .allsettled([]) 同时返回多个promise的执行结果，无论成败
        .race() 返回执行最快的结果
        .any() 
*/

Promise.resolve(10).then(r=>console.log(r));