/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let ct = 0;

    while (nums.length > 1) {
        let a = nums.shift();
        let b = nums.pop();

        ct += Number('' + a + b);
    }

    if (nums.length === 1) {
        ct += nums.pop();
    }

    return ct;
};