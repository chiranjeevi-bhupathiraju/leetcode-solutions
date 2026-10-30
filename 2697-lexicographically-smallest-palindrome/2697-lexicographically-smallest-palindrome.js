/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    let res = [...s];

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (res[i] !== res[s.length - 1 - i]) {
            let min = res[i] < res[s.length - 1 - i]
                ? res[i]
                : res[s.length - 1 - i];

            res[i] = min;
            res[s.length - 1 - i] = min;
        }
    }

    return res.join('');
};