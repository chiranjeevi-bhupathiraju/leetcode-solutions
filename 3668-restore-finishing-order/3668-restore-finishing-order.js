/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (o, f) {
    let res = []

    for (let e of o) {
        if (f.includes(e)) {
            res.push(e)
        }
    }

    return res
};