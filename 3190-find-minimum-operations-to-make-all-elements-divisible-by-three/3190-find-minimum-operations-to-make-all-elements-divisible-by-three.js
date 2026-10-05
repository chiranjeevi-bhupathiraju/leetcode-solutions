/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let op = 0

    for (let el of nums) {
        if ((el + 1) % 3 == 0 || (el - 1) % 3 == 0) {
            op++
        }
    }

    return op
};