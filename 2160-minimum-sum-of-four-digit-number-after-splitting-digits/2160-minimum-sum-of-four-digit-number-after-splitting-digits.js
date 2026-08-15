/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
      let s =  String(num).split('').sort()

    return +(s[0]+s[2]) + +(s[1]+s[3])
};