/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let set = new Set(nums)
    let a = nums.length
    let res = []


    let f = {}
    for (let el of nums) {
        f[el] = (f[el] || 0) + 1
    }

    for (let el in f) {
        if (f[el] == 2) {
            res.push(+el)
        }
    }



    i = 1

    while (i <= a) {
        if (!set.has(i)) {
            res.push(i)
        }
        i++
    }

    return res
};
