/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const fs = strs[0]

    let r = ''

    for(let i=0; i<fs.length; i++){
        let fc = fs[i]

        for(let j=1; j<strs.length; j++){
            if(fc !== strs[j][i]){
                return r
            }
        }

        r += fs[i]
    }

    return r
};