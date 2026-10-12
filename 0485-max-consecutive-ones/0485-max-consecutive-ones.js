/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = []

    let ct = 0

    for (let e of nums) {
        if (e === 1) {
            ct++
        } else {
            max.push(ct)
            ct = 0
        }
    }
    max.push(ct)

    return Math.max(...max)
};