// callback -> promises

// pending
// fulfilled
// rejected
function test(a,b){
    const promise = new Promise((resolve, reject) => {
        if(a>b){
            resolve('hahaha');
        }else{
            reject('lalala');
        }
    })
    promise
        .then(success => console.log(success))
        .catch((faliure) => console.log(faliure))
        .finally(() => console.log('done'));
    console.log('test start')
}

test(2,1);