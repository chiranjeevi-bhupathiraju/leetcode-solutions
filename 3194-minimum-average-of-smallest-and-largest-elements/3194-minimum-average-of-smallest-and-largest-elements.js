/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (a) {
    let sorted = a.sort((a, b) => a - b)
    let avgs = []
    for (let i = 0; i < a.length / 2; i++) {
        let minE = sorted[i]
        let maxE = sorted[a.length - 1 - i]

        avgs.push((minE + maxE) / 2)
    }

    return Math.min(...avgs)
};