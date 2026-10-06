/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (o) {
    let x = 0
    for (let e of o) {
        if (e.includes('++')) {
            x += 1
        } else {
            x -= 1
        }
    }

    return x
};