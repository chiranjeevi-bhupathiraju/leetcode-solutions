/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {


    let f = {}

    for (let e of s) {
        f[e] = (f[e] || 0) + 1
    }


    let values = Object.values(f);

    return values.every(e => e === values[0]);
};