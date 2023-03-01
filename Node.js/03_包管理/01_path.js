/*
    path
        - 表示的路径
        - 通过path可以用来获取各种路径
        - 要使用path.需要先对其进行引入
        - 方法：
            path.resolve([...paths])

*/

const path = require("node:path");

// const result = path.resolve("./hello.js");
const result = path.resolve(__dirname, "./hello.js");

console.log(result);

/*
    fs (File System)
        - fs用来帮助node来操作磁盘中的文件
        - 文件操作即I/O操作
*/



const fs = require("node:fs");

fs.readFile(path.resolve(__dirname, "./hello.txt"))
    .then(buffer => {
        console.log(buffer.toString());
    })
    .catch(e => {
        console.log("出错了")
    })

// fs.readFileSync("./hello.txt")

// fs.readFile(
//     path.resolve(__dirname, "./hello.txt"),
//     (err, buffer) => {
//         if (err) {
//             console.log("出错了");
//         } else {
//             console.log(buffer.toString());
//         }
//     }
// )

