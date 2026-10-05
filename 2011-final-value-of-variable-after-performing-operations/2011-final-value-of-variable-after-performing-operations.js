/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let X = 0

    for (i = 0; i < operations.length; i++) {
        if (operations[i].includes('++')) {
            X++
        } else {
            X--
        }
    }
    return X

};