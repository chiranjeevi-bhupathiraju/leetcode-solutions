/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxV = 0
    let s = 0
    for(i=0;i<gain.length;i++){
         s +=  gain[i]
        maxV = Math.max(maxV,s)
    }
    return maxV
};