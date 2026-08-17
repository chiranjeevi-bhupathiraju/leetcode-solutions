/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let res = []
        let c = 0
        functions.forEach(async (f, i) => {
            try {
                res[i] = await f()
                if (++c === functions.length) {
                    resolve(res)
                }
            } catch (e) {
                reject(e)
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */