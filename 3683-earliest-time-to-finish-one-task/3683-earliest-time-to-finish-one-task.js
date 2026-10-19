/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (t) {
    let res = []
    for (let e of t) {
        let sum = 0
        for (let a of e) {
            sum += a
        }
        res.push(sum)
    }

    return Math.min(...res)
};