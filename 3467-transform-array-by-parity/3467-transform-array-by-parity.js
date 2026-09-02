/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let transformed = []

    for (let el of nums) {
        if (el % 2 == 0) {
            transformed.push(0)
        } else {
            transformed.push(1)
        }
    }

    return transformed.sort((a, b) => a - b)
};