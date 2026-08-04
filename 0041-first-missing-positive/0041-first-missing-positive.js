/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums){
    let set = new Set(nums)

    for (let i = 1; ; i++) {
        if (set.has(i)) {
            //
        } else {
            return i
        }
    }
};
