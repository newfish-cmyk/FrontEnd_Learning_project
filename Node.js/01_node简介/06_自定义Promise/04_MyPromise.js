const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED:1,
    REJECTED:2
}

class MyPromise {

    #result;

    #state = PROMISE_STATE.PENDING;

    #callbacks = [];

    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this));        
    }

    #resolve(value) {
        if (this.#state !== PROMISE_STATE.PENDING) return;

        this.#result = value;
        this.#state = PROMISE_STATE.FULFILLED;

        queueMicrotask(() => {
            this.#callbacks.forEach(cb => {
                cb();
            })
        })
    }

    #reject(reason) {

    }

    then(onFulfilled, onRejected) {
        /*
            新Promise中的数据是回调函数中的返回值
        */
        return new MyPromise((resolve, reject) => {
            if (this.#state === PROMISE_STATE.PENDING) {
                this.#callbacks.push(() => {
                    resolve(onFulfilled(this.#result));
                })
            }else if (this.#state === PROMISE_STATE.FULFILLED) {
                queueMicrotask(() => {
                    resolve(onFulfilled(this.#result));
                })
            }
        })
    }
}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("test");
    }, 1000)
})

mp.then((result)=>{
    console.log("result1",result);
})

mp.then((result)=>{
    console.log("result2",result);
})

mp.then((result)=>{
    console.log("result3",result);
})