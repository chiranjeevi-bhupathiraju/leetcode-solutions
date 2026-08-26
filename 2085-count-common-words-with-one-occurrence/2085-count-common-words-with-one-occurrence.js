/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let [a, b] = words1.length > words2.length ? [words2, words1] : [words1, words2]


    let f1 = freq(a)
    let f2 = freq(b)

    let ct = 0
    for (let el in f1) {
        if (f1[el] == 1 && f2[el] == 1) {
            ct++
        }
    }


    return ct
};

const freq = function (a) {
    let f = {}
    for (let ch of a) {
        f[ch] = (f[ch] || 0) + 1
    }

    return f
}