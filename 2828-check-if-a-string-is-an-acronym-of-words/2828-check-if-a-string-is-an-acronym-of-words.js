/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    let a = ''
    for (let word of words) {
        a += word[0]
    }

    return a == s
};