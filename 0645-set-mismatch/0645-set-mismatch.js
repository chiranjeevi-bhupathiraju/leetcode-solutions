/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let map = new Map()
    let a = nums.length

    let f = {}
    for (let el of nums) {
        map.set(el, (map.get(el) ?? 0) + 1)
    }



    i = 1
    let dup = null
    let miss = null

    while (i <= a) {
        if (map.has(i)) {
            if (map.get(i) > 1) {
                dup = i
            }
        } else {
            miss = i
        }
        i++
    }

    return [dup, miss]
};
