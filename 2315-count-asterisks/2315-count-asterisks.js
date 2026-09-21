/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let bool = false
    let ct = 0

    for (let e of s) {
        if (e == '|') {
            bool = !bool
        }

        if (!bool && e == '*') {
            ct++
        }
    }

    return ct
};