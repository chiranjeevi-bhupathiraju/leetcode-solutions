/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   let maxWords = 0

    for(i=0;i<sentences.length;i++){
        maxWords = sentences[i].split(' ').length > maxWords ? sentences[i].split(' ').length : maxWords
    }

    return maxWords
};