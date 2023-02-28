/*
    所有的CommonJS的模块都会被包装到一个函数中

    (function(exports, require, module, __filename, __dirname){

    })
*/

// const {name, age, gender} =  require("./m1");

/*
    默认情况下，node中的模块化标准时CommonJS
        要想使用ES的模块化，可以采用以下两种方案
            1、使用mjs作为扩展名
            2、修改package.json将模块化规范设置为ES模块
*/

// 通过 as 来指定别名

// 通过ES模块化，导入的内容都是常量，在网页中也可以使用ES模块化

