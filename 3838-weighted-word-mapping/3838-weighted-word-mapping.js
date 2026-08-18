/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    const n = words.length
    let s = ''

    for(i=0;i<n;i++){
        let sum = 0
        let str = words[i].split('')

        for(let ch of str){
           sum += weights[ch.charCodeAt(0) - 97]
        }
       let m = sum % 26
       s += String.fromCharCode('z'.charCodeAt(0)-m)

    }

    return s
};