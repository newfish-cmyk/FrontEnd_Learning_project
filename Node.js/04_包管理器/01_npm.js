/*
    package.json
        - package.json 是包的描述文件
        - node中通过该文件对项目进行描述
        - 每一个node项目必须由package.json

    npm 命令
        npm init 初始化项目，创建package.json
        npm install 包名 将指定包下载到当前项目中
            会在dependencies属性中添加新的值
                ^4.17.21 匹配 4.x.x
                ~4.17.21 匹配 4.17.x
            会自动添加package-lock.json文件
                帮助加速npm下载
        npm install 包名 -g
            - 全局安装是将包安装到计算机中

        scripts:
            - 可以自定义一些命令，通过npm执行          
*/

