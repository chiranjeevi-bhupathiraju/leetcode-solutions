/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let a = []
    let b = []
    for (let e of [...new Set(nums1)]) {
        if (!nums2.includes(e)) {
            a.push(e)
        }
    }
    for (let e of [...new Set(nums2)]) {
        if (!nums1.includes(e)) {
            b.push(e)
        }
    }

    let res = []

    res.push(a, b)

    return res
};