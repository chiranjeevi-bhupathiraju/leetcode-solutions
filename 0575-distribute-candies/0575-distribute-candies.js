/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let p = candyType.length / 2

    let uc = [...new Set(candyType)].length

    return uc <= p ? uc : p
};