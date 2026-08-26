/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let a = edges.flat()

    let f = {}

    for (let el of a) {
        f[el] = (f[el] || 0) + 1
    }

    for (let ch in f) {
        if (f[ch] > 1) {
            return +ch
        }
    }
};