/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let a = s.slice(0, s.length / 2).toLowerCase().split('').filter((i) => 'aeiou'.includes(i))
    let b = s.slice(s.length / 2).toLowerCase().split('').filter((i) => 'aeiou'.includes(i))

    return a.length == b.length
};