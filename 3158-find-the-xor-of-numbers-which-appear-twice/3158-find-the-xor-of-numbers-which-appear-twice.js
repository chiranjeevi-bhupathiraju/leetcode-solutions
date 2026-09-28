/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    let x = 0

    let freq = {}

    for (let a of nums) {
        freq[a] = (freq[a] ?? 0) + 1
    }

    for (let e in freq) {
        if (freq[e] == 2) {
            x = x ^ +e
        }
    }

    return x
};

