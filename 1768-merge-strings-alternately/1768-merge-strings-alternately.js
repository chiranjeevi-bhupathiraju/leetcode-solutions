/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let r= ''
    for(let i=0, j=0; i<word1.length || j<word2.length ;i++,j++){
        if(word1[i]){
            r += word1[i]
        }

        if(word2[i]){
            r += word2[i]
        }
    }
    return r
};