function sum(a, b, callback) {

    setTimeout(() =>{
        callback(a+b);
    }, 1000)

}

console.log("1111");

sum(222,333,(result) => {
    console.log(result);
});

console.log(444)