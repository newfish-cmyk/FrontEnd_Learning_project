/*
    
*/

const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED:1,
    REJECTED:2
}

class MyPromise {

    #result;

    #state = PROMISE_STATE.PENDING;

    #callback;

    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this));        
    }

    // 私有的resolve() 用来存储成功的数据
    #resolve(value) {
        if (this.#state !== PROMISE_STATE.PENDING) return;

        this.#result = value;
        this.#state = PROMISE_STATE.FULFILLED;

        // 当resolve执行时，说明数据已经传入，需要调用then的回调函数
        this.#callback && this.#callback(this.#result);
    }

    #reject(reason) {

    }

    then(onFulfilled, onRejected) {
        if (this.#state === PROMISE_STATE.PENDING) {
            // 说明数据还没有进入Promise， 将回调函数设置为callback
            this.#callback = onFulfilled;
        }
        if (this.#state === PROMISE_STATE.FULFILLED) {
            /*
                目前 then只能读取已经存储进Promise的数据，
                    而不能读取异步存储的数据
            */
            onFulfilled(this.#result);
        }
    }
}

const mp = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("test");
    // }, 1000)
    resolve("test2")
})

mp.then((result)=>{
    console.log("result",result);
})
