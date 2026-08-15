/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let val = num
    let ct = 0
    while(val>0){
        if(val % 2 == 0){
            val = val/2
        }else{
            val = val - 1
        }
        ct++
    }
    return ct
};