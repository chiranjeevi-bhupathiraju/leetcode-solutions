/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let freq = {}
    let str = n.toString();

    for(i=0;i<str.length;i++){

        freq[str[i]] = (freq[str[i]] || 0)+1
    }

    let score = 0

    for(const [key, value] of Object.entries(freq)){
          score += Number(key) * value
    }

  return score
};