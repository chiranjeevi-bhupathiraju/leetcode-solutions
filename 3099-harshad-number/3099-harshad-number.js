/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = String(x).split('').reduce((a, c) => a + (+c), 0)

    return x % sum == 0 ? sum : -1
};