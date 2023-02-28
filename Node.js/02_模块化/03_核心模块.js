// 核心模块，是node中自带的模块，可以在node中直接使用
// global 是node中的全局对象，作用类似于window
// ES标准下，全局对象的标准名应该是 globalThis

// console.log(globalThis)

/*
    核心模块
        process
            - 表示当前node进程
            - 通过该对象可以获取进程的信息，或者对进程做各种操作
            - 如何使用
                1. process是一个全局变量，可以直接使用
                2. 属性和方法
                    process.exit()
                        - 结束当前进程，终止node
                    process.nextTick(callback[,..args]) 
                        - 将函数插入到 tick 队列中
                        - tick队列中的代码，会在下一次事件循环之前执行
                            会在微任务队列和红任务队列之间执行
                    
*/
console.log(process)