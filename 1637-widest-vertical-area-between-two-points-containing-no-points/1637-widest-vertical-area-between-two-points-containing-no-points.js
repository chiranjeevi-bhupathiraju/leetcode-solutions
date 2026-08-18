/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let xVal = []

    for(let [x,y] of points){
       xVal.push(x)
    }
    xVal.sort((a, b) => a - b)

    let maxV = 0

    for(let i=1;i<xVal.length;i++){
         let s = xVal[i] - xVal[i-1]
         maxV  = Math.max(maxV,s)
    }

    return maxV
};