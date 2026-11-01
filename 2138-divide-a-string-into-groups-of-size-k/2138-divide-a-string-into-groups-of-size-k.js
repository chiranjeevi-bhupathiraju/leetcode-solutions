/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let res = [];

    let rem = s.length % k;

    if (rem !== 0) {
        s += fill.repeat(k - rem);
    }

    for (let i = 0; i < s.length; i += k) {
        res.push(s.slice(i, i + k));
    }

    return res;
};