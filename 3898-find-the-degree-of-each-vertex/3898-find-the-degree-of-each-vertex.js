/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (m) {
    let res = []

    for (let e of m) {
        let sum = 0
        for (let a of e) {
            sum += a
        }
        res.push(sum)
    }

    return res
};