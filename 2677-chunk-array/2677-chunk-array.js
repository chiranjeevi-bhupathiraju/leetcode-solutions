/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let r = []

    for (let i = 0; i < arr.length; i += size) {
        let sa = arr.slice(i, i + size)
        r.push(sa)
    }

    return r
};
