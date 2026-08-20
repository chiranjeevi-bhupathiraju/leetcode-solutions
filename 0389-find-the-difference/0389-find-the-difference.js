/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   t = t.split('').sort().join('')
   s = s.split('').sort().join('')

    for(let i=0; i<t.length; i++){
        if(t[i] !== s[i]){
            return t[i]
        }
    }
};