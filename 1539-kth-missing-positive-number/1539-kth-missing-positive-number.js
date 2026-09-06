/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let set = new Set(arr)
    let c = 0

    for (let x = 1; ; x++) {
        if (!set.has(x)) {
            c++
            if (c === k) {
                return x
            }
        }
    }
};