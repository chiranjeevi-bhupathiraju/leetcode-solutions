/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0
    for(i=0;i<s.length;i++){
        total += Math.abs((s[i].toUpperCase().charCodeAt(s[i])-64)-27)*(i+1)
    }
    return total
};