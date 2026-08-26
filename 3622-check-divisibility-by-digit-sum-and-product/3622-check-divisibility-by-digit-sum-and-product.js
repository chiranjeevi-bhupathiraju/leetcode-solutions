/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    const digitSum = String(n).split('').reduce((a, c) => a + (+c), 0)
    const digitProduct = String(n).split('').reduce((a, c) => a * (+c), 1)


    return n % (digitSum + digitProduct) === 0
};