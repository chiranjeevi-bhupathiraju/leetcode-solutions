/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let cl = console.log
var digitSum = function (s, k) {
   
    while (s.length > k) {
        let j = ''
        for (let i = 0; i < s.length; i += k) {
            let ds = [...s].slice(i, i + k).reduce((a, c) => a + (+c), 0)

            j += ds
        }
        s = j

    }

    return s


};