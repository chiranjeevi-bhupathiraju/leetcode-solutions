/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let r = `${s.at(0)}`

    for(let i=1; i<s.length; i++){
        if(i % 2 === 1){
            let cc = s[i-1].charCodeAt(0)+ (+s[i])
          r += String.fromCharCode(cc)
        }else{
            r += s[i]
        }
    }

    return r
};