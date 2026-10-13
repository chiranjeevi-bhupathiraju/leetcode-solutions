/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (n) {
    n.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < n.length; i += 2) {
        sum += n[i]
    }

    return sum
};
