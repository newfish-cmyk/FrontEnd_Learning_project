const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hello node");
});

server.listen(3000, () => {
    console.log("server is running");
})