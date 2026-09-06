/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let a = s.split('')
    let res = []

    for (let e of a) {
        if (res.at(-1) == e) {
            res.pop()
        } else {
            res.push(e)
        }

    }

    return res.join('')


};