/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let val = s.trim().split(" ")
    return val[val.length-1].length
};
