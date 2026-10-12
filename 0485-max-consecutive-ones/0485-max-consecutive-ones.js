/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let ct = 0

    for (let e of nums) {
        if (e === 1) {
            ct++
            max = Math.max(max, ct);
        } else {

            ct = 0
        }
    }


    return max
};