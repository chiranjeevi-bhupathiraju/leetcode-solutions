/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let max = 0
    let a = String(n)

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            let p = Number(a[i]) * Number(a[j])
            max = Math.max(p, max)
        }
    }

    return max
};