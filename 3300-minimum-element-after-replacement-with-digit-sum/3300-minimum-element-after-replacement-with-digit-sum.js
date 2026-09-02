/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let ta = []

    for (let el of nums) {
        let s = String(el).split('').reduce((a, c) => a + (+c), 0)
        ta.push(s)
    }

    return Math.min(...ta)
};