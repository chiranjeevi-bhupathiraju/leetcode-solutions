/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    for(let i=s.length-1;i>=0;i--){
        if(!'aeiou'.includes(s[i])){
            return s.slice(0,i+1)
        }
    }
    return ''
};