// 定时器的作用是间隔一段时间后，将函数放入到任务队列中
setTimeout(() => {
    console.log(1);
}, 0);

/*
    Promise在执行时，then就相当于给了Promise回调函数
        当promise的状态由pending变为fulfilled
        then后面的回调函数进入任务队列
*/ 
Promise.resolve(1).then(() => {
    console.log(2);
})

// 在JS中任务队列有两种：宏任务队列 & 微任务队列
// 大部分代码在宏任务队列中排队，promise的回调函数在微任务队列中排队
// 所以整个流程为 调用栈 -> 微任务队列 -> 宏任务队列

console.log(3);

// JS是单线程的，它的执行依赖于事件循环机制


Promise.resolve().then(() => {
    setTimeout(() => {
        console.log(4);
    })
});

queueMicrotask(() => {
    console.log(5)
})
