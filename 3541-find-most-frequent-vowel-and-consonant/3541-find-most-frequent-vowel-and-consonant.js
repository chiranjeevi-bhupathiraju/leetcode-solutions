/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq = {}
    let maxVF =0
    let maxCF =0

    for(let ch of s){
      freq[ch] = (freq[ch]||0)+1
      if('aeiou'.includes(ch)){
         maxVF = Math.max(maxVF,freq[ch])
      }else{
         maxCF = Math.max(maxCF,freq[ch])
      }
    }

    return maxVF+maxCF
    
};