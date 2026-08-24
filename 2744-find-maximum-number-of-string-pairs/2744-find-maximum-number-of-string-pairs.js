/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let ct = 0

    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            let re = words[j].split('').reverse().join('')

            if(words[i] == re){
                ct ++
            }
        }
    }

    return ct
};