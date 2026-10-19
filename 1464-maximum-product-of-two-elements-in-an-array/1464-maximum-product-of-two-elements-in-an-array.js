/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (n) {
    let val = []
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            let cal = (n[i] - 1) * (n[j] - 1)
            val.push(cal)
        }
    }

    return Math.max(...val)
};