// function sum(a, b) {
//     return a + b;
// }

// const result = sum(123, 456);

// 创建 Promise 时，构造函数中需要一个函数作为参数
// Promise 构造函数的回调函数，会在创建 Promise 时调用，调用时会有两个参数传递进去
const promise = new Promise((resolve, reject) => {
    // resolve 和 reject 是两个函数，通过这两个函数可以向Promise中存储数据
    // resolve 在执行正常时存储数据，reject在执行错误时存储数据
    // 通过函数来向 Promise 中添加数据
    setTimeout(() => {
        resolve("test");
    }, 1000);
    // reject("test2")
})

// setTimeout(() =>{
//     console.log(promise)

// }, 3000)

// 从Promise中读取数据，可以使用Promise的实例方法then来读取Promise中存储的数据
// then 需要两个回调函数作为参数，回调函数用来获取Promise中的数据
// 通过resolve存储的数据，调用第一个函数返回，可以在第一个函数中编写处理数据的代码
// 通过reject存储的数据或者出现异常时，会调用第二个函数


// Promise中维护了两个隐藏属性：
// PromiseResult-用来存储数据
// PromiseState-记录Promise的状态，只能修改一次，修改后不会再变

/*
    流程：
        当Promise创建时，PromiseState初始值为pending
            当通过resolve存储数据时，PromiseState变为fulfilled（完成）
                                    PromiseResult变为存储的数据
            当通过reject存储数据或出错时，PromiseState变为rejected（拒绝，出错）
                                        PromiseResult变为存储的数据或异常对象

        当通过then读取数据时，相当于为Promise设置了回调函数，
            如果PromiseState变为fulfilled，则调用then的第一个回调函数
*/

promise.then((result) =>{
    console.log(result);
}, (reason) => {
    console.log(reason);
})

