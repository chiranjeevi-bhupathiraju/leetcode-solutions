/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init1) {
    let x = init1

    return {
        increment: () => {
            return ++x
        },
        decrement: () => {
            return --x
        },
        reset: () => {
            return x = init1
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */