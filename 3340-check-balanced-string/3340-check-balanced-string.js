/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let es = 0
    let os = 0
    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            es += Number(num[i])
        } else {
            os += Number(num[i])
        }
    }

    return es == os
};