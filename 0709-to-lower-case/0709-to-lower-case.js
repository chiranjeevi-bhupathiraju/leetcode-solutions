/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let rs = ''
    for(let ch of s){
        if(ch >= 'A' && ch <= 'Z'){
            let ch1 = 'a'.charCodeAt(0) + (ch.charCodeAt(0) - 'A'.charCodeAt(0))
            let ch2 = String.fromCharCode(ch1)
           rs += ch2
        }
        else {
            rs += ch
        }
    }
    return rs
};