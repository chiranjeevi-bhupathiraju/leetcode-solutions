/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let res = 0


    let i = 0

    for (let e of s) {

        if (e == 'E') {
            i++
        } else {
            i--
        }

        res = Math.max(i, res)
    }

    return res
};