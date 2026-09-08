/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (a, k, multiplier) {
    let n = a.length

    while (k--) {
        let min = Math.min(...a)
        for (let i = 0; i < n; i++) {

            if (a[i] == min) {
                a[i] = a[i] * multiplier
                break
            }
        }
    }


    return a
};