/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let fs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    return fs == fs.split('').reverse().join('')
};