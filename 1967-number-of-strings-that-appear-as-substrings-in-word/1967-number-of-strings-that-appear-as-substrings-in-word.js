/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {

    let ct = 0
    for(let e of patterns){
        if(word.includes(e)){
            ct++
        }
    }
    return ct
};