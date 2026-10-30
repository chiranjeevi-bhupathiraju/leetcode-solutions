/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    let res = [...num]

    let j = true

    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] == '0' && j) {
            res[i] = ''
        } else {
            j = false
        }
    }

    return res.join('')
};