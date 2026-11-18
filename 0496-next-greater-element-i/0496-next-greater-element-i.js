/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        let sa = nums2.slice(nums2.indexOf(nums1[i]))

        let max = -1
        for (let j = 0; j < sa.length; j++) {
            if (sa[j] > nums1[i]) {
                max = sa[j]
                break
            }
        }

        res.push(max)
    }
    return res
};