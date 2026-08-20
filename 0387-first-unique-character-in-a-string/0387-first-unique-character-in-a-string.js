/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let f = {}

    for(let i=0; i<s.length; i++){
        f[s[i]] = (f[s[i]]??0)+1
    }

    for(let ch in f){
        if(f[ch] == 1){
            return s.indexOf(ch)
        }
    }

    return -1
};