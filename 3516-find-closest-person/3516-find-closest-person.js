/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let xDistance = Math.abs(x-z)
    let yDistance = Math.abs(y-z)

     if(xDistance < yDistance){
        return 1
    }else if(xDistance > yDistance){
        return 2
    }else {
        return 0
    }
};