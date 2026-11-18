/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ct = 0;

    for (let e of new Set(word)) {
        if (c.includes(e)) {
            if (word.includes(e.toLowerCase())) {
                ct++;
            }
        }
    }

    return ct;
};