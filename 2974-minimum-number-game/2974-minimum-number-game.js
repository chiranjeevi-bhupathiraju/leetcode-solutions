/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (a) {
    a.sort((a, b) => a - b)
    let arr = []

    while (a.length) {
        let fe = a.shift()
        let se = a.shift()
        arr.push(se, fe)
    }

    return arr
};