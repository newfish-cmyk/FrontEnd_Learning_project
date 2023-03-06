// 核心模块，是node中自带的模块，可以在node中直接使用

/*
    核心模块
        process
            - 表示当前node进程
            - 通过该对象可以获取进程的信息，或者对进程做各种操作
            - 如何使用
                1. process是一个全局变量，可以直接调用
                2. 有那些属性和方法
                    process.exit()
                        - 结束当前进程，终止node
                    process.nextTick(callback[, ...args])
                        - 将执行函数放入tick队列


*/
// console.log(process)

// console.log(111);
// console.log(222);
// process.exit(0);
// console.log(333);

// setTimeout(() => {
//     console.log(1)
// });

// queueMicrotask(() => {
//     console.log(2)
// });

// process.nextTick(() => {
//     console.log(3)
// })

// console.log(4)


/*
    path
        - 表示的路径
        - 通过path可以用来获取各种路径
        - 要使用path，需要先对其进行引入
        - 方法：
            path.resolve([...paths])
                - 用来生成一个绝对路径
                - 如果直接调用resolve，则返回当前的工作目录
                - 如果将一个相对路径作为参数，则resolve会自动将其转换成绝对路径
                
*/              


const path = require("node:path")

// 最终形态
const result = path.resolve(__dirname, "./hello.js")


/*
    fs (File System)
        - fs 用来帮助node来操作磁盘中的文件
        - 文件操作也就是所谓的I/O
        - 使用fs模块，同样需要引入
*/

const fs = require("node:fs");

// readFileSync() 同步的读取文件的方法，会阻塞后边代码的执行
// 当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以buffer对象的形式返回
// Buffer是一个临时用来存储数据的缓冲区
const buf = fs.readFileSync(path.resolve(__dirname,"./hello.txt"))

// readFile() 异步的读取文件的方法