/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    for (i = 0; i <= words.length - 1; i++) {
        let reversed = words[i].split('').reverse().join('')
        if (words[i] == reversed) {
            return words[i]
        }
    }
    return ''
};