/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    const digitSum = String(n).split('').reduce((a, c) => a + (+c), 0)
    const sqrSum = String(n).split('').reduce((a, c) => a + ((+c) * (+c)), 0)

    return sqrSum - digitSum >= 50
};