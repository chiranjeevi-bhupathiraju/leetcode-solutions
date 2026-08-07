/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
   let capitalLength =  (word.match(/[A-Z]/g) || []).length;

   if(capitalLength=== word.length || capitalLength === 0 || word[0].match(/[A-Z]/g)&& capitalLength === 1){
    return true
   }

   return false
};