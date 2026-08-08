/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ct = 0
    let res = 0

    for(let c of s){
       if(c === 'L') ct++
       if(c === 'R') ct--

       if(ct===0){
        res++
       }
    }

    return res
};