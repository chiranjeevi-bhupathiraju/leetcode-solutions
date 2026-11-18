/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    let min = Infinity
    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] >= itemSize) {
            min = Math.min(capacity[i], min)
        }
    }
    return capacity.indexOf(min)
};