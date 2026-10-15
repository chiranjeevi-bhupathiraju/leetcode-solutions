/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function (s, x, y) {
    let a = s.split('')

    let yChars = a.filter((it) => it == y)
    let xChars = a.filter((it) => it == x)
    let xyChars = a.filter((it) => it != x && it != y)

    return [...yChars, ...xChars, ...xyChars].join('')
};