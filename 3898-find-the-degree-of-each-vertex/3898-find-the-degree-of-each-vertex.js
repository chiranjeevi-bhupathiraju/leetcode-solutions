/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
   let res = []
   let m = matrix[0].length
   for(i=0;i<matrix.length;i++){
    let s = 0
    for(j=0;j<m;j++){
          s += matrix[i][j]
    }
    res.push(s)
   }
   return res
};