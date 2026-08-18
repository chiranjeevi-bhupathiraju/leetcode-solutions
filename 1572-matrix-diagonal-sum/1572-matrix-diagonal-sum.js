/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const m = mat.length
    const n = mat[0].length
    
    let fd = 0
    for(i=0,j=0;i<n && j<m ; i++,j++){
        fd += mat[i][j]
    }


     let sd = 0
     for(i=0,j=m-1;i<n&& j>=0; i++,j--){
        if(i!=j){
       sd += mat[i][j]

        }
    }


    return fd+sd
};
