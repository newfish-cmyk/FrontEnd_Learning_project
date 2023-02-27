const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED:1,
    REJECTED:2
}

class MyPromise {

    #result;

    #state = PROMISE_STATE.PENDING;

    // #callback;
    // 同一时刻可能有多个回调函数
    #callbacks = [];

    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this));        
    }

    #resolve(value) {
        if (this.#state !== PROMISE_STATE.PENDING) return;

        this.#result = value;
        this.#state = PROMISE_STATE.FULFILLED;

        // this.#callback && this.#callback(this.#result);
        queueMicrotask(() => {
            this.#callbacks.forEach(cb => {
                cb();
            })
        })
    }

    #reject(reason) {

    }

    then(onFulfilled, onRejected) {
        if (this.#state === PROMISE_STATE.PENDING) {
            // this.#callback = onFulfilled;
            this.#callbacks.push(() => {
                onFulfilled(this.#result);
            })
        }
        if (this.#state === PROMISE_STATE.FULFILLED) {
            // onFulfilled(this.#result);
            // then的回调函数应该放入微任务队列中执行，而不是直接调用
            queueMicrotask(() => {
                onFulfilled(this.#result);
            })
        }
    }
}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("test");
    }, 1000)
    // resolve("test2")
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