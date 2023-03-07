const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
    if (err) {
        console.log("ERROR");
    } else {
        console.log(data.toString());
    }
})