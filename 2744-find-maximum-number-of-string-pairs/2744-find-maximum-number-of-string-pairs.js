/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let ct = 0

    let s = new Set()


        for(let j=0; j<words.length; j++){
            let re = words[j].split('').reverse().join('')

            if(s.has(re)){
                ct ++
            }

            s.add(words[j])
        }


    return ct
};