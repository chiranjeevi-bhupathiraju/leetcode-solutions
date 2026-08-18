/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let minV = Infinity

    for(let [x,y] of tasks){
        minV = Math.min(minV,x+y)
    }

    return minV
};