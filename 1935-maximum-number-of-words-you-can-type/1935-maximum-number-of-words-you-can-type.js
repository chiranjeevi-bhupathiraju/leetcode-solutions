/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let ct = 0

    let t = text.split(' ')
    let b = brokenLetters.split('')

    for (let e of t) {
        let isValid = true
        for (let a of b) {
            if (e.includes(a)) {
                isValid = false
                break
            }
        }

        if (isValid) {
            ct++
        }
    }

    return ct
};