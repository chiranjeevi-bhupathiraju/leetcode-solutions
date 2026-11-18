/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let f = {}

    for (let e of nums) {
        f[e] = (f[e] ?? 0) + 1
    }

    let a = 0
    let b = 0

    for (let e in f) {
        a += Math.floor(f[e] / 2);
        b += f[e] % 2;
    }

    return [a, b]
};