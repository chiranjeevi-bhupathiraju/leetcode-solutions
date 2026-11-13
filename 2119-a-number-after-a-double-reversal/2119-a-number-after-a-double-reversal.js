/**
 * @param {number} num
 * @return {boolean}
 */


var isSameAfterReversals = function (num) {
    let fr = Number(String(num).split('').reverse().join(''))
    let sr = Number(String(fr).split('').reverse().join(''))

    return num == sr
};