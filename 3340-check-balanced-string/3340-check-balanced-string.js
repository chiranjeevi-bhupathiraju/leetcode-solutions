/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    const evenSum = num.split('').reduce((a, c, i) => {
        return i % 2 === 0 ? a + Number(c) : a;
    }, 0);

    const oddSum = num.split('').reduce((a, c, i) => {
        return i % 2 !== 0 ? a + Number(c) : a;
    }, 0);

    return evenSum === oddSum;
};