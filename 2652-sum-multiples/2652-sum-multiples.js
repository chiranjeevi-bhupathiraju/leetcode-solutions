/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let ct = 0
    for(i=1;i<=n;i++){
       if(i%3 == 0 || i%5 == 0||i%7 ==0){
        ct += i
       }
    }
    return ct
};