/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let ct = 0;

    for (let i = 0; i < words.length; i++) {
        let isConsistent = true;

        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                isConsistent = false;
                break;
            }
        }

        if (isConsistent) {
            ct++;
        }
    }

    return ct;
};
