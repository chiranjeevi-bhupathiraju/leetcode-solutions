/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(n, index) {
    let res = []
    for(i=0;i<index.length;i++){
        res.splice(index[i],0,n[i])
    }

    return res
};