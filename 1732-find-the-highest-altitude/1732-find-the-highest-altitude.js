/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let x = 0
    let max = 0

    for(let i=0;i<gain.length;i++){
          x += gain[i]
          max = Math.max(max,x)
    }

    return max
};