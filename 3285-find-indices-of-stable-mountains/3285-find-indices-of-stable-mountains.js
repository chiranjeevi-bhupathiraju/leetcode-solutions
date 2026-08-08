/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let res = []

    for(i=1;i<height.length;i++){
        if(height[i-1]>threshold && height[i] != 0){
            res.push(i)
        }
    }
    return res
};