/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let xor = 0
    for (let i = 0; i < n; i++) {
        let val = start + 2 * i

        xor = xor ^ val
    }

    return xor
};